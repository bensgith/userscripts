// ==UserScript==
// @name         Inoreader with VS Code Style
// @namespace    https://github.com/bensgith/tampermonkey-scripts
// @version      0.2.1
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


    // CSS style
    var css = `
        /* top bar */
        #sb_reading_part {
            background-color:#323233;
            box-shadow:none;
        }

        #sb_rp_heading {
            color:white;
        }
        
        .sb_rp_controls {
            display:none;
        }

        /* left tree panel */
        #tree_pane, .tree_ad {
            background-color:#333333;
            color:white;
        }

        /* reader panel - collapsed items */
        #reader_pane .article_unreaded:hover,
        #reader_pane .article_current_collapsed,
        .reader_pane_view_style_0 .article:hover {
            background-color:#37373D;
        }

        #reader_pane .article_title_wrapper,
        .article_full_contents {
            color:#D4D4D4;
        }

        .ar {
            border-bottom-color:#414141;
        }

        #reader_pane,
        #reader_pane .article_unreaded,
        .article_subscribed,
        .article_subscribed,
        .article_full_contents {
            background-color:#1E1E1E;
        }

        body.article_alignment_1 .reader_pane_view_style_0 .article_full_contents,
        .article_title,
        .article_content {
            width:1180px;
            max-width:1180px;
        }


        /* hide article footer */
        .article_full_contents .article_footer {
            display:none;
        }
    `
    GM_addStyle(css);
})();