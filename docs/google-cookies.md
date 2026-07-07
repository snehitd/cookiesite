# Google Consent Mode v2 — Setup Guide

---

## Cookies Covered

### First-party (set on this site's domain)

| Cookie | Category | How set | Status |
|---|---|---|---|
| `_ga` | Analytics | GTM → GA4 tag (G-89RWJTCPLZ) | ✅ Present |
| `_ga_89RWJTCPLZ` | Analytics | GTM → GA4 tag (Stream 1) | ✅ Present |
| `_ga_01XNDLZCYQ` | Analytics | Direct gtag.js (Stream 2) | ✅ Present |
| `_gcl_au` | Marketing | GTM → Conversion Linker | ✅ Present |
| `_gcl_aw` | Marketing | Inline dummy (real needs `?gclid=` in URL) | ✅ Present (dummy) |
| `gtm-session-start` | Functional | GTM → Conversion Linker | ✅ Present |
| `test_cookie` | Marketing | AdSense `adsbygoogle.js` — DoubleClick probe, self-deletes | ✅ Present (transient) |

### Third-party (set on Google domains via scripts / iframes)

| Cookie | Domain | Category | How set | Status |
|---|---|---|---|---|
| `IDE` | .doubleclick.net | Marketing | AdSense → DoubleClick request (inferred by scanner) | ✅ Inferred |
| `NID` | .google.com | Functional | Google Maps iframe | ✅ Expected |
| `CONSENT` | .google.com | Functional | Google Maps iframe | ✅ Expected |
| `AEC` | .google.com | Functional | Google Maps iframe | ✅ Expected |
| `SOCS` | .google.com | Functional | Google consent record — may appear via Maps iframe | ⚠️ Conditional |
| `YSC` | .youtube.com | Functional | YouTube iframe | ✅ Expected |
| `VISITOR_INFO1_LIVE` | .youtube.com | Marketing | YouTube iframe | ✅ Expected |
| `__Secure-YEC` | .youtube.com | Marketing | YouTube iframe | ✅ Expected |
| `VISITOR_PRIVACY_METADATA` | .youtube.com | Marketing | YouTube iframe | ✅ Expected |
| `__Secure-ROLLOUT_TOKEN` | .youtube.com | Marketing | YouTube iframe | ✅ Expected |
| `__Secure-YNID` | .youtube.com | Functional | YouTube iframe | ⚠️ Conditional |

### Missing / not addable

| Cookie | Why missing | Fix |
|---|---|---|
| `_gcl_aw` (real value) | Requires `?gclid=` in landing URL | Add `?gclid=test123` to scan URL to trigger real GTM path |
| `_gac_*` | Conversion attribution — set when URL has `?gclid=` | Same as above |
| `_gat` | GA rate-limiting cookie — only fires under high traffic | Cannot force |
| `__gads`, `__gpi`, `__eoi` | Google Publisher Tags / Ad Manager display ads | Requires GPT script + ad slot — not configured |
| Google account cookies (`SID`, `HSID`, etc.) | Require logged-in Google session | Cannot reproduce in headless scanner |

---

## Phase 1 — Before Banner (Scanner Test Page)

Goal: all tracking tags fire immediately, no consent blocking. Scanner captures all cookies.

### GTM Platform Steps (one-time, already done)

**Step 1 — Enable Consent Overview**
- GTM → container GTM-N8M7CRQR → Admin → Container Settings
- Check **"Enable consent overview"** → Save
- Tags list now shows a Consent column — informational only at this stage

**Step 2 — Do NOT add Additional Consent Checks to tags yet**
- Additional Consent Checks on a tag block it even when consent state is "unspecified"
- Leave all tags without additional checks until enforcement is ready
- The Built-In Consent Checks (ad_storage, ad_personalization, ad_user_data, analytics_storage) shown on GA4 tags are Google-managed and safe to leave — they do not block when consent is unspecified

**Step 3 — Triggers exist but are NOT linked yet**
- `privacy-consent-accepted` and `privacy-consent-rejected` custom event triggers already exist in GTM
- These were created for the seqrite CMP flow
- Do NOT link them to consent update tags yet — that happens in Phase 2

**Step 4 — Google Ads: Enhanced Conversions (optional, skip for test site)**
- Google Ads → Tools & Settings → Conversions → Settings → Enhanced conversions for web
- Requires an Administrator role to accept Customer Data Terms
- Skip for scanner test site — has no real ad campaigns

**Step 5 — GA4: Verify consent mode reporting**
- GA4 → Admin → Data Settings → Data Collection
- Confirm Google signals data collection is on
- Behavioral modeling data appears after ~1 week of traffic once consent mode is active

**Step 6 — Publish GTM container**
- Publish after Steps 1–5

### index.html State (before banner)

- All tracker scripts fire immediately on page load — no consent blocking
- `gtag('consent', 'default', {...})` is NOT present — do not add it yet; it would block GTM tags and break the scan
- Seqrite scripts commented out — no banner, no enforcement
- `assets/style.css` link will 404 — no functional impact on scanning

---

## Phase 2 — After Banner (Enforcement Deployment)

Goal: consent mode fully wired — tags blocked by default, unblocked only after user accepts.

### GTM Changes

