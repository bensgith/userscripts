// ==UserScript==
// @name         Feedly with VS Code Style
// @namespace    https://github.com/bensgith/tampermonkey-scripts
// @version      0.2.2
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
    //var logo_links = document.getElementsByClassName('LeftnavListRow');
    var logo_links = document.querySelectorAll('#feedlyChrome div .Leftnav');
    console.log(logo_links.length + ' elements found');
    for (let i = 0; i < logo_links.length; i++) {
        //console.log(logo_links[i].nodeName + ': ' + logo_links[i].src);
        console.log(logo_links[i].nodeName);
    }

    // CSS style
    var css = `
        .home, #headerBarFX h2 {
            color:white;
        }

        .TopHeaderBar {
            display:none;
        }

        #headerBarFX {
            border-bottom-color:#414141;
        }

        #feedlyFrame, #feedlyPageHolderFX, #headerBarFX {
            background-color:#1E1E1E;
        }

        .EntryEngagement--hot, .fx .InterestingMetadata {
            color:#007ACC;
        }

        /* article title */
        .EntryTitle, .Article__title {
            color: white;
        }
        /* article title, collapsed, unread */
        .swkr6ktlVGRSyOHsfX0t {
            color: unset;
        }

        /* article body */
        .entryBody h1, .entryBody h2, .entryBody h3, .entryBody h4,
        .entryBody .content b, .entryBody .content p, .entryBody .content a,
        .entryBody, .entrySidebar {
            color:#D4D4D4;
        }

        :root, .theme--light {
            --semanticColorContentBold: #white;
            --semanticColorBorderLightest:#414141;
            --semanticColorBackgroundLightest:#333333;
            --semanticColorBackgroundLight:#252526;
            --semanticColorBackgroundStatesLightHover:#2A2D2E;
            --semanticColorBackgroundElevationMedium:#252526;
            --semanticColorBackgroundStatesElevationMediumHover:#04395E;
            --semanticColorContentAccent:#007ACC; /* VS Code blue */
            --semanticColorBorderAccent:#007ACC;
            --semanticColorContentStatesAccentHover:#007ACC;
            --semanticColorBorderStatesAccentHover:#007ACC;
            --semanticColorBackgroundElevationLight:#1E1E1E;
        }
    `
    GM_addStyle(css);
})();