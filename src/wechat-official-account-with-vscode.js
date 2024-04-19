// ==UserScript==
// @name         WeChat Official Account with VS Code Style
// @namespace    https://github.com/bensgith/tampermonkey-scripts-vscode
// @version      0.1.1
// @description  Change style to VS Code-alike
// @author       Benjamin L
// @match        https://mp.weixin.qq.com/*
// @icon         https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let vscode_favico = 'https://code.visualstudio.com/favicon.ico';
    let vscode_name = 'VS Code';

    // favorite icon
    var shortcut_icon = document.getElementsByTagName('link')[0];
    shortcut_icon.href = vscode_favico;

    GM_addStyle('#page-content{background-color:#121212;color:white}');
    GM_addStyle('#js_content{background-color:#121212;color:white}');
    GM_addStyle('.rich_media_area_primary_inner{max-width:977px !important}');
//     GM_addStyle('#meta_content{background-color:#121212;color:white}'); // not working
    GM_addStyle('#page_bottom_area{display:none}');
    GM_addStyle('#js_pc_qr_code{display:none !important}');
})();