// ==UserScript==
// @name         Vocabulary Ehancement
// @namespace    https://github.com/bensgith/tampermonkey-scripts/
// @version      0.0.1
// @description  Remove / hide unecessary infomation
// @author       Benjamin L
// @match        https://www.vocabulary.com/dictionary/*
// @icon         https://cdn.vocab.com/images/favicons/favicon-32x32-2frmtt.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let css = `
        .dictionary_home .box-subscribe,
        .sign-up-tile-area,
        .page-footer {
            display: none;
        }
        .promote-subscribe-dictionary {
            display: none !important;
        }
    `;

    GM_addStyle(css);
})();