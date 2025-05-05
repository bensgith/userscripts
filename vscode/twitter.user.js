// ==UserScript==
// @name         X with VS Code Style
// @namespace    https://github.com/bensgith/userscripts
// @version      0.0.3
// @description  try to take over the world!
// @author       Benjamin L
// @match        https://x.com/home*
// @icon         https://abs.twimg.com/favicons/twitter.3.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let vscode_favico = 'https://code.visualstudio.com/favicon.ico';
    let vscode_name = 'X - VS Code';


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


    var css = `
        .r-1hycxz,
        .r-5wli1b,
        .r-1jocfgc {
            display: none;
        }

        /* left side menu */
        .r-o96wvk {
            width: 67px;
        }
        /* left side menu alignment */
        .r-obd0qt {
            align-items: flex-start;
        }
        /* menu icon */
        .r-15zivkp {
            margin-left: 19px;
        }
        /* logo */
        .r-1vvnge1 {
            padding-left: 0px;
        }
        /* Post button */
        .r-1fkl15p {
            padding-left: 20px;
            padding-right: 20px;
        }


        /* home timeline column */
        .r-113js5t {
            width: 1515px;
        }
        /* home timeline content */
        .r-1ye8kvj {
           width: 930;
           max-width: 930px;
        }
    `
    GM_addStyle(css);
})();