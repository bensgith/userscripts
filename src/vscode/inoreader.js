// ==UserScript==
// @name         Inoreader with VS Code Style
// @namespace    https://github.com/bensgith/tampermonkey-scripts
// @version      0.1.2
// @description  Change style to VS Code-alike
// @author       Benjamin L
// @match        https://www.inoreader.com/*
// @icon         https://www.inoreader.com/favicon.ico?v=8
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let vscode_favico = 'https://code.visualstudio.com/favicon.ico';
    let vscode_name = 'Inoreader - VS Code';


    /////////////////////////////////
    // favorite icon and tab title
    //////////////////////////////////
    var shortcut_icon = document.getElementsByTagName('link')[5];
    shortcut_icon.href = vscode_favico;
    // set title every second
    setInterval(() => {
        var title = document.getElementsByTagName('title')[0];
        title.innerHTML = vscode_name;
    }, 1000);


    ////////////////////////////////////////
    // top bar
    //////////////////////////////////////
    GM_addStyle('#sb_reading_part {background-color:#323233;box-shadow:none;}');
    GM_addStyle('#sb_rp_heading {color:white}');
    GM_addStyle('.sb_rp_controls {display:none}');


    //////////////////////////////////////
    // left tree panel
    /////////////////////////////////////
    GM_addStyle('#tree_pane, .tree_ad {background-color:#333333;color:white}');


    //////////////////////////////////////
    // reader panel
    /////////////////////////////////////
    // basic
    GM_addStyle('#reader_pane {background-color:#1E1E1E;color:white}');
    GM_addStyle('.article_unreaded, .view_style_0 .article_unreaded {background-color:#1E1E1E}');
    GM_addStyle('.reader_pane_view_style_0 .article_title_wrapper {color:white}');
    GM_addStyle('.ar {border-bottom-color:#414141}');
    // expanded article
    GM_addStyle('.article_full_contents {background-color:#1E1E1E;color:white}');
    GM_addStyle('.reader_pane_view_style_1 .article_subscribed, .reader_pane_view_style_4 .article_subscribed {background-color:#1E1E1E}');
})();