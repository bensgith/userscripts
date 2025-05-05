// ==UserScript==
// @name         ZhiHu with VS Code Style
// @namespace    https://github.com/bensgith/userscripts
// @version      0.4.3
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


    // change logo
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
        href: '//www.zhihu.com/people/benbxl',
        textContent: '民主'
    });
    var tabs_links = app_header_tablist.children;
    var vscode_menus = ['File', 'Edit', 'Selection', 'View', 'Go'];
    if (tabs_links.length <= vscode_menus.length) {
        for (let i = 0; i < tabs_links.length; i++) {
            tabs_links[i].firstElementChild.text = vscode_menus[i];
        }
    }

    ///////////////////////////////
    // top story container
    //////////////////////////////
    if (document.getElementsByClassName('Topstory').length > 0) {
        var cssTopstory = `
            /* top story container */
            .Topstory-tabCard,
            .TopstoryItem--advertCard,
            .Button--withIcon /* "Comments, Share, Favorite, Like, More" options */ {
                display: none;
            }
            .Topstory-container,
            .Topstory-mainColumn {
                width: 1050px;
            }
            .Topstory-mainColumnCard .Card {
                border-bottom-color: #414141 !important;
            }
        `;
        GM_addStyle(cssTopstory);
    }

    /////////////////////////////////////////////////////
    // Question details page
    ///////////////////////////////////////////////////
    if (document.getElementsByClassName('QuestionPage').length > 0) {
        var cssQuestionPage = `
            /* question details page */
            .QuestionHeader-footer,
            .QuestionHeader-side,
            .Pc-word, /* advertisement */
            .Reward /* reward option */ {
                display: none;
            }
            .QuestionHeader,
            .QuestionHeader-footer {
                background-color: #1E1E1E;
                color: #D4D4D4;
            }
            .QuestionHeader-title,
            .NumberBoard-itemValue {
                color: white;
            }
            .Question-mainColumn {
                width: 1000px;
            }
            .QuestionHeader-main {
                width: unset;
                padding-left: 0;
            }
            .InputButton {
                background-color: #1E1E1E;
            }
            .AuthorInfo {
                max-width: none;
            }
            .AuthorInfo-content {
                margin-left: 0;
            }
            /* article separator line */
            .List-item+.List-item:after {
                border-bottom-color: #414141;
            }
            /* Yanxuan special column meta info */
            .KfeCollection-IntroCard-newStyle-mobile,
            .KfeCollection-IntroCard-newStyle-pc {
                background-color: #414141;
            }
        `;
        GM_addStyle(cssQuestionPage);
    }

    /////////////////////////////////////////////////////
    // Search result page
    ///////////////////////////////////////////////////
    if (document.getElementsByClassName('Search-container').length > 0) {
        var cssSearch = `
            /* Search result page */
            .SearchTabs,
            .css-knqde /* right side panel */ {
                display: none;
            }
            .Search-container,
            .SearchMain {
                width: 1050px;
            }
        `;
        GM_addStyle(cssSearch);
    }

    /////////////////////////////////////////////////
    // main page
    ////////////////////////////////////////////////
    var css = `
        /* common elements */
        body {
            background-color: #333333;
        }
        a,
        a:hover,
        input.Input {
            color: white !important;
        }


        /* navigation header */
        .PageHeader,
        .SearchBar-askButton,
        .AppHeader-userInfo,
        .FollowButton,
        .css-1qyytj7 /* right panel */ {
            display: none;
        }
        .css-17rnw55 /* app header background */ {
            background-color: #323233;
            color: white;
        }
        .SearchBar {
            max-width: 670px;
        }
        .SearchBar-input {
            background-color: #3C3C3D !important;
        }

        /* article common */
        .Card {
            background-color: #1E1E1E;
            color: #D4D4D4;
        }
        .ContentItem-actions {
            background-color: #1E1E1E;
        }
        .Button--blue {
            background-color: #0E639C !important;
            color: white !important;
        }
        .css-1503iqi, /* collapse comment button */
        .css-1503iqi:hover,
        .VoteButton,
        .CornerButton {
            background-color: #0E639C;
            color: white;
        }


        /* comments area */
        .Avatar {
            display: none;
        }
        .css-1jpzztt{
            color:#D4D4D4;
        }
        .css-kt4t4n,
        .css-7wvdjh, /* reply content in reply box in comments */
        .css-1e7fksk /* reply list in reply box in comments */ {
            background-color: #1E1E1E;
        }

        /* input box border in comments */
        .css-14zbeoe,
        .css-u76jt1 {
            border-color: #414141;
        }

        /* timeline font color in story topic */
        .css-13brsx3 {
            color: white;
        }

    `;
    GM_addStyle(css);
})();