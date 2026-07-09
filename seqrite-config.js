
let userLang = (navigator.language || (navigator).userLanguage || 'en').split('-')[0];
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "6a4d565619f8dc6ef8700485",
  "uuid": "0e09ad4d-e7f7-491f-8812-cfeb03128f94",
  "domain": "https://devop.pre-dataprivacy.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "cookie-consent-enforcement-sdp_netlify_app_",
  "cookieExpiresAfterDays": 365,
  "default": false,
  "mustConsent": false,
  "acceptAll": true,
  "hideDeclineAll": false,
  "hideLearnMore": false,
  "disablePoweredBy": false,
  "translations": {
    "english": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-YNID</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;YSC</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;doubleclick.net</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRM_B</div><div><b>Host:</b>&nbsp;c.bing.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_clck</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_clsk</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_01XNDLZCYQ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;CLID</div><div><b>Host:</b>&nbsp;www.clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_SS</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Bing Session</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SM</div><div><b>Host:</b>&nbsp;c.clarity.ms</div><div><b>Service:</b>&nbsp;Analytics Cookies</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">24 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_aw</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_em</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_fn</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_ln</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_ph</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetmsclkid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-ROLLOUT_TOKEN</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;VISITOR_INFO1_LIVE</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;VISITOR_PRIVACY_METADATA</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;doubleclick.net</div><div><b>Service:</b>&nbsp;DoubleClick / Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUIDB</div><div><b>Host:</b>&nbsp;www.bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHD</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHUID</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHUSR</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHHPGUSR</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MR</div><div><b>Host:</b>&nbsp;bat.bing.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ANONCHK</div><div><b>Host:</b>&nbsp;c.clarity.ms</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-YEC</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_EDGE_S</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_EDGE_V</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "en": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-YNID</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;YSC</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;doubleclick.net</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRM_B</div><div><b>Host:</b>&nbsp;c.bing.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_clck</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_clsk</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_01XNDLZCYQ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;CLID</div><div><b>Host:</b>&nbsp;www.clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_SS</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Bing Session</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SM</div><div><b>Host:</b>&nbsp;c.clarity.ms</div><div><b>Service:</b>&nbsp;Analytics Cookies</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">24 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_aw</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_em</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_fn</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_ln</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_ph</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetmsclkid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-ROLLOUT_TOKEN</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;VISITOR_INFO1_LIVE</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;VISITOR_PRIVACY_METADATA</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;doubleclick.net</div><div><b>Service:</b>&nbsp;DoubleClick / Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUIDB</div><div><b>Host:</b>&nbsp;www.bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHD</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHUID</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHUSR</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHHPGUSR</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MR</div><div><b>Host:</b>&nbsp;bat.bing.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ANONCHK</div><div><b>Host:</b>&nbsp;c.clarity.ms</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-YEC</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_EDGE_S</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_EDGE_V</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "zz": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-YNID</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;YSC</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;doubleclick.net</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRM_B</div><div><b>Host:</b>&nbsp;c.bing.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_clck</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_clsk</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_01XNDLZCYQ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;CLID</div><div><b>Host:</b>&nbsp;www.clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_SS</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Bing Session</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SM</div><div><b>Host:</b>&nbsp;c.clarity.ms</div><div><b>Service:</b>&nbsp;Analytics Cookies</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">24 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_aw</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_em</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_fn</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_ln</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_ph</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetmsclkid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-ROLLOUT_TOKEN</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;VISITOR_INFO1_LIVE</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;VISITOR_PRIVACY_METADATA</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;doubleclick.net</div><div><b>Service:</b>&nbsp;DoubleClick / Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUIDB</div><div><b>Host:</b>&nbsp;www.bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHD</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHUID</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHUSR</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHHPGUSR</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MR</div><div><b>Host:</b>&nbsp;bat.bing.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ANONCHK</div><div><b>Host:</b>&nbsp;c.clarity.ms</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-YEC</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_EDGE_S</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_EDGE_V</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    }
  },
  "styling": {
    "theme": [
      "light",
      "custom"
    ]
  },
  "htmlTexts": true,
  "embedded": false,
  "declarative": true,
  "groupByPurpose": false,
  "hideToggleAll": false,
  "appName": "test-api-1",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "test-api-1",
  "companyAddress": " ",
  "services": [
    {
      "name": "functional",
      "title": "Functional",
      "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-YNID</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;YSC</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;doubleclick.net</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRM_B</div><div><b>Host:</b>&nbsp;c.bing.com</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>",
      "purposes": [],
      "required": true,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "__Secure-YNID",
        "YSC",
        "test_cookie",
        "SRM_B"
      ]
    },
    {
      "name": "analytics",
      "title": "Analytics",
      "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">8 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_clck</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_clsk</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_01XNDLZCYQ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;CLID</div><div><b>Host:</b>&nbsp;www.clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Clarity</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_SS</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Bing Session</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SM</div><div><b>Host:</b>&nbsp;c.clarity.ms</div><div><b>Service:</b>&nbsp;Analytics Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga",
        "_clck",
        "_clsk",
        "_ga_01XNDLZCYQ",
        "_ga_89RWJTCPLZ",
        "CLID",
        "_SS",
        "SM"
      ]
    },
    {
      "name": "marketing",
      "title": "Marketing",
      "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">24 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_aw</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbc</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_em</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_fn</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_ln</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;th_capi_ph</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetmsclkid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-ROLLOUT_TOKEN</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;VISITOR_INFO1_LIVE</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;VISITOR_PRIVACY_METADATA</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetsid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_uetvid</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;doubleclick.net</div><div><b>Service:</b>&nbsp;DoubleClick / Google Ads</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUIDB</div><div><b>Host:</b>&nbsp;www.bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHD</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHUID</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHUSR</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;SRCHHPGUSR</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MR</div><div><b>Host:</b>&nbsp;bat.bing.com</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;MUID</div><div><b>Host:</b>&nbsp;clarity.ms</div><div><b>Service:</b>&nbsp;Microsoft Bing Ads (UET)</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ANONCHK</div><div><b>Host:</b>&nbsp;c.clarity.ms</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_gcl_aw",
        "_fbp",
        "_fbc",
        "th_capi_em",
        "th_capi_fn",
        "th_capi_ln",
        "th_capi_ph",
        "_uetmsclkid",
        "_gcl_au",
        "__Secure-ROLLOUT_TOKEN",
        "VISITOR_INFO1_LIVE",
        "VISITOR_PRIVACY_METADATA",
        "_uetsid",
        "_uetvid",
        "IDE",
        "MUID",
        "MUIDB",
        "SRCHD",
        "SRCHUID",
        "SRCHUSR",
        "SRCHHPGUSR",
        "MR",
        "MUID",
        "ANONCHK"
      ]
    },
    {
      "name": "others",
      "title": "Others",
      "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;__Secure-YEC</div><div><b>Host:</b>&nbsp;youtube.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_EDGE_S</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_EDGE_V</div><div><b>Host:</b>&nbsp;bing.com</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": false,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "__Secure-YEC",
        "_EDGE_S",
        "_EDGE_V"
      ]
    }
  ]
};
showCookie();