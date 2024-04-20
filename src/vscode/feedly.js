// ==UserScript==
// @name         Feedly with VS Code Style
// @namespace    https://github.com/bensgith/tampermonkey-scripts
// @version      0.1.0
// @description  Change style to VS Code-alike
// @author       Benjamin L
// @match        https://feedly.com/*
// @icon         https://feedly.com/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let vscode_favico = 'https://code.visualstudio.com/favicon.ico';
    let vscode_name = 'Feedly - VS Code';


    /////////////////////////////////
    // favorite icon and tab title
    //////////////////////////////////
    var shortcut_icon = document.getElementsByTagName('link')[0];
    shortcut_icon.href = vscode_favico;
    // set title every second
    setInterval(() => {
        var title = document.getElementsByTagName('title')[0];
        title.innerHTML = vscode_name;
    }, 1000);


    // change logo
    var logo_links = document.getElementsByClassName('LeftnavDock__button');
    console.log(logo_links.length + ' elements found');
    for (let i = 0; i < logo_links.length; i++) {
        console.log(logo_links[i].nodeName);
    }

/*     logo_link1.firstElementChild.remove();
    GM_addElement(logo_link1, 'img', {
        src: vscode_favico,
        width: '30px',
        height: '30px',
        style: 'margin:0 0 0 25px'
    }); */

    // left navigation dock
    //GM_addStyle('.LeftnavDock {background-color:#333333}'); // var(--semanticColorBackgroundLightest)

    // left navigation list
    //GM_addStyle('.LeftnavList {background-color:#252526}');

    GM_addStyle('.home {color:white}');

    // right content panel
    //GM_addStyle('.TopHeaderBar {background-color:#1E1E1E;border-bottom-color:#414141}');
    GM_addStyle('.TopHeaderBar {display:none}');

    GM_addStyle('#headerBarFX {background-color:#1E1E1E;border-bottom-color:#414141}');
    GM_addStyle('#headerBarFX h2 {color:white}');
    GM_addStyle('#feedlyFrame {background-color:#1E1E1E}');
    GM_addStyle('#feedlyPageHolderFX {background-color:#1E1E1E}');
    GM_addStyle('.EntryEngagement--hot {color:#007ACC}');
    GM_addStyle('.fx .InterestingMetadata {color:#007ACC}');
    GM_addStyle('.EntryTitle {color:white}');
    GM_addStyle('.Article__title {color:white}');



    var style = `
        :root, .theme--light {
            --semanticColorContentBold: #white;
            --semanticColorBorderLightest:#414141;
            --semanticColorBackgroundLightest:#333333;
            --semanticColorBackgroundLight:#252526;
            --semanticColorBackgroundStatesLightHover:#2A2D2E;
            --semanticColorBackgroundElevationMedium:#252526;
            --semanticColorBackgroundStatesElevationMediumHover:#04395E;
            --semanticColorContentAccent:#007ACC;
            --semanticColorBorderAccent:#007ACC;
            --semanticColorContentStatesAccentHover:#007ACC;
            --semanticColorBorderStatesAccentHover:#007ACC;
            --semanticColorBackgroundElevationLight:#1E1E1E;
        }
    `
    GM_addStyle(style);


})();