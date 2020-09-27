(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{700:function(e,t,o){"use strict";o.r(t);var a=o(28),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting-problems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-problems"}},[e._v("#")]),e._v(" Troubleshooting problems")]),e._v(" "),o("p",[o("strong",[e._v("This page is for when you encounter a problem with a source extension.")])]),e._v(" "),o("div",{staticClass:"custom-block c-danger"},[o("h4",{staticClass:"c-title"},[e._v("Common error messages")]),o("ul",[o("li",[e._v("HTTP Error 4xx")]),e._v(" "),o("li",[e._v("HTTP Error 5xx")]),e._v(" "),o("li",[e._v("Unexpected URL")]),e._v(" "),o("li",[e._v("Page List is empty")]),e._v(" "),o("li",[e._v("Unable to resolve host")]),e._v(" "),o("li",[e._v("Failed to bypass Cloudflare")]),e._v(" "),o("li",[e._v("java.security.cert.CertPathValidatorException")]),e._v(" "),o("li",[e._v("Attempt to invoke virtual method 'java.lang.String org.jsoup.nodes.Node.attr(java.lang.String)' on a null object reference")])])]),o("h2",{attrs:{id:"diagnosis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#diagnosis"}},[e._v("#")]),e._v(" Diagnosis")]),e._v(" "),o("ul",[o("li",[e._v("Verify your extensions are up to date. ("),o("Navigation",{attrs:{item:"browse"}}),e._v(" → Extensions, make sure no extensions have an update button)")],1),e._v(" "),o("li",[e._v("Check if "),o("strong",[e._v("Tachiyomi")]),e._v(" has an update ("),o("Navigation",{attrs:{item:"more"}}),e._v(" → "),o("Navigation",{attrs:{item:"about"}}),e._v(" then click "),o("strong",[e._v("Check for updates")]),e._v(")")],1),e._v(" "),o("li",[e._v("Try opening the manga in "),o("Navigation",{attrs:{item:"webview"}}),e._v(". If there is "),o("a",{attrs:{href:"#solving-a-captcha"}},[e._v("CAPTCHA")]),e._v(", solve it and see if it helped.")],1),e._v(" "),o("li",[e._v("Change your internet connection ("),o("em",[e._v('switch to Wi-Fi, mobile data or a VPN, use a "What\'s my IP" site to confirm your IP has changed')]),e._v("), then try again.")]),e._v(" "),o("li",[e._v("Ask other users to try the action that gives you the error.")]),e._v(" "),o("li",[e._v("Check if the source is either down, or is having issues in a browser.")]),e._v(" "),o("li",[e._v("Press the retry button in the middle of your manga page if one exists.")]),e._v(" "),o("li",[e._v("Try the following at "),o("Navigation",{attrs:{item:"more"}}),e._v(" → "),o("Navigation",{attrs:{item:"settings"}}),e._v(" → "),o("Navigation",{attrs:{item:"settings_advanced"}}),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Clear Cache")])]),e._v(" "),o("li",[o("strong",[e._v("Clear Cookies")])]),e._v(" "),o("li",[o("strong",[e._v("Clear Database")])])])],1),e._v(" "),o("li",[e._v("If your downloads are getting stuck, try deleting the queue and trying again.")]),e._v(" "),o("li",[e._v("Force close "),o("strong",[e._v("Tachiyomi")]),e._v(" and reopen it.")])]),e._v(" "),o("div",{staticClass:"custom-block c-tip"},[o("h4",{staticClass:"c-title"}),o("p",[e._v("Your issue may have been fixed in the Preview version already, just wait for a new Stable release.")])]),o("p",[e._v("If any of these help, go to "),o("a",{attrs:{href:"#it-only-happens-to-me"}},[e._v("it only happens to me")]),e._v(".\nIf it's not just you, go to "),o("a",{attrs:{href:"#everyone-is-having-this-problem"}},[e._v("everyone is having this problem")]),e._v(".")]),e._v(" "),o("p",[e._v("If none of these help, try asking in our "),o("a",{attrs:{href:"https://discord.gg/tachiyomi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord Server"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"it-only-happens-to-me"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#it-only-happens-to-me"}},[e._v("#")]),e._v(" It only happens to me")]),e._v(" "),o("p",[e._v("You may be getting a "),o("strong",[e._v("CAPTCHA")]),e._v(", may have been IP-banned, or encountered some other counter-measure that website owners deploy against programs like "),o("strong",[e._v("Tachiyomi")]),e._v(". If that is the case, there is probably nothing that can be done about that. Some of them (like "),o("strong",[e._v("CAPTCHA")]),e._v(") have to be manually solved, some are temporary (IP bans).")]),e._v(" "),o("p",[o("strong",[e._v("Workarounds that can lower chance of it happening again:")])]),e._v(" "),o("ul",[o("li",[e._v("Don't use downloads with the source.")]),e._v(" "),o("li",[e._v("Have less manga in library from the source.")])]),e._v(" "),o("div",{staticClass:"custom-block c-warning"},[o("h4",{staticClass:"c-title"}),o("p",[e._v("All of the above are very imprecise and fuzzy rules, because each site has their own, non-public limits and triggers.")])]),o("h3",{attrs:{id:"everyone-is-having-this-problem"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#everyone-is-having-this-problem"}},[e._v("#")]),e._v(" Everyone is having this problem")]),e._v(" "),o("p",[e._v("If the site is reachable and fully functional then there may be an issue with the extension or app.")]),e._v(" "),o("ol",[o("li",[e._v("Have a look at open issues "),o("a",{attrs:{href:"https://github.com/inorichi/tachiyomi/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("for the app"),o("OutboundLink")],1),e._v(" and/or "),o("a",{attrs:{href:"https://github.com/inorichi/tachiyomi-extensions/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("It may have been fixed already, but not released yet, so look at closed issues ("),o("a",{attrs:{href:"https://github.com/inorichi/tachiyomi/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"}},[e._v("app"),o("OutboundLink")],1),e._v(" / "),o("a",{attrs:{href:"https://github.com/inorichi/tachiyomi-extensions/issues?q=is%3Aissue+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),o("OutboundLink")],1),e._v(") issues as well.")]),e._v(" "),o("li",[e._v("If you can't find the issue there, open a new one.")])]),e._v(" "),o("p",[e._v("If the site is not reachable or having issues then all you can do is wait for the site to become functional again.")]),e._v(" "),o("h3",{attrs:{id:"what-are-some-common-errors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-some-common-errors"}},[e._v("#")]),e._v(" What are some common errors?")]),e._v(" "),o("el-collapse",[o("el-collapse-item",{attrs:{title:"Java.lang Exception: Challenge not found"}},[o("p",[e._v("Often this will be resolved by force-quitting and reopening "),o("strong",[e._v("Tachiyomi")]),e._v(".")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"Loader not implemented"}},[o("p",[e._v("It means that the respective extension for the manga is not installed. To fix, install the extension for the manga. If it still doesn't work, uninstall then reinstall the extension again.")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"Value Manga is licensed at data of type java.lang.String cannot be converted to JSONObject"}},[o("p",[e._v("This means that the manga has been licensed and can no longer be read on that source. Try a different source to read the manga.")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"HTTP error 403"}},[o("p",[e._v("The source you selected may have "),o("strong",[e._v("Cloudflare")]),e._v(" protection on and is enforcing "),o("a",{attrs:{href:"#solving-a-captcha"}},[e._v("CAPTCHA")]),e._v(". Please complete the "),o("a",{attrs:{href:"#solving-a-captcha"}},[e._v("CAPTCHA")]),e._v(" to fix it.")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"App not installed"}},[o("p",[e._v("You may encounter this if you're installing an official build over an existing "),o("strong",[e._v("F-Droid")]),e._v(" build due to differing signatures.\nBackup your data, uninstall the app, then restore the data in the fresh install.")])]),e._v(" "),o("el-collapse-item",{attrs:{title:"Attempt to invoke virtual method 'com.hippo.unifile..."}},[o("p",[e._v("This error can be caused by a variety of reasons, all to do with storage.")]),e._v(" "),o("ul",[o("li",[e._v("Most commonly it is caused by full storage, check to see if your device or SD Card is full.")]),e._v(" "),o("li",[e._v("Check if "),o("strong",[e._v("Tachiyomi")]),e._v(" has access to the SD card. You can enable it in the android settings for app permissions.")]),e._v(" "),o("li",[e._v("If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to. This may be because the folder is corrupted or does not exist. Use a file manager to check that the folder(s) exist and every folder in the sequence is available and accessible.")]),e._v(" "),o("li",[e._v("The drive you're writing to is corrupted. Check using a file manager to see if it is accessible.")])])]),e._v(" "),o("el-collapse-item",{attrs:{title:"Cannot Access SD Card"}},[o("p",[e._v("This error is typically caused by having a file or folder name that is too long. Android's file manager does not support filenames longer than 255 characters. If you know the file or folder name that is the culprit, you can connect your SD card to your computer and shorten it. Otherwise, delete the Tachiyomi downloads folder off of the SD Card.")])])],1),e._v(" "),o("h2",{attrs:{id:"solving-a-captcha"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#solving-a-captcha"}},[e._v("#")]),e._v(" Solving a CAPTCHA")]),e._v(" "),o("p",[o("strong",[e._v("Please note that WebView is not the same as using your browser.")])]),e._v(" "),o("p",[e._v("You must solve the "),o("strong",[e._v("CAPTCHA")]),e._v(" in "),o("strong",[e._v("WebView")]),e._v(".")]),e._v(" "),o("div",{staticClass:"guide"},[o("p",{staticClass:"title"},[e._v("How to open WebView")]),o("ol",[o("li",[e._v("Go to "),o("Navigation",{attrs:{item:"browse"}}),e._v(" in the bottom navbar.")],1),e._v(" "),o("li",[e._v("Press the source you'd like to access.")]),e._v(" "),o("li",[e._v("Press the "),o("Navigation",{attrs:{item:"webview"}}),e._v(" icon.\n"),o("figure",{staticClass:"centered"},[o("img",{staticClass:"zoomable",attrs:{src:e.$withBase("/help/guides/troubleshooting-problems/assets/WebView-Open.jpg")}})])],1),e._v(" "),o("li",[e._v("Complete "),o("strong",[e._v("CAPTCHA")]),e._v(" if one is present.")]),e._v(" "),o("li",[e._v("Once done, press the "),o("em",[e._v("Back Arrow")]),e._v(" at the top left to return.")])])]),o("h3",{attrs:{id:"webview-not-working"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#webview-not-working"}},[e._v("#")]),e._v(" WebView not working?")]),e._v(" "),o("p",[e._v("If "),o("strong",[e._v("WebView")]),e._v(" doesn't work for you, please update the "),o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.WebView",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android System WebView"),o("OutboundLink")],1),e._v(" app.")]),e._v(" "),o("p",[e._v("When you've updated go to "),o("a",{attrs:{href:"https://developer.android.com/studio/debug/dev-options",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer Options"),o("OutboundLink")],1),e._v(" in your phone's settings and set "),o("strong",[e._v("WebView Implementation")]),e._v(" to "),o("code",[e._v("Android System WebView")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block c-tip"},[o("h4",{staticClass:"c-title"}),o("p",[e._v("If "),o("code",[e._v("Android System WebView")]),e._v(" doesn't work, try setting "),o("code",[e._v("Google Chrome")]),e._v(" as the default "),o("strong",[e._v("WebView Implementation")]),e._v(" instead.")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);