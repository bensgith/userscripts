// ==UserScript==
// @name         Twitter wide timeline
// @namespace    https://github.com/bensgith/userscripts
// @version      0.0.1
// @description  try to take over the world!
// @author       Benjamin L
// @match        https://x.com/home*
// @icon         https://abs.twimg.com/favicons/twitter.3.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var css = `
        .r-5wli1b,
        .r-1jocfgc {
            display: none;
        }


        /* home timeline column */
        .r-113js5t {
            width: 1640px;
        }
        /* home timeline content */
        .r-1ye8kvj {
           max-width: 1200px;
        }

    `
    GM_addStyle(css);
})();