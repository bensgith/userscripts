// ==UserScript==
// @name         Hide Economist Posts Audio Player
// @namespace    https://github.com/bensgith/tampermonkey-scripts/
// @version      0.1.1
// @description  Hide the floating audio player above article
// @author       Benjamin L
// @match        https://www.economist.com/*
// @icon         https://www.economist.com/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('.css-m3y5rp{display:none !important}');
    GM_addStyle('.css-1qjp74c{display:block !important}');

})();