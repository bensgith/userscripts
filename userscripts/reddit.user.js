// ==UserScript==
// @name         Ads Free Reddit
// @namespace    https://github.com/bensgith/mytoolbox
// @version      0.0.1
// @description  Remove ads from post timeline
// @author       Benjamin L.
// @match        https://www.reddit.com/*
// @icon         https://www.redditstatic.com/shreddit/assets/favicon/64x64.png
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .promotedlink {
            display: none;
        }
    `);
})();