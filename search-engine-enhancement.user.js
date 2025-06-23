// ==UserScript==
// @name         Search Engine Enhancment
// @namespace    https://github.com/bensgith/userscripts
// @version      0.0.1
// @description  More readable for portrait / wide screen
// @author       Benjamin L.
// @match        https://www.google.com.hk/*
// @match        https://cn.bing.com/*
// @match        https://www.baidu.com/*
// @icon         https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // google.com
    if (location.host.startsWith("www.google.com")) {
        if (document.querySelector("#rhs")) {
            GM_addStyle(`
                /* search result */
                #rcnt {
                    grid-template-columns: 8px repeat(19,35px) minmax(0,230px);
                }
            `);
        } else {
            GM_addStyle(`
                /* AI overview */
                .UxeQfc {
                    grid-template-columns: minmax(0,1fr) 0px !important;
                    column-gap: 10px !important;
                }
                .LT6XE,
                .F0OfWd {
                    max-width: unset !important;
                }
                /* search result */
                #rcnt {
                    column-gap: 13px;
                }
                #center_col {
                    grid-column: 2/span 17;
                }
            `);
        }
    }

    // bing.com
    if (location.host === "cn.bing.com") {
        GM_addStyle(`
            :root {
                --lgutter: 20px;
            }
        `);
    }

    // baidu.com
    if (location.host === "www.baidu.com") {
        GM_addStyle(`
            #container.sam_newgrid {
                margin-left: 18px;
                width: 1024px;
            }
            #s_tab {
                padding-left: 18px !important;
            }
            .wrapper_s .tag-wrapper_1sGop {
                margin-left: 10px;
                width: 1024px;
            }

            #content_left,
            .new-pmd.c-container {
                width: 730px;
            }
        `);
    }

})();