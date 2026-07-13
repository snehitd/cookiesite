# Cookie Consent Enforcement — Use Cases

Each use case is independent. They can be used alone or layered together.
Check the "Validation" column when testing each one.

---

## UC-1: Markup Enforcement (Script Blocking)

**What it is:** Script and iframe tags are given `type="text/plain"` + `data-src` + `data-name`.
The browser skips them entirely. Seqrite swaps in the real type and loads `data-src` only when the
named category is consented.

**Configured in:** `index.html` (markup only, no platform config needed)

**Covers:**
| Tag | Category |
|---|---|
| GTM container (GTM-N8M7CRQR) | marketing |
| GA4 direct stream (G-01XNDLZCYQ) | analytics |
| Google AdSense (ca-pub-7344776715655315) | marketing |
| Meta Pixel SDK (fbevents.js) | marketing |
| Bing UET (bat.js) | marketing |
| Microsoft Clarity (wy0xa34b85) | analytics |
| YouTube iframe | functional |
| Google Maps iframe | functional |
| Facebook Page Plugin iframe | marketing |
| Bing Maps iframe | marketing |

**Validate:**
1. Open page with no prior consent — DevTools → Network: none of the above URLs should appear
2. Open cookie banner → accept **Analytics** only
   - `clarity.ms/tag/...` and `gtag/js?id=G-01XNDLZCYQ` appear in Network
   - `_clck`, `_clsk`, `_ga_01XNDLZCYQ` written in Application → Cookies
   - GTM, AdSense, Meta Pixel, Bing URLs do NOT appear
3. Accept **Functional** — YouTube and Google Maps iframes load (placeholder disappears)
4. Accept **Marketing** — GTM, AdSense, Meta Pixel, Bing, Facebook iframe, Bing Maps iframe load

---

## UC-2: Google Consent Mode v2

**What it is:** `gtag('consent', 'default', { analytics_storage: 'denied', ... })` is pushed to
`dataLayer` BEFORE GTM loads. Google's own tags (GA4, Ads) read these signals and skip writing
measurement cookies when denied. On consent grant, `gtag('consent', 'update', {...})` is called.

**Configured in:** `seqrite-enforcement.js` (no GTM dashboard changes needed for basic mode)

**Signals:**
| Signal | Blocked category |
|---|---|
| `analytics_storage` | analytics |
| `ad_storage` | marketing |
| `ad_user_data` | marketing |
| `ad_personalization` | marketing |

**Use case:** Defence-in-depth — protects if GTM somehow loads without markup enforcement
(e.g. cached page, A/B test, direct gtag.js embed). Without this, GA4 would write `_ga` even
if markup enforcement was bypassed.

**Validate:**
1. Temporarily remove `type="text/plain"` from GTM tag (let GTM load unconditionally)
2. Open page with no consent — `_ga`, `_gcl_au` should NOT be written even though GTM loaded
3. Accept Analytics in banner — `gtag('consent', 'update', { analytics_storage: 'granted' })` fires
   — `_ga` is now written
4. Restore `type="text/plain"` after testing

---

## UC-3: Meta Pixel Limited Data Use (LDU)

**What it is:** `fbq('consent', 'revoke')` is called in `seqrite-enforcement.js` before
`fbevents.js` loads. Meta reads this signal and suppresses `_fbp` / `fr` cookie writes.
On marketing consent, `fbq('consent', 'grant')` is called in `PrivacyConsent.watch`.

**Configured in:** `seqrite-enforcement.js` (no Meta Business Manager changes needed)

**Use case:** Defence-in-depth for Meta Pixel — if `fbevents.js` somehow loads (cached,
injected by a browser extension, etc.) it still won't write tracking cookies.

**Validate:**
1. Temporarily remove `type="text/plain"` from the Meta Pixel script tag (let SDK load)
2. Open page — `_fbp` should NOT be written (fbq is in revoke state)
3. Accept Marketing — `fbq('consent', 'grant')` fires — `_fbp` appears in cookies
4. Restore `type="text/plain"` after testing

---

## UC-4: Bing UET Consent Mode

**What it is:** `uetq.push('set', { convConsentMode: false })` is called in
`seqrite-enforcement.js` before `bat.js` loads. UET reads this and suppresses conversion
tracking. On marketing consent, `PrivacyConsent.watch` pushes `convConsentMode: true`.

**Configured in:** `seqrite-enforcement.js` (no Microsoft Advertising platform changes needed)

