// ==UserScript==
// @name         Wide-WeChat
// @namespace    https://github.com/bensgith/vscode-style-wechat
// @version      0.0.1
// @description  Wider window of Wechat web page
// @author       Benjamin L
// @match        https://wx2.qq.com/*
// @icon         https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var css = `
        /* login page */
        .login .web_wechat_login_logo,
        .login .login_box .qrcode .sub_title,
        .login .login_box .qrcode .sub_desc,
        .login .login_box .avatar .img,
        .login .login_box .association .img,
        .login .login_box .broken_network,
        .login .lang,
        .login .copyright {
            display: none;
        }
        .login .login_box {
            background: #1E1E1E;
        }
        .login .login_box .avatar .action {
            color: #FFF;
        }

        /* Common elements */
        body {
            background: #1E1E1E;
        }
        .main {
            min-height: 100%;
            padding-top: 0px;
        }
        .main .copyright {
            display: none;
        }
        .main_inner {
            max-width: 100%;
            line-height: 1.35;
        }

        /* left sidebar */
        .header .avatar,
        .header .info .nickname .display_name,
        #search_bar,
        .tab,
        .download_entry,
        .chat_item .avatar .img,
        .chat_item .nickname .emoji,
        .chat_item .ext,
        .chat_item .info .msg {
            display: none;
        }
        .panel {
            background-color: #252526;
        }
        .panel.give_me .nav_view {
            top: 64px;
        }

        /* message box */
        #chatArea .box_hd,
        #chatArea .box_bd .chat_bd .message_empty,
        #chatArea .box_bd .chat_bd .avatar,
        #chatArea .box_ft .action,
        #chatArea .box_bd .message .content .bubble:after,
        #chatArea .box_bd .message .custom_emoji,
        #chatArea .box_bd .message .qqemoji,
        #chatArea .box_bd .message .content .nickname .emoji,
        #chatArea .box_bd .message .content .bubble .bubble_cont .app .cover {
            display: none;
        }
        #chatArea {
            background-color: #1E1E1E;
        }
        #chatArea .box_bd .message {
            margin-bottom: 0px;
        }
        #chatArea .box_bd .message .content .bubble {
            color: #CCC;
            background-color: #1E1E1E;
            max-width: none;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .plain {
            padding: 4px 0px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .picture img {
            max-width: 35px;
            max-height: 24px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .app {
            padding: 4px;
            margin: 0px;
            background-color: #2D2D2D;
            max-width: none;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .app .title {
            color: #CCC;
        }

        /* chat box */
        .chat .box_ft .content {
            color: #CCC;
        }



    `;
    GM_addStyle(css);

    let vscodeFavico = 'https://code.visualstudio.com/favicon.ico';
    let vscodeName = 'Microsoft VS Code';

    // change favicon and title
    document.getElementsByTagName('link')[0].href = vscodeFavico;
    /* If window is blur (not focus), page title will be updated once there are new messages.
       Another user script, named "Always on focus" (https://github.com/daijro/always-on-focus),
       is being used to trick the app that window is always "focused" */
    document.getElementsByTagName('title')[0].innerHTML = vscodeName;


})();