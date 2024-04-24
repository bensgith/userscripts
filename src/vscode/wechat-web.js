// ==UserScript==
// @name         WeChat Web App with VS Code Style
// @namespace    https://github.com/bensgith/tampermonkey-scripts
// @version      0.5.1
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
    let bg_img_url = 'https://img2.imgtp.com/2024/04/18/vNEgsIni.png';


    /////////////////////////////
    // change tab tittle
    ////////////////////////////a
    // favorite icon
    var shortcut_icon = document.getElementsByTagName('link')[0];
    shortcut_icon.href = vscode_favico;
    // set title every 0.5 second, never end
    setInterval(function() {
        var titleNode = document.getElementsByTagName('title')[0];
        titleNode.innerHTML = vscode_name;
    }, 500);


    ///////////////////////////
    // fullscreen app window
    /////////////////////////////
    GM_addStyle('.main{min-height:100%;padding-top:0px}');
    GM_addStyle('.main_inner{max-width:100%}');


    //////////////////////////////////////////
    // login page
    /////////////////////////////////////////
    if (document.getElementsByClassName('login').length > 0) {
        // background color
        GM_addStyle('.login{background-color:#333333}');
        // hide login wechat logo
        GM_addStyle('.web_wechat_login_logo{display:none}');
        // hide bottom info
        GM_addStyle('.lang{display:none}');
        GM_addStyle('.copyright{display:none}');
        // login box background color
        GM_addStyle('.login_box{background-color:#1E1E1E}');
        // login box avatar
        var loginAvatarInterval = setInterval(function() {
            var association_img = document.getElementsByClassName('association')[0].firstElementChild;
            association_img.src = vscode_favico;
        }, 500);
        // login button
        GM_addStyle('.button_primary{background-color:#0E639C !important;border-color:#0E639C !important}');
        GM_addStyle('.button_default{background-color:#333333 !important;color:white !important}');
        GM_addStyle('.waiting_confirm{background-color:#333333 !important;color:white !important}');
        // qr code
        GM_addStyle('.sub_title{display:none}');
        GM_addStyle('.sub_desc{display:none}');
        GM_addStyle('.login_box .avatar .action{background-color:#333333 !important;color:white !important}');
    }


    //////////////////////////////
    // left panel
    /////////////////////////////
    // change panel width
    GM_addStyle('.panel{background-color:#252526;width:220px}');
    // hide download link
    GM_addStyle('.download_entry{display:none}');
    // change my info
    // hide avatar and name first
    GM_addStyle('.header .avatar .img{display:none}');
    GM_addStyle('.header .info .nickname .display_name{display:none}');