**Use case:** Defence-in-depth for Bing UET — suppresses `_uetsid`, `_uetvid` writes if
`bat.js` loads before consent.

**Validate:**
1. Temporarily remove `type="text/plain"` from the Bing UET script tag
2. Open page — `_uetsid`, `_uetvid` should NOT be written
3. Accept Marketing — cookies appear
4. Restore `type="text/plain"` after testing

---

## UC-5: Inline Cookie Gating (PrivacyConsent.watch)

**What it is:** `document.cookie` writes for dummy/simulated cookies are wrapped in a
`PrivacyConsent.watch` callback. Cookies are only written when the matching category is consented.

**Configured in:** `index.html` inline script block

**Covers:**
| Cookie | Category |
|---|---|
| `_gcl_aw` | marketing |
| `_fbp`, `_fbc` | marketing |
| `th_capi_em/fn/ln/ph` | marketing |
| `_uetmsclkid` | marketing |

**Validate:**
1. Open page with no consent — DevTools → Application → Cookies: none of the above present
2. Accept Marketing — all listed cookies appear immediately (no page reload needed)
3. Reject Marketing — cookies are not re-written on next load

---

## UC-6: GTM Custom Event Triggers

**What it is:** When consent changes, `seqrite-enforcement.js` pushes named events to `dataLayer`:
```
privacyconsent-analytics-accepted
privacyconsent-analytics-rejected
privacyconsent-marketing-accepted
privacyconsent-marketing-rejected
... (one per service per consent change)
```
GTM can be configured with Custom Event Triggers to fire or block individual tags based on these.

**Configured in:** GTM dashboard (this is the only use case requiring platform-side config)

**Use case:** Fine-grained tag control within GTM — e.g. fire GA4 tag only on
`privacyconsent-analytics-accepted`, fire Meta Pixel tag only on
`privacyconsent-marketing-accepted`. Allows GTM to load unconditionally while individual
tags still respect consent categories.

**GTM setup required:**
1. Create a Custom Event Trigger for each event name (e.g. `privacyconsent-analytics-accepted`)
2. On each tag: set the consent trigger as the firing trigger
3. Add a blocking trigger for the corresponding rejected event
4. Remove `type="text/plain"` from GTM tag in `index.html` (GTM loads unconditionally in this model)

**Validate:**
1. Configure GTM as above (use GTM Preview mode)
2. Open page — GTM loads, but GA4 tag does NOT fire (no accepted event yet)
3. Accept Analytics in banner — `privacyconsent-analytics-accepted` appears in GTM Preview dataLayer
   — GA4 tag fires
4. Reject Analytics — `privacyconsent-analytics-rejected` — GA4 tag blocked on next load

---

## UC-7: Iframe Contextual Consent

**What it is:** Iframes use `data-src` + `data-name` instead of `src`. Seqrite shows a consent
placeholder overlay over the blocked iframe. On consent grant, `data-src` is moved to `src`
and the iframe loads.

**Configured in:** `index.html` (markup only)

**Covers:**
| Iframe | Category |
|---|---|
| YouTube | functional |
| Google Maps | functional |
| Facebook Page Plugin | marketing |
| Bing Maps | marketing |

**Validate:**
1. Open page with no consent — iframes show seqrite placeholder (not blank, shows consent prompt)
2. Accept Functional — YouTube and Google Maps load; Facebook and Bing Maps still show placeholder
3. Accept Marketing — Facebook Page Plugin and Bing Maps load
4. Verify cookies: `YSC` under youtube.com, `MUID` under bing.com appear only after respective consent

---

## Summary

| Use Case | Config location | Needs platform config? | Layer |
|---|---|---|---|
| UC-1 Markup enforcement | `index.html` | No | Primary block |
| UC-2 Google Consent Mode v2 | `seqrite-enforcement.js` | No (basic mode) | Defence-in-depth |
| UC-3 Meta Pixel LDU | `seqrite-enforcement.js` | No | Defence-in-depth |
| UC-4 Bing UET Consent Mode | `seqrite-enforcement.js` | No | Defence-in-depth |
| UC-5 Inline cookie gating | `index.html` | No | Defence-in-depth |
| UC-6 GTM Custom Event Triggers | GTM dashboard | **Yes — GTM only** | Alternative to UC-1 for GTM |
| UC-7 Iframe contextual consent | `index.html` | No | Primary block |
