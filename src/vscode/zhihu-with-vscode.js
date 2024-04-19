// ==UserScript==
// @name         ZhiHu with VS Code Style
// @namespace    https://github.com/bensgith/tampermonkey-scripts-vscode
// @version      0.3.1
// @description  Change style to VS Code-alike
// @author       Benjamin L
// @match        https://www.zhihu.com/*
// @icon         https://static.zhihu.com/heifetz/favicon.ico
// @grant        GM_addStyle
// @grant        GM_addElement
// ==/UserScript==

(function() {
    'use strict';

    let vscode_favico = 'https://code.visualstudio.com/favicon.ico';
    let vscode_name = 'ZhiHu - VS Code';

//     var links = document.getElementsByTagName('link');
//     GM_log(links.length);
//     for (let i = 0; i < links.length; i++) {
//         GM_log(links[i].rel);
//     };


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


    /////////////////////////////////
    // body
    ////////////////////////////////
    GM_addStyle('body{background-color:#333333}');
    GM_addStyle('a{color:#FFFFFF !important}');
    GM_addStyle('a:hover{color:#FFFFFF !important}');


    ///////////////////////////////////////
    // navigation header
    ///////////////////////////////////////
    // app header background
    GM_addStyle('.css-17rnw55{background-color:#333333;color:white}');

    // change logo
//     setInterval(function() {
//         var logo_link = document.getElementsByClassName('AppHeader-inner')[0].firstElementChild;
//         console.log(logo_link.firstElementChild.tagName);
//         if (logo_link.firstElementChild.tagName == 'svg') {
//             logo_link.firstElementChild.remove();
//             GM_addElement(logo_link, 'img', {
//                 src: vscode_favico,
//                 width: '35px',
//                 height: '35px',
//                 style: 'margin:0 0 0 25px'
//             });
//         }
//     }, 1000);
    var logo_link1 = document.getElementsByClassName('AppHeader-inner')[0].firstElementChild;
    logo_link1.firstElementChild.remove();
    GM_addElement(logo_link1, 'img', {
        src: vscode_favico,
        width: '30px',
        height: '30px',
        style: 'margin:0 0 0 25px'
    });

    // app header tabs link
    var app_header_tablist = document.getElementsByClassName('AppHeader-Tabs')[0];
    GM_addElement(app_header_tablist, 'li', {
        role: 'tab',
        class: 'Tabs-item AppHeader-Tab Tabs-item--noMeta',
        id: 'test-tab'
    });
    GM_addElement(document.getElementById('test-tab'), 'a', {
        class: 'Tabs-link AppHeader-TabsLink css-1fb8pjf',
        tabindex: '0',
        href: '#',
        textContent: '民主'
    });
    var tabs_links = app_header_tablist.children;
    var vscode_menus = ['File', 'Edit', 'Selection', 'View', 'Go'];
    if (tabs_links.length <= vscode_menus.length) {
        for (let i = 0; i < tabs_links.length; i++) {
            tabs_links[i].firstElementChild.text = vscode_menus[i];
            //console.log(tabs_links[i].firstElementChild.text + ' ' + vscode_menus[i]);
        }
    }

    // search bar
    GM_addStyle('.SearchBar{max-width:670px;}');
    GM_addStyle('.SearchBar-askButton{display:none}');
    GM_addStyle('.SearchBar-input{background-color:#3C3C3D !important;}');
    GM_addStyle('input.Input{color:white}');

    // hide user info
    GM_addStyle('.AppHeader-userInfo{display:none}');
    //GM_addStyle('.Tabs-link{color:white}');

    // hide right panel
    GM_addStyle('.css-1qyytj7{display:none}');

    // article cards content
    GM_addStyle('.Card{background-color:#1E1E1E;color:white}');
    // article cards bottom actions background color
    GM_addStyle('.ContentItem-actions{background-color:#1E1E1E}');


    /////////////////////////////////////
    // buttons
    ////////////////////////////////////
    // button blue
    GM_addStyle('.Button--blue{background-color:#0E639C !important;color:white !important}');
    // vote button
    GM_addStyle('.VoteButton{background-color:#0E639C;color:white}');
    // collapse comment button
    GM_addStyle('.css-1503iqi{background-color:#0E639C;color:white}');
    GM_addStyle('.css-1503iqi:hover{background-color:#0E639C;color:white}');
    // corner button on the right bottom
    GM_addStyle('.CornerButton{background-color:#0E639C;color:white}');


    /////////////////////////////
    // comments
    ////////////////////////////
    // comment text editor
    GM_addStyle('.css-kt4t4n{background-color:#1E1E1E}');
    GM_addStyle('.css-1jpzztt{color:white}');
    // hide avatar
    GM_addStyle('.Avatar{display:none}');
    // reply content in reply box in comments
    GM_addStyle('.css-7wvdjh{background-color:#1E1E1E}');
    // reply list in reply box in comments
    GM_addStyle('.css-1e7fksk{background-color:#1E1E1E}');


    ///////////////////////////////
    // top story container
    //////////////////////////////
    if (document.getElementsByClassName('Topstory').length > 0) {
        GM_addStyle('.Topstory-container{width:1050px}');
        GM_addStyle('.Topstory-mainColumn{width:1050px}');

        // hide page header when scrolling down
        GM_addStyle('.PageHeader{display:none}');
        GM_addStyle('.Topstory-tabCard{display:none}');

        // story item saperate line
        GM_addStyle('.Topstory-mainColumnCard .Card{border-bottom-color:#414141 !important}');

        // hide "Comments, Share, Favorite, Like, More" options
        GM_addStyle('.Button--withIcon{display:none}');

        // remove ad
        GM_addStyle('.TopstoryItem--advertCard{display:none}');
    }



    /////////////////////////////////////////////////////
    // Question details page
    ///////////////////////////////////////////////////
    if (document.getElementsByClassName('QuestionPage').length > 0) {
        // question header background
        GM_addStyle('.QuestionHeader{background-color:#1E1E1E;color:white}');
        GM_addStyle('.QuestionHeader-title{color:white}');
        GM_addStyle('.NumberBoard-itemValue{color:white}');
        GM_addStyle('.QuestionHeader-footer{background-color:#1E1E1E;color:white}');

        GM_addStyle('.Question-mainColumn{width:1000px}');

        // hide header
        GM_addStyle('.PageHeader{display:none}');

        // hide ad
        GM_addStyle('.Pc-word{display:none}');

        // answers ordering option
        GM_addStyle('.InputButton{background-color:#1E1E1E}');
        // author info
        GM_addStyle('.AuthorInfo{max-width:none}');
        GM_addStyle('.AuthorInfo-content{margin-left:0}');
        // hide reward option
        GM_addStyle('.Reward{display:none}');
        // article separator line
        GM_addStyle('.List-item+.List-item:after{border-bottom-color:#414141}');
    }


    /////////////////////////////////////////////////////
    // Search result page
    ///////////////////////////////////////////////////
    if (document.getElementsByClassName('Search-container').length > 0) {
        // search tabs
        GM_addStyle('.SearchTabs{background-color:#333333;display:none}');
        // right side panel
        GM_addStyle('.css-knqde{display:none}');
        // main column
        GM_addStyle('.Search-container{width:1050px}');
        GM_addStyle('.SearchMain{width:1050px}');
        // hide page header when scrolling down
        GM_addStyle('.PageHeader{display:none}');
    }

})();