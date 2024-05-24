// ==UserScript==
// @name         Ad Remover for engineeringtoolbox
// @namespace    https://github.com/bensgith/tampermonkey-scripts/
// @version      0.0.2
// @description  Remove ads and other enhancement
// @author       Benjamin L
// @match        https://www.engineeringtoolbox.com/*
// @icon         https://www.engineeringtoolbox.com/static/img/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';


    var css = `
        #right,
        .noPrint,
        .snigel-adhesive.bottom {
            display: none;
        }

        #center {
            width: 1050px;
        }
    `;
    GM_addStyle(css);
})();