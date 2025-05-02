// ==UserScript==
// @name         Clean Blog Articles
// @namespace    https://github.com/bensgith/mytoolbox
// @version      0.1.0
// @description  Remove annoying side bars, comment blocks, ads, etc.
// @author       Benjamin L.
// @match        https://blog.csdn.net/*
// @match        https://www.cnblogs.com/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    
    if (window.location.href.startsWith("https://blog.csdn.net/")) {
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
    }

    if (window.location.href.startsWith("https://www.cnblogs.com/")) {
        GM_addStyle(`
            #sideBar,
            #comment_form {
                display: none;
            }
            #main {
                max-width: 100%;
                margin: 20px;
            }
            #mainContent {
                flex: 0 1 100%;
                max-width: 100%;
            }
        `);
    }
})();