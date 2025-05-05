// ==UserScript==
// @name         WeRead for Portrait Screen
// @namespace    https://github.com/bensgith/userscripts
// @version      0.0.3
// @description  WeRead Enhancement for Portrait Screen
// @author       Benjamin L
// @match        https://weread.qq.com/*
// @icon         https://rescdn.qqmail.com/node/wr/wrpage/style/images/independent/favicon/favicon_32h.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let css = `
    .readerContent .app_content {
        max-width: 1062px; /* 760px */
    }

    .readerTopBar {
        max-width: 1062px; /* 760px */
    }

    .readerControls {
        margin-left: 480px; /* 428px */
    }
    .readerCatalog {
        margin-left: -50px; /* -140px */
    }
    `;

    GM_addStyle(css);
})();