//     for (let i = 0; i < document.getElementsByClassName('avatar').length; i++) {
//         console.log(document.getElementsByClassName('avatar').length + ' found');
//         console.log(document.getElementsByClassName('avatar')[i].firstElementChild.src);
//     }
   var headerAvatarInterval = setInterval(function() {
        var nickname = document.getElementsByClassName('nickname')[0].firstElementChild;
        if (checkHeaderAvatar() && nickname.innerHTML === vscode_name) {
            // if successfully changed, show avatar and name
            GM_addStyle('.header .avatar .img{display:block;width:27px;height:27px}');
            GM_addStyle('.header .info .nickname .display_name{display:inline-block;width:auto}');
        }
        setHeaderAvatar();
        nickname.innerHTML = vscode_name;
    }, 500);

    // dropdown menu
    GM_addStyle('.dropdown_menu{background-color:#333333;border-color:#414141}');
    GM_addStyle('.dropdown_menu li a{border-bottom-color:#414141;color:white}');
    GM_addStyle('.dropdown_menu li a:hover{background-color:#37373D}');

    // hide search bar
    GM_addStyle('#search_bar{display:none}');
    // hide tabs
    GM_addStyle('.tab{display:none}');
    // chat items
    GM_addStyle('.chat_item{padding:6px 20px 6px;border-bottom-color:#414141}');
    GM_addStyle('.chat_item.active{background:#37373D}');
    // hide avatar in chat list
    GM_addStyle('.chat_item .avatar .img{display:none}');
    // hide msg digest in chat list
    GM_addStyle('.chat_item .info .msg{display:none}');
    // hide msg timestamp in chat list
    GM_addStyle('.chat_item .ext{display:none}');
    // change red dot to blue dot
    GM_addStyle('.web_wechat_reddot{background:url(' + bg_img_url + ') no-repeat;background-position:-473px -380px}');
    GM_addStyle('.web_wechat_reddot_middle{background:url(' + bg_img_url + ') no-repeat;background-position: -451px -380px}');
    // hide emoji in chat names
    GM_addStyle('.emoji{display:none}');
    // move chat list up
    GM_addStyle('.nav_view{top:64px !important}');


    //////////////////////////////////////////
    // chat area
    /////////////////////////////////////////
    // more compact messages
    GM_addStyle('.message{margin-bottom:0}');
    // hide header in chat
    GM_addStyle('.chat .box_hd{display:none}');
    // chat area color
    GM_addStyle('#chatArea{background-color:#1E1E1E;color:white}');
    GM_addStyle('.bubble{background-color:#1E1E1E !important;margin:3px 10px}'); // more compact messages
    GM_addStyle('.message_system{margin:0 auto}'); // more compact messages
    GM_addStyle('.bubble.bubble_primary.right.arrow_primary:before, .bubble.bubble_primary.right:after{border-left-color:#0E639C}');
    GM_addStyle('.bubble_cont .app{background-color:#2D2D2D;padding:8px;margin:0 5px;max-width:500px}');
    GM_addStyle('.bubble_cont .app .title{color:white}');
    GM_addStyle('.bubble_cont .app .cover{display:none}');
    GM_addStyle('.bubble_cont .plain{padding:8px}'); // more compact messages
    GM_addStyle('.bubble_cont .picture{padding:0 8px}'); // more compact messages
    GM_addStyle('.bubble:after, .bubble:before{top:12px}');// adjust message triangle
    // chat reply box
    GM_addStyle('.chat .box_ft{border-top-color:#414141}');
    GM_addStyle('.chat .box_ft .action{background-color:#1E1E1E !important}');
    GM_addStyle('.exp_hd{background-color:#333333}');
    GM_addStyle('.exp_bd{background-color:#252526}');
    GM_addStyle('.exp_hd_item{background-color:#333333}');
    GM_addStyle('.exp_hd_item a{color:white}');
    GM_addStyle('.exp_hd_item.active{background-color:#252526}');
    GM_addStyle('.expression{border-color:#414141}');
    GM_addStyle('.expression:after{border-top-color:#252526}');
    GM_addStyle('.qq_face a{border-bottom-color:#414141;border-right-color:#414141}');
    GM_addStyle('.emoji_face a{border-bottom-color:#414141;border-right-color:#414141}');
    // hide avatar in chat
    GM_addStyle('.message .avatar{display:none}');
    // hide send button
    GM_addStyle('.btn_send{display:none}');
    // hide copyright
    GM_addStyle('.main .copyright{display:none}');


    //////////////////////////////////////////////////
    // dialog
    /////////////////////////////////////////////////
    GM_addStyle('.ngdialog.default .ngdialog-content{background-color:#252526;color:white}');
    GM_addStyle('.transpond-dialog .dialog_hd .title{background-color:#252526}');
    GM_addStyle('.selector{background-color:#2D2D2D}');
    GM_addStyle('.selector .input_box .input{background-color:#2D2D2D;color:white}');
    GM_addStyle('.chooser .contact_title{background-color:#2D2D2D}');
    GM_addStyle('.chooser .contact_item{background-color:#252526;border-bottom-color:#414141}');
    GM_addStyle('.chooser .active .contact_item{background-color:#2D2D2D;border-bottom-color:#414141}');
    GM_addStyle('.transpond-dialog .dialog_ft .button_primary{background-color:#0E639C}');


    //////////////////////////////////////////////////
    // clear intervals after 10 mins
    /////////////////////////////////////////////////
    setTimeout(function() {
        clearInterval(loginAvatarInterval);
        console.log('cleared interval: loginAvatarInterval');
        clearInterval(headerAvatarInterval);
        console.log('cleared interval: headerAvatarInterval');
    }, 600000);


    ///////////////////////////////////////////////////////////
    // functions
    //////////////////////////////////////////////////////////
    function setHeaderAvatar() {
/*         var avatars = document.getElementsByClassName('avatar');
        for (let i = 0; i < avatars.length; i++) {
            avatars[i].firstElementChild.src = vscode_favico;
        } */

        var avatar = document.querySelector(".header .avatar .img");
        avatar.src = vscode_favico;
    }

    function checkHeaderAvatar() {
/*         var avatars = document.getElementsByClassName('avatar');
        console.log(avatars.length + ' avatars found');

        for (let i = 0; i < avatars.length; i++) {
            if (avatars[i].firstElementChild === undefined) {
                continue;
            } else {
                if (avatars[i].firstElementChild.src != vscode_favico) {
                    return false;
                }
            }
        } // for
        return true; */

        var avatarImg = document.querySelector(".header .avatar .img");
        if (avatarImg.src != vscode_favico) {
            return false;
        }
        return true;
    }
})();