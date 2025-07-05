// ==UserScript==
// @name         Simplified Youdao
// @namespace    https://github.com/bensgith/userscripts
// @version      0.0.3
// @description  Remove ads, adjust for displayed on side bar
// @author       Benjamin L.
// @match        https://www.youdao.com/*
// @icon         https://shared-https.ydstatic.com/images/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    
    GM_addStyle(`
        /* search page */
        .header_container,
        .rollNumber-with-banner,
        .product-container,
        .footer_container,
        .center_container .contianer {
            display: none;
        }
        .content-cell {
            background: none !important;
        }
        .input_con {
            width: 100% !important;
        }
        #homeLayout,
        .center_container {
            min-width: unset !important;
            width: 95% !important;
        }
        .index_page .content {
            padding-top: 20px !important;
            margin: 0 auto 322px !important;
        }

        /* result page */
        .top-banner-wrap,
        .top_nav-con,
        .dict_indexes-con {
            display: none;
        }
        #searchLayout,
        .search_page .fixed-search {
            min-width: unset !important;
        }
        .search_page .fixed-wrap {
            margin: 0 auto 0 !important;
        }
        .search_page .search_result-dict {
            width: 100% !important;
        }
        .search_page .small-logo {
            margin: 8px 5px 0 0 !important;
        }
        .search_page .lang_select-con {
            width: 80% !important;
        }
        .search_page .input_con-fixed {
            box-shadow: unset !important;
            padding-bottom: 10px !important;
        }
        .search_page #search_input {
            font-size: 16px !important;
            padding-left: 8px !important;
        }
        .search_page .lang_select,
        .search_page .multiselect__content-wrapper {
            width: 65px !important;
        }
        .search_page .multiselect__select {
            right: -2px !important;
        }
        .search_page .lang_select .multiselect__tags {
            padding: 8px 8px 0 8px !important;
        }
        .search_page .lang_select .multiselect__single {
            font-size: 16px !important;
        }
        .search_page .multiselect__option {
            font-size: 16px !important;
            padding: 6px !important;
            min-height: unset !important;
        }
    `);
})();