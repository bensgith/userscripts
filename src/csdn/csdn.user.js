// ==UserScript==
// @name         CSDN Enhancement
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Hide unuseful elements from blog.csdn.net
// @author       Benjamin L
// @match        https://blog.csdn.net/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';


    var css = `
        #rightAside,
        .blog_container_aside,
        .csdn-side-toolbar,
        #toolBarBox,
        .recommend-box,
        #recommendNps,
        .passport-login-container,
        .passport-login-tip-container {
            display: none;
        }
    `;
    GM_addStyle(css);
})();