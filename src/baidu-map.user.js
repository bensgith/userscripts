// ==UserScript==
// @name         Baidu Map Ehancement
// @namespace    https://github.com/bensgith/tampermonkey-scripts/
// @version      0.0.1
// @description  Remove / hide unecessary infomation
// @author       Benjamin L
// @match        https://map.baidu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=map.baidu.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let css = `
        /* disabling auto pop-up message panel */
        #message-panel.message-panel-open {
            display: unset;
        }
    `;

    GM_addStyle(css);

})();