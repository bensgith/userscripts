// ==UserScript==
// @name         Wide-WeChat
// @namespace    https://github.com/bensgith/vscode-style-wechat
// @version      0.1.0
// @description  Wider window of Wechat web page
// @author       Benjamin L
// @match        https://wx2.qq.com/*
// @icon         https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
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
        .header {
            padding: 10px 18px;
        }
        .panel {
            background-color: #252526;
        }
        .panel.give_me .nav_view {
            top: 50px;
        }
        .panel.give_me .nav_view .chat_list .chat_item {
            padding: 6px 18px 7px;
        }

        /* message box */
        #chatArea .box_hd .title .title_name .emoji,
        #chatArea .box_bd .chat_bd .message_empty,
        #chatArea .box_bd .chat_bd .avatar,
        #chatArea .box_ft .action,
        #chatArea .box_bd .message .content .bubble:after,
        #chatArea .box_bd .message .content .nickname .emoji,
        #chatArea .box_bd .message .content .emoticon .custom_emoji,
        #chatArea .box_bd .message .content .bubble .bubble_cont .card .emoji,
        #chatArea .box_bd .message .content .bubble .bubble_cont .app .cover,
        #chatArea .box_bd .message .content .bubble .bubble_cont .card .card_avatar,
        #chatArea .box_bd .message .content .bubble .bubble_cont .card:after,
        #chatArea .box_bd .message .content .bubble .bubble_cont .voice .web_wechat_noread,
        #chatArea .box_bd .message_system {
            display: none;
        }
        #chatArea {
            background-color: #1E1E1E;
        }
        #chatArea .box_hd .title_wrap {
            background-color: #1E1E1E;
            border-bottom: none;
            color: #fff;
            text-align: left;
            margin: 0 28px;
        }
        #chatArea .box_hd .title_wrap .title .title_name {
            color: #fff;
        }
        #chatArea .box_bd .message {
            margin-bottom: 0px;
        }
        #chatArea .box_bd .message .content .emoticon {
            padding: 2px 11px;
        }
        /* custom emojis are hidden use text instead */
        #chatArea .box_bd .message .content .emoticon::after {
            color: #CCC;
            font-size: 14px;
            content: "[custom_emoji]";
        }
        #chatArea .box_bd .message .content .bubble {
            color: #CCC;
            background-color: #1E1E1E;
            max-width: none;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .plain {
            padding: 4px 0px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .picture {
            padding: 4px 0px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .picture img {
            max-width: 25px;
            max-height: 25px;
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
        #chatArea .box_bd .message .content .bubble .bubble_cont .card {
            padding: 4px;
            margin: 0px;
            background-color: #2D2D2D;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .card .card_hd {
            padding: 0px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .video {
            padding: 4px 0px;
        }
        /* smaller size of video message */
        #chatArea .box_bd .message .content .bubble .bubble_cont .video img {
            max-width: 30px;
            max-height: 30px;
        }
        /* smaller size of video play icon */
        #chatArea .box_bd .message .content .bubble .bubble_cont .video .web_wechat_paly {
            margin-top: -16px;
            margin-left: -16px;
            width: 30px;
            height: 30px;
            background-position: -246px -120px;
            -webkit-background-size: 284px 254px;
            background-size: 283px 254px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .voice {
            padding: 4px 0px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .voice .web_wechat_voice_gray {
            background: none;
            border-left: solid #ccc 2px;
        }
        #chatArea .box_bd .message .content .bubble .bubble_cont .voice .web_wechat_voice_green {
            background: none;
            border-right: solid #ccc 2px;
        }
        #chatArea .box_bd .message .message_system {
            margin: 0px auto;
        }
        #chatArea .box_bd .message .message_system .content {
            padding: 4px 0px;
            color: #4f4f4f;
        }


        /* chat box */
        .chat .box_ft .content {
            color: #CCC;
        }
    `);

    // Private Mode
    // - if enabled: nicknames, group names, emojis are hidden or masked
    // - if disabled: nicknames, group names, emojis are shown
    let privateMode = true;
    if (privateMode) {
        GM_addStyle(`
            .panel {
                width: 200px;
            }
            .chat_item .info .nickname_text {
                display: none;
            }
            .panel.give_me .nav_view .chat_list .chat_item .info .nickname::after {
                content: "📄 README.md >>";
            }
            #chatArea .box_hd .title_wrap .title .title_name {
                max-width: 80px;
                overflow: hidden;
            }
            /* replace emoji with "wechat face" in message */
            #chatArea .box_bd .message .content .bubble .bubble_cont .plain .emoji,
            #chatArea .box_bd .message .content .bubble .bubble_cont .plain .qqemoji {
                background: url(//res.wx.qq.com/t/wx_fed/webwx/res/static/css/5af37c4a880a95586cd41c5b251d5562@1x.png) no-repeat;
                background-position: -342px -338px;
                -webkit-background-size: 408px 389px;
                background-size: 408px 389px;
            }
        `);
    }


    let vscodeFavico = 'https://code.visualstudio.com/favicon.ico';
    let vscodeName = 'Microsoft VS Code';

    // change favicon and title
    document.getElementsByTagName('link')[0].href = vscodeFavico;
    /* If window is blur (not focus), page title will be updated once there are new messages.
       Another user script, named "Always on focus" (https://github.com/daijro/always-on-focus),
       is being used to trick the app that window is always "focused" */
    document.getElementsByTagName('title')[0].innerHTML = vscodeName;


})();