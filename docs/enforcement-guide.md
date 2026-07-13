# Cookie Enforcement Integration Guide

**For Site Owners & Developers**

This guide helps you determine which enforcement approach your website needs, what code changes to make, and how to verify everything is working correctly.

---

## Table of Contents

1. [What Is Enforcement?](#1-what-is-enforcement)
2. [What You Will Receive](#2-what-you-will-receive)
3. [The Three Enforcement Approaches](#3-the-three-enforcement-approaches)
4. [Decision Guide — Which Approach Does Your Site Need?](#4-decision-guide--which-approach-does-your-site-need)
5. [Critical: Script Load Order](#5-critical-script-load-order)
6. [Markup Enforcement — What to Block and What Not To](#6-markup-enforcement--what-to-block-and-what-not-to)
7. [Iframe Blocking — YouTube, Vimeo, Maps](#7-iframe-blocking--youtube-vimeo-maps)
8. [GTM Enforcement — Container Blocking + Dashboard Setup](#8-gtm-enforcement--container-blocking--dashboard-setup)
9. [Google Consent Mode v2](#9-google-consent-mode-v2)
10. [Platform Consent Modes — Meta and Bing](#10-platform-consent-modes--meta-and-bing)
11. [API Enforcement — Dynamic and SPA Sites](#11-api-enforcement--dynamic-and-spa-sites)
12. [Cookie Cleanup on Revoke](#12-cookie-cleanup-on-revoke)
13. [Hybrid Sites — Mixing Approaches](#13-hybrid-sites--mixing-approaches)
14. [noscript Tag Handling](#14-noscript-tag-handling)
15. [PrivacyConsent API Reference](#15-privacyconsent-api-reference)
16. [Adding a "Manage Preferences" Button](#16-adding-a-manage-preferences-button)
17. [Common Mistakes](#17-common-mistakes)
18. [Testing Checklist](#18-testing-checklist)

---

## 1. What Is Enforcement?

Cookie consent enforcement means ensuring that tracking scripts, pixels, and tags **do not fire** until the visitor has given consent for that category. The consent banner collects the visitor's choice; enforcement is the mechanism that acts on it.

Without enforcement, cookies are set the moment the page loads regardless of what the visitor chooses in the banner. Enforcement closes that gap.

---

## 2. What You Will Receive

After configuring and publishing your consent manager, you can download a ZIP file containing four files:

| File | Purpose |
|---|---|
| `seqrite.js` | Seqrite Consent Engine — do not modify |
| `seqrite-config.js` | Your consent configuration + banner auto-display |
| `seqrite-config.css` | Banner styling |
| `seqrite-enforcement.js` | Enforcement API + Google/Meta/Bing consent mode signals |

Upload all four files to your web server or CDN. The consent banner records visitor choices. The enforcement script (`seqrite-enforcement.js`) then blocks or activates tracking scripts on your page based on those choices. Consent decisions are stored for 365 days in a browser cookie.

---

## 3. The Three Enforcement Approaches

| Approach | How it works | Best for |
|---|---|---|
| **Markup enforcement** | Add `type="text/plain"` to a `<script>` tag. The browser ignores it until consent is given, at which point the consent engine restores the original type and executes the script. | Scripts loaded as static `<script>` tags directly in your HTML |
| **GTM enforcement** | Block the GTM container script with markup, then configure triggers inside the GTM dashboard so tags only fire after a consent event. | Sites where all or most tracking is managed through Google Tag Manager |
| **API enforcement** | Use `PrivacyConsent.getConsent()` and `PrivacyConsent.watch()` inside your own JavaScript to conditionally run tracking code. | SPAs, dynamically loaded scripts, tracking calls inside your own functions (purchase, login, form submit) |

These approaches are not mutually exclusive. Most sites use a combination.

---

## 4. Decision Guide — Which Approach Does Your Site Need?

### Quick Questions

**Question 1 — Do you use Google Tag Manager (GTM)?**
- YES → Follow Sections 5, 6, 8, 9, and 18
- NO → Follow Sections 5, 6, and 18

**Question 2 — Are your tracking scripts written directly in HTML?**
- YES → Use markup enforcement (Section 6)
- NO / Single-Page App (React, Angular, Vue) → Use API enforcement (Section 11)

**Question 3 — Do you embed YouTube, Vimeo, or other iframes?**
- YES → Also follow Section 7 (iframe blocking)

---

### Main Decision Table

| Customer Situation | Recommended Approach | What the Site Owner Must Change |
|---|---|---|
| Small static site — tracking scripts added directly as `<script>` tags in HTML | **Markup enforcement** | Add `type="text/plain"` and `data-name="<category>"` to each tracking `<script>` tag. No other changes needed. |
| All tracking managed through GTM — no direct tracking script tags in HTML | **GTM enforcement** | (1) Add markup blocking to the GTM container `<script>` loader. (2) In the GTM dashboard, add Custom Event Triggers for each tag based on `privacyconsent-<category>-accepted` events. |
| Hybrid site — some scripts direct in HTML, others managed through GTM | **Markup enforcement for direct scripts + GTM enforcement for container** | Apply markup blocking to every direct script tag. Block the GTM container separately. Configure GTM dashboard triggers for GTM-managed tags. |
| SPA or site where tracking is loaded dynamically from JavaScript | **API enforcement** | No markup changes. Use `PrivacyConsent.watch(callback)` to inject or activate scripts only after consent is given. Use `PrivacyConsent.getConsent('category')` for one-time checks. |
| Tracking calls happen inside your own JS functions (e.g. on purchase, login, form submit) | **API enforcement** | Wrap the tracking call with `if (PrivacyConsent.getConsent('analytics'))` or `if (PrivacyConsent.getConsent('marketing'))` at the point of the call. |
| Site uses Google Analytics or Google Ads targeting EEA / UK users | **Google Consent Mode v2 (mandatory by Google policy)** | Load `seqrite-enforcement.js` **before** the GTM or gtag.js script in `<head>`. No other code change needed — the enforcement script sets the defaults and updates signals automatically. |
| Site uses Meta Pixel (Facebook Ads) | **Meta Pixel consent mode** | Load `seqrite-enforcement.js` before `fbevents.js` in `<head>`. The enforcement script handles consent grant/revoke automatically. |
| Site uses Bing / Microsoft Advertising (UET) | **Microsoft UET consent mode** | Load `seqrite-enforcement.js` before `bat.js` in `<head>`. The enforcement script handles UET consent defaults and updates automatically. |
| Site uses multiple tag managers (e.g. GTM + Tealium) | **Block each container with markup + configure triggers in each dashboard** | Each tag manager container is blocked as a separate markup-enforced `<script>`. Inside each dashboard, create Custom Event Triggers on the same `privacyconsent-<category>-accepted/rejected` events. |
| Site has no tag manager and tracking calls are mixed into the site's own JS file | **API enforcement** | You cannot markup-block your own `app.js`. Gate individual tracking calls with `PrivacyConsent.getConsent()` inside that file. |

### Quick Reference — If the Customer Says...

| If the customer says… | Direct them to |
|---|---|
| "We paste `<script>` tags into our HTML template" | Markup enforcement (Section 6) |
| "We use GTM for everything" | GTM enforcement + Consent Mode v2 if they run Google Ads (Sections 8, 9) |
| "Our site is React / Angular / Vue / Next.js" | API enforcement (Section 11) |
| "We run Google Ads in Europe" | Google Consent Mode v2 — mandatory (Section 9) |
| "We have some scripts direct and some through GTM" | Hybrid: markup for direct, GTM enforcement for container (Sections 6, 8) |
| "We use Tealium / Adobe Launch / another tag manager" | Same GTM pattern applied to that container (Section 8) |
| "We fire events when a user completes checkout / logs in" | API enforcement — `getConsent()` at the point of the call (Section 11) |
| "We have YouTube or Maps embedded on our pages" | Iframe blocking (Section 7) |

---

## 5. Critical: Script Load Order

The Seqrite scripts must load **before** any tracking script. Load order is non-negotiable.

Google Consent Mode v2 requires denied defaults to be set before the GTM container or `gtag.js` fires. If GTM loads first, it reads no consent signal and fires in fully cookied mode regardless of what the visitor later chooses.

**Correct order inside `<head>` — paste these before any tracking scripts:**

```html
<head>
  <!-- Step 1: Banner styles -->
  <link rel="stylesheet" href="/path/to/seqrite-config.css"/>

  <!-- Step 2: Consent engine (must load before config) -->
  <script defer src="/path/to/seqrite.js"></script>

  <!-- Step 3: Consent configuration + auto-show banner -->
  <script defer src="/path/to/seqrite-config.js"></script>

  <!-- Step 4: Enforcement API — MUST be last of the four Seqrite scripts -->
  <script defer src="/path/to/seqrite-enforcement.js"></script>

  <!-- Step 5: GTM container or gtag.js — loads AFTER enforcement -->
  <script>/* GTM loader goes here */</script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"></script>

  <!-- Step 6: All other tracking scripts -->
</head>
```

> Replace `/path/to/` with the actual URL path on your server or CDN.

> **Do NOT change the order of the four Seqrite scripts.** If `seqrite-enforcement.js` loads before `seqrite-config.js`, enforcement will not activate.

---

## 6. Markup Enforcement — What to Block and What Not To

### The Rule

Block any script that **sets cookies, collects user data, or fires tracking pixels** before consent. Do not block scripts that are functional, structural, or part of the consent tool itself.

### What to Block

| Script | `data-name` value to use |
|---|---|
| Google Analytics / GA4 (`gtag.js`) | `analytics` |
| GA4 inline config / event tags | `analytics` |
| Google Ads / Conversion Linker | `marketing` |
| GTM container | `analytics` (blocks all GTM tags; configure per-tag inside GTM dashboard) |
| Meta Pixel (`fbevents.js`) | `marketing` |
| Bing UET (`bat.js`) | `marketing` |
| Microsoft Clarity | `analytics` |
| Hotjar | `analytics` |
| LinkedIn Insight Tag | `marketing` |
| HubSpot tracking (`hs-scripts.com`) | `functional` |
| Criteo, Trade Desk, other DSPs | `marketing` |
| A/B testing tools with tracking (Optimizely, VWO) | `analytics` |

### What NOT to Block

| Script | Why |
|---|---|
| `seqrite.js` | The consent banner itself — blocking it means no banner ever shows |
| `seqrite-config.js` | Consent configuration — needed before the banner renders |
| `seqrite-enforcement.js` | Must run first to set denied defaults before tracking scripts load |
| jQuery, Bootstrap, Lodash, any UI library | No tracking, no cookies, purely functional |
| Your site's own `app.js` / `main.js` | Contains site functionality — use API enforcement for any tracking calls inside it instead |
| Stripe, PayPal, Razorpay checkout | Strictly necessary for transactions |
| Google Fonts, font CDNs | No cookies, no behavioural tracking |

### How to Apply Markup Blocking

Make two changes to each tracking `<script>` tag:
1. Change `type="text/javascript"` → `type="text/plain"` (browser skips execution)
2. Change `src=` → `data-src=` (browser does not fetch the file)
3. Add `data-type="text/javascript"` (tells the consent engine what type to restore on consent)
4. Add `data-name="<category>"` (links this script to the consent category that controls it)

---

**Google Analytics / GA4**

```html
<!-- BEFORE: loads unconditionally -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- AFTER: blocked until visitor consents to "analytics" -->
<script type="text/plain"
        data-type="text/javascript"
        data-name="analytics"
        data-src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">
</script>
<script type="text/plain"
        data-type="text/javascript"
        data-name="analytics">
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

**Meta Pixel**

```html
<!-- AFTER: blocked until visitor consents to "marketing" -->
<script type="text/plain"
        data-type="text/javascript"
        data-name="marketing">
  !function(f,b,e,v,n,t,s){...}
  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

**Hotjar**

```html
<!-- AFTER: blocked until visitor consents to "analytics" -->
<script type="text/plain"
        data-type="text/javascript"
        data-name="analytics">
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

---

**Any generic inline tracking script**

```html
<script type="text/plain"
        data-type="text/javascript"
        data-name="analytics">
  /* your tracking code here */
</script>
```

---

When the visitor consents to the matching category, the consent engine replaces `type="text/plain"` with `type="text/javascript"` and `data-src` with `src`, causing the browser to fetch and execute the script.

### Valid `data-name` values

The `data-name` value must exactly match the category/service name in `seqrite-config.js`. Open `seqrite-config.js` and look at the `services` array to confirm the exact names used in your configuration.

| Value | Cookie category |
|---|---|
| `analytics` | Analytics cookies |
| `marketing` | Marketing / advertising cookies |
| `functional` | Functional cookies |
| `others` | Uncategorised cookies |

---

## 7. Iframe Blocking — YouTube, Vimeo, Maps

Embedded iframes load external content and set third-party cookies independently of any `<script>` tag. The consent engine can block these until the visitor consents.

**Change:** Replace `src=` with `data-src=` and add `data-name=`.

```html
<!-- BEFORE: YouTube embed loads immediately -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID"
        width="560" height="315" frameborder="0" allowfullscreen>
</iframe>

<!-- AFTER: blocked until visitor consents to "functional" -->
<iframe data-src="https://www.youtube.com/embed/VIDEO_ID"
        data-name="functional"
        width="560" height="315" frameborder="0" allowfullscreen>
</iframe>
```

Apply the same pattern to Vimeo, Google Maps, and any other embedded iframe:

```html
<!-- Vimeo -->
<iframe data-src="https://player.vimeo.com/video/VIDEO_ID"
        data-name="functional">
</iframe>

<!-- Google Maps -->
<iframe data-src="https://www.google.com/maps/embed?pb=..."
        data-name="functional">
</iframe>
```

> A contextual placeholder is shown where the iframe would appear, informing the visitor that they must consent to view the embedded content. The placeholder disappears automatically once consent is granted.

---

## 8. GTM Enforcement — Container Blocking + Dashboard Setup

### Part A — Block the GTM container in HTML

> **Warning:** Remove the original GTM snippet entirely. Do NOT keep both the old snippet and the blocked version — having both causes every GTM tag to fire twice.

**Before:**
```html
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];
w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),
dl=l!='dataLayer'?'&l='+l:'';j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');
</script>
```

**After (paste after the four Seqrite scripts):**
```html
<script type="text/plain"
        data-type="text/javascript"
        data-name="analytics"
        data-src="https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXX">
</script>
```

Blocking the container blocks every tag inside it. Part B controls which tags fire once the container is eventually allowed to load.

### Part B — Configure triggers inside the GTM dashboard

The enforcement script automatically pushes the following events to `window.dataLayer` every time the visitor changes their consent:

```
privacyconsent-analytics-accepted
privacyconsent-analytics-rejected
privacyconsent-marketing-accepted
privacyconsent-marketing-rejected
privacyconsent-functional-accepted
privacyconsent-functional-rejected
```

**Steps in GTM dashboard:**

1. Go to **Triggers → New → Custom Event**
2. Set Event Name to `privacyconsent-analytics-accepted`
3. Set "This trigger fires on" → All Custom Events
4. Save as **"Seqrite: Analytics Accepted"**
5. Repeat for each category you use:
   - `privacyconsent-marketing-accepted` → "Seqrite: Marketing Accepted"
   - `privacyconsent-functional-accepted` → "Seqrite: Functional Accepted"

**Assign triggers to your tags:**

| Tag | Remove existing trigger | Add this trigger |
|---|---|---|
| GA4 Configuration | All Pages / Page View | Seqrite: Analytics Accepted |
| Google Ads Conversion | All Pages | Seqrite: Marketing Accepted |
| Meta Pixel (via GTM) | All Pages | Seqrite: Marketing Accepted |
| Hotjar (via GTM) | All Pages | Seqrite: Analytics Accepted |
| Any other analytics tag | All Pages | Seqrite: Analytics Accepted |

Publish the GTM container after making these changes.

**Test in GTM Preview Mode:**
1. Open GTM workspace → Preview, enter your website URL
2. Do NOT consent yet — confirm the GA4 tag does NOT appear in the GTM debug panel
3. Accept Analytics consent — verify `privacyconsent-analytics-accepted` event appears and GA4 fires
4. Reject Analytics — verify `privacyconsent-analytics-rejected` appears and GA4 does not fire again

---

## 9. Google Consent Mode v2

### What it is

Google Consent Mode v2 is a set of signals that Google Analytics and Google Ads read to determine whether they can operate in fully cookied mode or must switch to cookieless modelling. The four signals are:

| Signal | Controlled by |
|---|---|
| `analytics_storage` | Analytics consent |
| `ad_storage` | Marketing consent |
| `ad_user_data` | Marketing consent |
| `ad_personalization` | Marketing consent |

**Google requires Consent Mode v2 for all sites running Google Ads targeting EEA or UK users.** Failure to implement it can result in ad serving restrictions.

### What the site owner needs to do

Load `seqrite-enforcement.js` before the GTM or `gtag.js` script. That is the only required change.

The enforcement script:
- Sets all four signals to `denied` before GTM loads
- Calls `gtag('consent', 'update', {...})` automatically when the visitor consents or rejects

The site owner does not write any `gtag('consent',...)` calls themselves.

### Signal mapping

| Visitor consents to... | Signals updated to `granted` |
|---|---|
| Analytics | `analytics_storage` |
| Marketing | `ad_storage`, `ad_user_data`, `ad_personalization` |
| Rejects all | All four remain `denied` |

---

## 10. Platform Consent Modes — Meta and Bing

### Meta Pixel

The Meta Pixel has a built-in consent API. When consent is revoked, Meta switches to Limited Data Use (LDU) mode — it stops using data for ad targeting.

**What the site owner must do:** Load `seqrite-enforcement.js` before `fbevents.js`. No other change.

The enforcement script issues `fbq('consent', 'revoke')` on load and `fbq('consent', 'grant')` when the visitor grants marketing consent.

**If the site loads Meta Pixel dynamically (not a static `<script>` tag)**, use API enforcement instead:
```javascript
PrivacyConsent.watch(function(consents) {
  if (typeof window.fbq === 'function') {
    window.fbq('consent', consents['marketing'] ? 'grant' : 'revoke');
  }
});
```

### Microsoft Bing UET (Ads)

Bing UET reads a `convConsentMode` flag from the `uetq` command queue to enable or disable conversion tracking.

**What the site owner must do:** Load `seqrite-enforcement.js` before `bat.js`. No other change.

The enforcement script initialises `uetq` with `convConsentMode: false` and pushes `true` when marketing consent is granted.

---

## 11. API Enforcement — Dynamic and SPA Sites

### When markup blocking is not enough

Markup blocking only works for `<script>` tags present in the HTML at page load. It does not work for:
- Scripts injected into the DOM dynamically via JavaScript
- Tracking calls inside your own functions (`checkout.js`, `login.js`)
- React / Angular / Vue components that mount asynchronously
- Features that load on user interaction (chat widgets, maps, video players)

### `PrivacyConsent.getConsent(category)`

Returns `true` or `false` for the given category at the current moment. Use for a one-time check before executing a tracking call.

```javascript
// Only fire a purchase event if the visitor has consented
function onOrderComplete(orderId, amount) {
  showConfirmationPage(orderId); // always runs — not consent-gated

  if (PrivacyConsent.getConsent('analytics')) {
    gtag('event', 'purchase', { transaction_id: orderId, value: amount });
  }

  if (PrivacyConsent.getConsent('marketing')) {
    fbq('track', 'Purchase', { value: amount, currency: 'INR' });
  }
}
```

### `PrivacyConsent.watch(callback)`

Registers a callback that fires every time the visitor changes their consent. Use to activate or deactivate features during the session.

**Example — lazy-load Hotjar only after analytics consent:**
```javascript
PrivacyConsent.watch(function(consents) {
  if (consents['analytics'] && !window.hj) {
    (function(h, o, t, j, a, r) {
      h.hj = h.hj || function() { (h.hj.q = h.hj.q || []).push(arguments); };
      h._hjSettings = { hjid: YOUR_HOTJAR_ID, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script'); r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  }
});
```

**Example — load Google Maps only after functional consent:**
```javascript
var mapLoaded = false;

function maybeLoadMap(consents) {
  if (consents['functional'] && !mapLoaded) {
    mapLoaded = true;
    document.getElementById('map-placeholder').innerHTML =
      '<iframe data-src="https://www.google.com/maps/embed?pb=..."' +
      ' width="100%" height="300" style="border:none"></iframe>';
  }
}

PrivacyConsent.watch(maybeLoadMap);
```

### Handling returning visitors and new visitors together

Returning visitors already have consent stored from a previous visit. New visitors will interact with the banner now. Handle both in one block:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  if (!window.PrivacyConsent) return;

  // Returning visitors — consent already stored, activate immediately
  if (PrivacyConsent.getConsent('analytics'))  { loadGoogleAnalytics(); }
  if (PrivacyConsent.getConsent('marketing'))  { loadFacebookPixel(); }
  if (PrivacyConsent.getConsent('functional')) { loadChat(); }

  // New visitors or consent changes during the session
  PrivacyConsent.watch(function(consents) {
    if (consents['analytics'] === true)  { loadGoogleAnalytics(); }
    if (consents['marketing'] === true)  { loadFacebookPixel(); }
    if (consents['functional'] === true) { loadChat(); }
  });
});
```

**Example — React component that renders based on consent:**
```javascript
function ContactPage() {
  const [hasConsent, setHasConsent] = React.useState(
    PrivacyConsent.getConsent('functional')
  );

  React.useEffect(function() {
    PrivacyConsent.watch(function(consents) {
      setHasConsent(consents['functional']);
    });
  }, []);

  return hasConsent
    ? <GoogleMap />
    : <div className="map-placeholder">Enable functional cookies to view the map.</div>;
}
```

### When to use which method

| Situation | Method |
|---|---|
| Check consent once before an action (purchase, login, submit) | `getConsent()` |
| Load or activate a feature when consent is granted | `watch()` |
| Deactivate or unload a feature when consent is revoked | `watch()` |
| On page load, activate features for returning visitors who already consented | `getConsent()` inside `DOMContentLoaded` |
| Component that renders differently based on consent | `getConsent()` for initial state + `watch()` for updates |

---

## 12. Cookie Cleanup on Revoke

When a visitor withdraws consent, the enforcement script stops any future script activation. However, cookies already set by previously consented scripts are not automatically deleted — the browser cannot delete cookies set by external domains. Add the following cleanup logic to delete first-party copies of those cookies.

Add this **after** your `seqrite-enforcement.js` script tag:

```javascript
<script>
document.addEventListener('DOMContentLoaded', function() {
  if (!window.PrivacyConsent) return;

  PrivacyConsent.watch(function(consents) {

    // Clean up Google Analytics cookies when analytics is rejected
    if (consents['analytics'] === false) {
      ['_ga', '_gid', '_gat', '_ga_XXXXXXXXXX'].forEach(function(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                        + ' domain=.' + location.hostname + ';';
      });
    }

    // Clean up Meta Pixel cookies when marketing is rejected
    if (consents['marketing'] === false) {
      ['_fbp', '_fbc'].forEach(function(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                        + ' domain=.' + location.hostname + ';';
      });
    }

    // Add cleanup blocks here for any other cookies your site sets
  });
});
</script>
```

> Replace `_ga_XXXXXXXXXX` with your actual GA4 measurement-ID cookie name. You can find cookie names in browser DevTools → Application → Cookies.

> Note: Third-party cookies (e.g. set by `.doubleclick.net`, `facebook.com`, `bing.com`) cannot be deleted by JavaScript on your domain. The consent mode signals sent to those platforms handle suppression on their side.

---

## 13. Hybrid Sites — Mixing Approaches

Most real-world sites use a combination of approaches. The approaches are independent and can all be active at the same time.

A hybrid state is common when a site adopted GTM later — older scripts were added directly to the HTML template by developers or the CRM/marketing team and were never migrated into GTM. The result is that GTM-managed scripts are the newer additions while the older ones remain as direct script tags.

**Identifying what you have:** Audit every `<script>` tag in your HTML template. Any tag loading a third-party tracking domain directly in HTML needs markup blocking. Anything that only exists inside GTM is handled by blocking the container.

### Example — E-commerce site with GTM and direct scripts

| Script | Where it lives | Enforcement to apply |
|---|---|---|
| Google Ads Conversion | GTM | GTM trigger — "Seqrite: Marketing Accepted" |
| Hotjar | GTM | GTM trigger — "Seqrite: Analytics Accepted" |
| Criteo retargeting | GTM | GTM trigger — "Seqrite: Marketing Accepted" |
| GTM container | Direct HTML | Markup block the GTM `<script>` loader |
| Google Analytics (`gtag.js`) | Direct HTML — added 3 years ago, never moved to GTM | Markup block — `data-name="analytics"` |
| HubSpot tracking | Direct HTML — added by CRM team to footer template | Markup block — `data-name="functional"` |
| LinkedIn Insight Tag | Direct HTML — added by marketing to header | Markup block — `data-name="marketing"` |
| `checkout.js` fires `gtag('event','purchase',...)` | Site's own JS file | API — `getConsent('analytics')` at the call site |

---

## 14. noscript Tag Handling

Several tracking platforms include a `<noscript>` fallback — typically an `<img>` or `<iframe>` that fires when JavaScript is disabled.

### GTM noscript iframe

Block the noscript iframe the same way you block the main GTM script — using `data-src`:

```html
<!-- Replace the standard noscript block: -->
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
          height="0" width="0" style="display:none;visibility:hidden">
  </iframe>
</noscript>

<!-- With this blocked version: -->
<noscript>
  <iframe data-src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
          data-name="analytics"
          height="0" width="0" style="display:none;visibility:hidden">
  </iframe>
</noscript>
```

### Meta Pixel noscript img

Remove the Meta Pixel `<noscript><img ...>` tag. A visitor with JavaScript disabled cannot interact with the consent banner, so the pixel firing unconditionally would be non-compliant:

```html
<!-- Remove this entirely -->
<noscript>
  <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
```

---

## 15. PrivacyConsent API Reference

All methods are available on `window.PrivacyConsent` after `seqrite-enforcement.js` has loaded.

| Method | What it does |
|---|---|
| `PrivacyConsent.getConsent("category")` | Returns `true`/`false` — was this category consented to? |
| `PrivacyConsent.getConsentByCategory("category")` | Returns `true` only if ALL services in this category are consented |
| `PrivacyConsent.watch(callback)` | Register a function called on every consent change; receives a `consents` object `{ analytics: true/false, marketing: true/false, ... }` |
| `PrivacyConsent.unwatch(callback)` | Unregister a previously registered watch callback |
| `PrivacyConsent.acceptAll()` | Programmatically accept all categories and save |
| `PrivacyConsent.rejectAll()` | Programmatically reject all categories and save |
| `PrivacyConsent.show()` | Re-show the consent banner |
| `PrivacyConsent.showModal()` | Open the full consent preference modal |
| `PrivacyConsent.updateConsent("category", true/false)` | Update consent for one category |
| `PrivacyConsent.saveAndApply()` | Save and apply all pending consent changes |
| `PrivacyConsent.resetAll()` | Clear all stored consent decisions |
| `PrivacyConsent.services` | Array of detected services with `{ name, category }` for each |
| `PrivacyConsent.updateGoogleConsentMode(consents)` | Manually push a Google Consent Mode v2 update |
| `PrivacyConsent.updateMetaConsentMode(consents)` | Manually push a Meta consent grant/revoke |
| `PrivacyConsent.updateMicrosoftConsentMode(consents)` | Manually push a Bing UET consent update |

---

## 16. Adding a "Manage Preferences" Button

Give visitors a way to update their consent choices at any time — typically placed in the footer or on the Privacy Policy page.

The exact snippet is generated and shown in the admin portal during the Publish step. It will look similar to:

```html
<!-- Cookie Preference Centre Launcher -->
<button type="button" onclick="PrivacyConsent.showModal()">
  Manage Cookie Preferences
</button>
```

Place this anywhere on your site. When clicked, it opens the full preference modal. The visitor's updated choices trigger all registered `watch()` callbacks immediately.

---

## 17. Common Mistakes

**Scripts embedded out of order**
`seqrite-enforcement.js` must be the last of the four Seqrite scripts. If it loads before `seqrite-config.js`, the consent engine is not ready and enforcement silently does nothing.

**`data-name` does not match the category name**
The `data-name` value on your `<script>` tags must exactly match the service/category name in `seqrite-config.js`. Open the file and look for the `services` array to confirm the correct names (`"analytics"`, `"marketing"`, `"functional"`). A mismatch means the script is never unblocked even after consent.

**GTM — original snippet not removed**
If you added the consent-gated GTM snippet but did not remove the original GTM snippet, GTM loads twice. Every tag fires twice. Remove the original snippet completely.

**Consent not cleared between tests**
Consent decisions are stored in a browser cookie. If you accepted consent in a previous test, the banner will not reappear until that cookie expires or is deleted. Clear all site cookies in DevTools → Application → Cookies → Clear All before retesting.

**API calls placed before the enforcement script loads**
`PrivacyConsent.watch()` calls placed in a bare `<script>` tag above `seqrite-enforcement.js` will fail because `window.PrivacyConsent` does not exist yet. Always place API calls inside a `DOMContentLoaded` listener, or ensure they run after `seqrite-enforcement.js` has loaded.

**Leaving `src=` when changing to markup blocking**
When applying markup blocking, `src=` must be changed to `data-src=`. If you only add `type="text/plain"` but leave `src=` in place, the browser still fetches and executes the script — it just won't run the inline code. Both attributes must change.

---

## 18. Testing Checklist

Use this checklist to verify enforcement is working before going live. Clear all cookies before each test to start from a clean state (DevTools → Application → Cookies → Clear All).

### Before consent (fresh visit)

- [ ] Open the site in a private / incognito window
- [ ] Confirm the consent banner appears
- [ ] In DevTools → Network, confirm no requests to tracking domains (`googletagmanager.com`, `connect.facebook.net`, `bat.bing.net`, `static.hotjar.com`) appear before interacting with the banner
- [ ] In DevTools → Application → Cookies, confirm no analytics or marketing cookies are present

### After rejecting all

- [ ] Click "Reject all" in the banner
- [ ] Confirm no tracking cookies appear
- [ ] Confirm no network requests to tracking domains appear
- [ ] If GTM is used, open GTM Preview — verify no tags fired

### After accepting analytics only

- [ ] Open "Manage preferences", enable Analytics only, save
- [ ] Confirm `_ga`, `_ga_*`, `_clck`, `_clsk` cookies appear
- [ ] Confirm `_fbp`, `_uetvid`, `_uetsid`, `_gcl_aw` do NOT appear (marketing not consented)

### After accepting all

- [ ] Accept all categories
- [ ] Confirm all expected cookies from each category are present
- [ ] In Network tab, confirm requests to GA4 (`/collect`), Meta Pixel (`/tr`), Bing (`/bat.js`) appear

### Consent Mode v2 verification

- [ ] Open DevTools → Console
- [ ] Run: `window.dataLayer.filter(function(e){ return e[0] === 'consent'; })`
- [ ] Confirm a `default` entry with all signals `denied` appears early in the dataLayer
- [ ] After consenting to analytics, confirm an `update` entry with `analytics_storage: "granted"` appears

### GTM-specific verification

- [ ] Before consent: GTM debug panel shows no tag firing
- [ ] Accept analytics: `privacyconsent-analytics-accepted` event appears in GTM debug panel, GA4 tag fires
- [ ] Reject analytics: `privacyconsent-analytics-rejected` appears, GA4 does not fire again

### Console API checks

```javascript
PrivacyConsent.getConsent('analytics')          // → false before consent, true after
PrivacyConsent.getConsentByCategory('marketing') // → true or false
PrivacyConsent.services                          // → list of all detected services
window.dataLayer                                 // → inspect for privacyconsent-* events
```

### Returning visitor

- [ ] Close and reopen the browser (same profile, not incognito)
- [ ] Confirm the banner does not reappear
- [ ] Confirm previously consented cookies are still present and scripts activated
- [ ] Confirm previously rejected scripts are still not firing