**Step 1 — Add consent update tag for Accept**
- New Tag → Custom HTML → name it "Consent Update — Accepted"
- Content:
```html
<script>
  gtag('consent', 'update', {
    'analytics_storage': 'granted',
    'ad_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'functionality_storage': 'granted',
    'security_storage': 'granted'
  });
</script>
```
- Trigger: `privacy-consent-accepted`

**Step 2 — Add consent update tag for Reject**
- New Tag → Custom HTML → name it "Consent Update — Rejected"
- Content:
```html
<script>
  gtag('consent', 'update', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted'
  });
</script>
```
- Trigger: `privacy-consent-rejected`
- Why call update on reject: signals to Google that user was shown the banner and made a choice (vs. banner not yet shown). Google uses this for conversion modeling.

**Step 3 — Add Additional Consent Checks to tags**

| Tag | Add consent requirement |
|---|---|
| GA4 Configuration (G-89RWJTCPLZ) | `analytics_storage` |
| GA4 Event tags | `analytics_storage` |
| Conversion Linker | `ad_storage` |
| Ads conversion tags | `ad_storage`, `ad_user_data` |

**Step 4 — Publish GTM container**

### index.html Changes

**1. Add consent default before GTM snippet** (must come first — before GTM loads):
```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
</script>
<!-- GTM snippet goes here, AFTER the consent default -->
```

**2. Uncomment seqrite scripts:**
```html
<link rel="stylesheet" href="seqrite-config.css"/>
<script data-config="seqriteConfig" type="application/javascript" src="seqrite.js"></script>
<script type="application/javascript" src="seqrite-config.js"></script>
<script defer src="seqrite-enforcement.js"></script>
```

---

## Key Learnings / Corrections

- **"Consent Initialization" is NOT a tag type in GTM** — it is a trigger type. There is no dedicated tag template for it in the tag gallery. Use Custom HTML tag + Consent Initialization trigger. Or simpler: add `gtag('consent', 'default', {...})` directly in page HTML before the GTM snippet (chosen approach).

- **Additional Consent Checks block tags even on unspecified consent** — Built-In Checks do not block on unspecified; Additional Checks do. Do not add Additional Checks until enforcement is ready.

- **Consent signals serve two purposes**: (1) tag blocking via GTM consent checks, and (2) telling Google's servers to apply conversion/behavioral modeling for non-consenting users. Only the first purpose requires enforcement to be in place; the second is a production analytics benefit.

- **Enhanced Conversions requires Administrator role** to accept Customer Data Terms. Can be skipped for a test/scanner site.

---

## Consent Mode v2 Parameters Reference

| Parameter | Controls |
|---|---|
| `analytics_storage` | GA4 cookies (`_ga`, `_ga_*`) |
| `ad_storage` | Ads cookies (`_gcl_au`, `_gcl_aw`, `IDE`) |
| `ad_user_data` | Sending user data to Google for ads (needs Enhanced Conversions) |
| `ad_personalization` | Personalized advertising |
| `functionality_storage` | Functional cookies |
| `security_storage` | Security/anti-fraud — always keep granted |

## Consent State Behaviour Reference

| Consent state | Built-In Checks | Additional Checks |
|---|---|---|
| Unspecified (no default set) | Tag fires | Tag **blocked** |
| Denied | Tag blocked | Tag blocked |
| Granted | Tag fires | Tag fires |

---

## Cookie Reference

| Cookie | Domain | Category | Expiry | Source |
|---|---|---|---|---|
| `_ga` | first-party | Analytics | 2 years | GTM → GA4 |
| `_ga_89RWJTCPLZ` | first-party | Analytics | 2 years | GTM → GA4 Stream 1 |
| `_ga_01XNDLZCYQ` | first-party | Analytics | 2 years | Direct gtag.js Stream 2 |
| `_gcl_au` | first-party | Marketing | 90 days | GTM → Conversion Linker |
| `_gcl_aw` | first-party | Marketing | 90 days | Inline dummy (needs gclid=) |
| `gtm-session-start` | first-party | Functional | Session | GTM → Conversion Linker |
| `test_cookie` | .doubleclick.net | Marketing | Session | AdSense probe, self-deletes |
| `IDE` | .doubleclick.net | Marketing | 1 year | DoubleClick (inferred by scanner) |
| `NID` | .google.com | Functional | 6 months | Google Maps iframe |
| `CONSENT` | .google.com | Functional | 2 years | Google Maps iframe |
| `AEC` | .google.com | Functional | 6 months | Google Maps iframe |
| `SOCS` | .google.com | Functional | 13 months | Google consent record (conditional) |
| `YSC` | .youtube.com | Functional | Session | YouTube iframe |
| `VISITOR_INFO1_LIVE` | .youtube.com | Marketing | 6 months | YouTube iframe |
| `__Secure-YEC` | .youtube.com | Marketing | 6 months | YouTube iframe |
| `VISITOR_PRIVACY_METADATA` | .youtube.com | Marketing | 6 months | YouTube iframe |
| `__Secure-ROLLOUT_TOKEN` | .youtube.com | Marketing | 6 months | YouTube iframe |
| `__Secure-YNID` | .youtube.com | Functional | 6 months | YouTube iframe (conditional) |
