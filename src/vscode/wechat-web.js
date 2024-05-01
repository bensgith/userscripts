// ==UserScript==
// @name         WeChat Web App with VS Code Style
// @namespace    https://github.com/bensgith/tampermonkey-scripts
// @version      0.6.1
// @description  Change style to VS Code-alike
// @author       Benjamin L
// @match        https://wx2.qq.com/*
// @icon         https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let vscode_favico = 'https://code.visualstudio.com/favicon.ico';
    let vscode_name = 'VS Code';


    // change tab tittle and icon
    var shortcut_icon = document.getElementsByTagName('link')[0];
    shortcut_icon.href = vscode_favico;
    // set title every 0.5 second, never end
    setInterval(function() {
        var titleNode = document.getElementsByTagName('title')[0];
        titleNode.innerHTML = vscode_name;
    }, 500);


    // login page
    if (document.getElementsByClassName('login').length > 0) {
        var loginAvatarInterval = setInterval(function() {
            var association_img = document.getElementsByClassName('association')[0].firstElementChild;
            association_img.src = vscode_favico;
        }, 500);
    }


   var headerAvatarInterval = setInterval(function() {
        var nickname = document.getElementsByClassName('nickname')[0].firstElementChild;
        var avatarImg = document.querySelector(".header .avatar .img");
        if (avatarImg.src != vscode_favico && nickname.innerHTML === vscode_name) {
            // if successfully changed, show avatar and name
            GM_addStyle('.header .avatar .img{display:block;width:27px;height:27px}');
            GM_addStyle('.header .info .nickname .display_name{display:inline-block;width:auto}');
        }
        avatarImg.src = vscode_favico;
        nickname.innerHTML = vscode_name;
    }, 500);


    var css = `
        /* Common elements */
        .main {
            min-height:100%;
            padding-top:0px;
        }
        .main .copyright {
            display:none;
        }
        .main_inner {
            max-width:100%;
        }
        .button_primary {
            background-color:#0E639C !important;
            border-color:#0E639C !important;
        }
        .button_default,
        .waiting_confirm  {
            background-color:#333333 !important;
            color:white !important;
        }


        /* Login Page */
        .lang,
        .copyright,
        .sub_title,
        .sub_desc,
        .web_wechat_login_logo {
            display:none;
        }
        .login {
            background-color:#333333;
        }
        .login_box {
            background-color:#1E1E1E;
        }
        .login_box .avatar .action {
            background-color:#333333 !important;
            color:white !important;
        }


        /* Chatting Page */
        /* left panel */
        #search_bar,
        .tab,
        .download_entry,
        .header .avatar .img,
        .header .info .nickname .display_name,
        .chat_item .avatar .img,
        .chat_item .info .msg,
        .chat_item .ext,
        .chat_item .nickname .emoji {
            display: none;
        }
        .panel{
            background-color:#252526;
            width:220px;
        }
        .dropdown_menu {
            background-color:#333333;
            border-color:#414141;
        }
        .dropdown_menu li a {
            border-bottom-color:#414141;
            color:white;
        }
        .dropdown_menu li a:hover {
            background-color:#37373D;
        }
        .chat_item {
            padding:6px 20px 6px;
            border-bottom-color:#414141;
        }
        .chat_item.active {
            background:#37373D;
        }
        .nav_view{
            top:64px !important;
        }
        .web_wechat_reddot{
            background:url(https://img2.imgtp.com/2024/04/18/vNEgsIni.png) no-repeat;
            background-position:-473px -380px;
        }
        .web_wechat_reddot_middle{
            background:url(https://img2.imgtp.com/2024/04/18/vNEgsIni.png) no-repeat;
            background-position: -451px -380px;
        }


        /* message panel */
        .web_wechat_nomes_icon,
        .message .avatar,
        .chat .box_hd,
        .bubble_cont .app .cover,
        .message .nickname .emoji {
            display:none;
        }
        #chatArea {
            background-color:#1E1E1E;
            color:white;
        }
        .bubble{
            background-color:#1E1E1E !important;
            margin:3px 10px;
        }
        .bubble.bubble_primary.right.arrow_primary:before,
        .bubble.bubble_primary.right:after {
            border-left-color:#0E639C;
        }
        .bubble_cont .app {
            background-color:#2D2D2D;
            padding:8px;
            margin:0 5px;
            max-width:500px;
        }
        .bubble_cont .app .title {
            color:white;
        }
        .bubble_cont .picture {
            padding:0 8px;
        }
        .bubble:after,
        .bubble:before {
            top:12px;
        }
        .message{
            margin-bottom:0;
        }
        .message_system {
            margin:0 auto;
        }


        /* reply panel */
        .btn_send,
        .chat .box_ft .desc {
            display:none;
        }
        .chat .box_ft {
            border-top-color:#414141;
        }
        .chat .box_ft .action {
            background-color:#1E1E1E !important;
        }
        .exp_hd,
        .exp_hd_item {
            background-color:#333333;
        }
        .exp_bd,
        .exp_hd_item.active {
            background-color:#252526;
        }
        .exp_hd_item a {
            color:white;
        }
        .expression{
            border-color:#414141;
        }
        .expression:after {
            border-top-color:#252526;
        }
        .qq_face a,
        .emoji_face a {
            border-bottom-color:#414141;
            border-right-color:#414141;
        }


        /* dialog */
        .ngdialog.default .ngdialog-content {
            background-color:#252526;
            color:white;
        }
        .add_chatroom .dialog_hd .title,
        .create_chatroom_dlg .dialog_hd .title,
        .transpond-dialog .dialog_hd .title,
        .selector,
        .chooser .contact_title {
            background-color:#252526;
        }
        .transpond-dialog .dialog_ft .button_primary {
            background-color:#0E639C;
        }
        .nav_tab,
        .selector .input_box .input {
            background-color:#252526;
            color:white;
        }
        .chooser .contact_item {
            background-color:#252526;
            border-bottom-color:#414141;
        }
        .chooser .active .contact_item {
            background-color:#2D2D2D;
            border-bottom-color:#414141;
        }
        .nav_tabs {
            background-color:#252526;
            border-bottom-color:#414141;
            color:white;
        }
        .dialog_ft {
            border-top-color:#414141;
        }
        .rooms .contact_list .contact_item {
            border-bottom-color:#414141;
        }
        .rooms .contact_list .info .nickname {
            color:white;
        }
    `;
    GM_addStyle(css);


    // clear intervals after 10 mins
    setTimeout(function() {
        clearInterval(loginAvatarInterval);
        console.log('cleared interval: loginAvatarInterval');
        clearInterval(headerAvatarInterval);
        console.log('cleared interval: headerAvatarInterval');
    }, 600000);

})();