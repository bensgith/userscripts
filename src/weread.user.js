// ==UserScript==
// @name         WeRead for Portrait Screen
// @namespace    https://github.com/bensgith/tampermonkey-scripts/
// @version      0.0.1
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
        max-width: 1062px;
    }

    .readerTopBar {
        max-width: 1062px;
    }

    .readerControls {
        margin-left: 480px;
    }`;

    GM_addStyle(css);
})();