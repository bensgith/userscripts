// ==UserScript==
// @name         Tidy CSDN
// @namespace    https://github.com/bensgith/mytoolbox
// @version      0.0.2
// @description  Remove annoying bars and boxes
// @author       Benjamin L.
// @match        https://blog.csdn.net/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .passport-login-container,
        .passport-login-tip-container,
        .more-toolbar,
        .recommend-box,
        .csdn-side-toolbar,
        .blog_container_aside {
            display: none;
        }
        .container,
        main {
            width: auto !important;
        }
    `);
})();