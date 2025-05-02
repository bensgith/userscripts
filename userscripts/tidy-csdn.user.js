// ==UserScript==
// @name         Tidy CSDN
// @namespace    https://github.com/bensgith/mytoolbox
// @version      0.0.6
// @description  Remove annoying bars and boxes
// @author       Benjamin L.
// @match        https://blog.csdn.net/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        .passport-login-container,
        .passport-login-tip-container,
        .more-toolbar,
        .recommend-box,
        .csdn-side-toolbar,
        .blog_container_aside,
        #csdn-toolbar .toolbar-menus,
        #csdn-toolbar .toolbar-container .toolbar-container-right {
            display: none;
        }
        body,
        #csdn-toolbar .toolbar-container {
            min-width: auto;
        }
        #csdn-toolbar .toolbar-inside.exp3 .toolbar-container-middle .toolbar-search {
            max-width: none;
        }
        main,
        .container {
            width: 100% !important;
        }
    `);
})();