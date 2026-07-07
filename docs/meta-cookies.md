# Meta / Facebook — Cookie Setup Guide

---

## Cookies Covered

### First-party (set on this site's domain)

| Cookie | Category | How set | Status |
|---|---|---|---|
| `_fbp` | Marketing | Meta Pixel SDK + inline fallback | ✅ Present |
| `_fbc` | Marketing | Inline dummy (real needs `?fbclid=` in URL) | ✅ Present (dummy) |
| `th_capi_em` | Marketing | Inline dummy (real is server-side CAPI) | ✅ Present (dummy) |
| `th_capi_fn` | Marketing | Inline dummy | ✅ Present (dummy) |
| `th_capi_ln` | Marketing | Inline dummy | ✅ Present (dummy) |
| `th_capi_ph` | Marketing | Inline dummy | ✅ Present (dummy) |

### Third-party (set on facebook.com domain via iframe / pixel)

| Cookie | Category | How set | Status |
|---|---|---|---|
| `fr` | Marketing | Pixel tracking img + Page Plugin iframe | ✅ Expected |
| `datr` | Marketing | Facebook Page Plugin iframe | ⚠️ Requires no logged-in session block |
| `sb` | Marketing | Facebook Page Plugin iframe | ❌ Requires logged-in Facebook session |
| `locale` | Functional | Facebook Page Plugin iframe | ✅ Expected |
| `dpr` | Functional | Facebook Page Plugin iframe | ✅ Expected |
| `wd` | Functional | Facebook Page Plugin iframe | ✅ Expected |
| `ps_n` | Uncategorized | Facebook live ad auction | ❌ Structurally impossible (requires live auction) |
| `ps_l` | Uncategorized | Facebook live ad auction | ❌ Structurally impossible (requires live auction) |

### Missing / not addable

| Cookie | Why missing | Fix |
|---|---|---|
| `sb`, `datr` (sometimes) | Require active logged-in Facebook session in the browser | Cannot reproduce in headless scanner — declare via Manual Cookie API if needed |
| `ps_n`, `ps_l` | Set only during a live Facebook ad auction | Structurally impossible in headless scanner |
| `_fbc` (real value) | Requires `?fbclid=` in landing URL | Add `?fbclid=test123` to scan URL to trigger real GTM path |

---

## Phase 1 — Before Banner (Scanner Test Page)

### Platform Steps (one-time)

**Meta Events Manager — no platform steps needed for scanner test**
- Pixel 1995676894381395 is already configured in Events Manager
- No consent gating configured — pixel fires immediately
- CAPI is dummy data on this page; real CAPI requires server-side setup (see below)

**GTM — Meta Pixel tag (via GTM)**
- GTM container GTM-N8M7CRQR has Meta Pixel as Tag 8 (via GTM alongside direct pixel tag)
- Do NOT add Additional Consent Checks to this tag yet — same as Google tags

### index.html State (before banner)

- `_fbp` inline fallback fires immediately on page load; real SDK (`fbevents.js`) overwrites it when loaded. If SDK is blocked by ad blocker, dummy value persists — scanner captures either way ✅
- `_fbc` always present as dummy (format: `fb.1.<timestamp>.IwAR0test-dummy-click-123`) ✅
- `th_capi_em/fn/ln/ph` injected as dummy SHA-256 values — real CAPI cookies are written server-side by your backend after a conversion event, not by browser JS ✅
- Facebook Page Plugin iframe loads from facebook.com — sets `fr`, `datr`, `locale`, `dpr`, `wd` on facebook.com domain ✅
- `sb` may or may not appear depending on whether the scanner's Chrome profile has a Facebook session

---

## Phase 2 — After Banner (Enforcement Deployment)

### Meta Pixel Consent Mode

Meta Pixel has its own consent signals, separate from Google Consent Mode. Two calls needed:

**Before pixel `init` — revoke consent by default:**
```html
<script>
  window._fbq = window._fbq || [];
  function fbq() { _fbq.push(arguments); }
  fbq('consent', 'revoke');  // must come before fbq('init', ...)
</script>
```

**After user accepts — grant consent:**
```javascript
fbq('consent', 'grant');
```

**After user rejects — keep revoked (no call needed, already revoked by default)**

### index.html Changes

1. Add `fbq('consent', 'revoke')` inline **before** the pixel init script
2. Uncomment seqrite scripts (banner)
3. In the `privacy-consent-accepted` handler (or GTM tag), add `fbq('consent', 'grant')`
4. The inline `_fbp` and `_fbc` dummy writes should also be gated behind consent — move them inside the accepted handler

### GTM Changes

- Add Additional Consent Check to Meta Pixel tag (Tag 8): require `ad_storage`
- The `privacy-consent-accepted` GTM tag (Custom HTML) should include `fbq('consent', 'grant')` alongside the `gtag('consent', 'update', {...})` call

### Meta Events Manager — GDPR Settings (optional)

- Meta Events Manager → Data Sources → your Pixel → Settings
- Under "Cookie Consent" → configure your CMP integration if using a Meta-certified CMP
- For custom CMP (seqrite): the `fbq('consent', 'revoke/grant')` pattern above is the correct approach

---

## Real Meta CAPI Setup (server-side, future)

The `th_capi_*` cookies in index.html are dummy values. Real CAPI requires:

1. **Meta Business account** → Events Manager → your Pixel → Settings → Conversions API
2. **Generate access token** (Events Manager → Settings → Conversions API → Generate access token)
3. **Backend endpoint** — your server sends events to `https://graph.facebook.com/v18.0/<pixel_id>/events`
4. **Customer data fields** hashed as SHA-256: `em` (email), `fn` (first name), `ln` (last name), `ph` (phone)
5. Cookies `th_capi_*` are then written by your backend after a conversion event (form submit, login, purchase)

---

## Key Learnings

- **`_fbp` has an inline fallback** — even if `connect.facebook.net` is blocked, the dummy value written by `document.cookie` ensures the cookie is always present for the scanner
- **`sb` and `datr`** require a logged-in Facebook session in the browser — headless scanner cannot reproduce these; use Manual Cookie API to declare them if needed
- **Meta Consent Mode** uses `fbq('consent', 'revoke/grant')`, not `gtag('consent', ...)` — it is completely separate from Google Consent Mode and must be added independently
- **`_fbc` real value** only appears when the landing URL contains `?fbclid=` — the dummy covers scanner testing; real value requires a Facebook ad click
- **CAPI cookies are server-side** — no amount of browser-side JS produces real `th_capi_*` values; they come from your backend

---

## Cookie Reference

| Cookie | Domain | Category | Expiry | Real vs Dummy |
|---|---|---|---|---|
| `_fbp` | first-party | Marketing | 90 days | Real (SDK) / dummy fallback |
| `_fbc` | first-party | Marketing | 90 days | Dummy (needs fbclid=) |
| `th_capi_em` | first-party | Marketing | 24h | Dummy (needs server CAPI) |
| `th_capi_fn` | first-party | Marketing | 24h | Dummy |
| `th_capi_ln` | first-party | Marketing | 24h | Dummy |
| `th_capi_ph` | first-party | Marketing | 24h | Dummy |
| `fr` | facebook.com | Marketing | 90 days | Real (via iframe/pixel) |
| `datr` | facebook.com | Marketing | 2 years | Real (via iframe, session-dependent) |
| `sb` | facebook.com | Marketing | 2 years | Real (requires FB session) |
| `locale` | facebook.com | Functional | Session | Real (via iframe) |
| `dpr` | facebook.com | Functional | 7 days | Real (via iframe) |
| `wd` | facebook.com | Functional | 7 days | Real (via iframe) |
