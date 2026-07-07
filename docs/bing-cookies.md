# Microsoft Bing / Clarity — Cookie Setup Guide

---

## Cookies Covered

### First-party (set on this site's domain)

| Cookie | Category | How set | Status |
|---|---|---|---|
| `_uetsid` | Marketing | Bing UET bat.js | ✅ Present |
| `_uetvid` | Marketing | Bing UET bat.js | ✅ Present |
| `_clck` | Analytics | Microsoft Clarity | ✅ Present |
| `_clsk` | Analytics | Microsoft Clarity | ✅ Present |
| `_uetmsclkid` | Marketing | Inline dummy (real needs `?msclkid=` in URL) | ❌ Missing — add dummy |

### Third-party (set on Microsoft domains)

| Cookie | Domain | Category | How set | Status |
|---|---|---|---|---|
| `MUID` | .bing.com | Marketing | Bing UET + Maps iframe | ✅ Expected |
| `MR` | bat.bing.com | Marketing | Bing UET sync | ✅ Expected |
| `SRCHD` | .bing.com | Marketing | Bing Maps iframe | ✅ Expected |
| `SRCHUID` | .bing.com | Marketing | Bing Maps iframe | ✅ Expected |
| `SRCHUSR` | .bing.com | Marketing | Bing Maps iframe | ✅ Expected |
| `SRCHHPGUSR` | .bing.com | Marketing | Bing Maps iframe | ✅ Expected |
| `_SS` | .bing.com | Analytics | Bing Maps iframe | ✅ Expected |
| `MSFPC` | .bing.com | Marketing | Bing Maps iframe | ✅ Expected |
| `CLID` | .clarity.ms | Analytics | Clarity→Bing sync | ✅ Expected (third-party) |
| `SM` | c.clarity.ms | Analytics | Clarity sync | ✅ Expected (third-party) |
| `ANONCHK` | c.clarity.ms | Marketing | Clarity→Bing sync | ⚠️ First scan from fresh IP only |
| `SRM_B` | c.bing.com | Marketing | Clarity→Bing sync | ⚠️ First scan from fresh IP only |
| `MR` | c.bing.com | Marketing | Clarity→Bing sync | ⚠️ First scan from fresh IP only |

### Missing / not yet added

| Cookie | Why missing | Fix |
|---|---|---|
| `_uetmsclkid` | Requires `?msclkid=` in landing URL — same situation as `_gcl_aw` for Google | Add inline dummy (see below) |
| `ANONCHK`, `SRM_B` (c.bing.com `MR`) | Clarity→Bing server-side sync — only fires for IPs Microsoft hasn't seen before | Cannot force; restart Docker container for a fresh IP |

---

## Phase 1 — Before Banner (Scanner Test Page)

### Platform Steps (one-time)

**Microsoft Advertising (UET) — already configured**
- UET Tag ID: 343251198 — already active in index.html
- No consent gating needed for scanner test
- Tag fires `pageLoad` event immediately on page load

**Microsoft Clarity — already configured**
- Clarity Tag: wy0xa34b85 — already active in index.html
- Clarity dashboard: clarity.microsoft.com → your project → Settings
- No consent changes needed at this stage

**Microsoft Advertising — UET Consent Mode (do NOT configure yet)**
- UET supports consent mode via `window.uetq.push('consent', ...)` — configure only at enforcement phase

### index.html — Missing cookie: `_uetmsclkid`

`_uetmsclkid` is the Bing equivalent of Google's `_gcl_aw` — a click attribution cookie written when the landing URL contains `?msclkid=`. Add an inline dummy the same way `_gcl_aw` is handled:

```html
<!-- _uetmsclkid DUMMY — Bing click ID -->
<!-- Real value: UET writes this only when URL contains ?msclkid= -->
<script>
document.cookie = '_uetmsclkid=EwIoA' + Math.floor(Date.now()/1000) + 'test-msclkid-dummy; path=/; max-age=7776000';
</script>
```

Add this after the Bing UET script block in index.html.

### index.html State (before banner)

- `_uetsid` and `_uetvid` set by bat.js on page load ✅
- `_clck` and `_clsk` set by Clarity tag on page load ✅
- Bing Maps iframe loads from bing.com — sets MUID, SRCHD, SRCHUSR, SRCHHPGUSR, _SS, MSFPC, MR ✅
- `CLID` and `SM` set on clarity.ms / c.clarity.ms via Clarity sync ✅
- `ANONCHK`, `SRM_B`, c.bing.com `MR` — only appear on first scan from a fresh container IP ⚠️

---

## Phase 2 — After Banner (Enforcement Deployment)

### UET Consent Mode

Microsoft UET has its own consent mode, separate from Google Consent Mode. Uses the `uetq` queue.

