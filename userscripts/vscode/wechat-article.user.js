// ==UserScript==
// @name         WeChat Article with VS Code Style
// @namespace    https://github.com/bensgith/tampermonkey-scripts
// @version      0.2.0
// @description  Change style to VS Code-alike
// @author       Benjamin L
// @match        https://mp.weixin.qq.com/*
// @icon         https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let vscode_favico = 'https://code.visualstudio.com/favicon.ico';

    // favorite icon
    var shortcut_icon = document.getElementsByTagName('link')[0];
    shortcut_icon.href = vscode_favico;

    var css = `
        #page-content {
            background-color:#252526;
            color:#D4D4D4;
        }

        #js_content {
            background-color:#252526;
            color:#D4D4D4;
        }

        .rich_media_meta {
            color:white;
        }

        .rich_media_area_primary_inner {
            max-width:977px !important
        }

        /* hide bottom area */
        #page_bottom_area {
            display:none
        }

        /* hide qr code */
        #js_pc_qr_code {
            display:none !important
        }
    `;
    
    GM_addStyle(css);
})();