**Before bat.js loads — set consent default:**
```html
<script>
  window.uetq = window.uetq || [];
  window.uetq.push('consent', 'default', {
    'ad_storage': 'denied'
  });
</script>
<!-- Bing UET bat.js script goes here, AFTER the consent default -->
```

**After user accepts — update consent:**
```javascript
window.uetq.push('consent', 'update', {
  'ad_storage': 'granted'
});
```

**After user rejects — keep denied (no call needed, already denied by default)**

### Microsoft Clarity — Consent Handling

Clarity does not have a formal consent mode API. The correct approach:

- **On reject**: prevent Clarity from loading entirely — conditionally load the Clarity script only after consent
- **On accept**: load the Clarity script dynamically

```javascript
// On consent accepted:
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)
})(window,document,'clarity','script','wy0xa34b85');
```

Remove the static Clarity script from `<head>` and load it dynamically on consent.

### index.html Changes

1. Add UET consent default before bat.js loads
2. Remove static Clarity script from `<head>` — load it dynamically on accept
3. Add `_uetmsclkid` dummy (same as Phase 1 recommendation — add it now)
4. Uncomment seqrite scripts (banner)
5. In the `privacy-consent-accepted` handler: call UET consent update + load Clarity dynamically

### Microsoft Advertising Platform — Consent Mode Setting

1. Microsoft Advertising → Tools → UET tag → your tag (343251198)
2. Under tag settings, enable **"Enable consent mode"** if available
3. This registers the tag as consent-mode-aware in Microsoft's systems
4. Required for Microsoft's **conversion modeling** (equivalent to Google's behavioral modeling for denied users)

---

## Clarity→Bing Sync Cookies (ANONCHK, SRM_B, MR)

These three cookies only appear on the first scan from a fresh IP address. Microsoft's Clarity server deduplicates by IP — once it has synced with Bing for that IP, it does not sync again.

| Cookie | Domain | Trigger |
|---|---|---|
| `ANONCHK` | c.clarity.ms | Clarity sync on fresh IP |
| `SRM_B` | c.bing.com | Clarity→Bing ID sync |
| `MR` | c.bing.com | Bing sync redirect |

**To trigger these in the scanner:** restart the Docker container — a new container gets a fresh outbound IP from Docker's NAT pool, which Microsoft treats as a new visitor.

---

## Key Learnings

- **`_uetmsclkid` is missing** — same situation as `_gcl_aw` for Google. Add inline dummy for scanner coverage.
- **Clarity→Bing sync cookies** (`ANONCHK`, `SRM_B`) only fire once per IP — not a scanner reliability issue, just a "first scan only" behaviour.
- **Microsoft Clarity has no consent mode API** — gate it by conditionally loading the script, not by calling a consent function.
- **UET consent mode** uses `window.uetq.push('consent', ...)` — completely separate from Google's `gtag('consent', ...)`.
- **MUID appears twice**: once on `.bing.com` (from UET + Maps iframe), once on `.clarity.ms` (from Clarity sync) — these are separate cookies under different domains.

---

## Cookie Reference

| Cookie | Domain | Category | Expiry | Source |
|---|---|---|---|---|
| `_uetsid` | first-party | Marketing | 30 min | bat.js |
| `_uetvid` | first-party | Marketing | 180 days | bat.js |
| `_uetmsclkid` | first-party | Marketing | 90 days | Needs `?msclkid=` / dummy |
| `_clck` | first-party | Analytics | 1 year | Clarity tag |
| `_clsk` | first-party | Analytics | 1 day | Clarity tag |
| `MUID` | .bing.com | Marketing | 1 year | UET + Maps iframe |
| `MR` | bat.bing.com | Marketing | 7 days | UET sync |
| `SRCHD` | .bing.com | Marketing | 2 years | Maps iframe |
| `SRCHUID` | .bing.com | Marketing | 2 years | Maps iframe |
| `SRCHUSR` | .bing.com | Marketing | 2 years | Maps iframe |
| `SRCHHPGUSR` | .bing.com | Marketing | 2 years | Maps iframe |
| `_SS` | .bing.com | Analytics | Session | Maps iframe |
| `MSFPC` | .bing.com | Marketing | 1 year | Maps iframe |
| `CLID` | .clarity.ms | Analytics | 1 year | Clarity sync |
| `SM` | c.clarity.ms | Analytics | Session | Clarity sync |
| `ANONCHK` | c.clarity.ms | Marketing | 10 min | Clarity→Bing (fresh IP only) |
| `SRM_B` | c.bing.com | Marketing | 1 year | Clarity→Bing (fresh IP only) |
| `MR` | c.bing.com | Marketing | 7 days | Clarity→Bing (fresh IP only) |
