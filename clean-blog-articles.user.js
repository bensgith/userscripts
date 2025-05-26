// ==UserScript==
// @name         Clean Blog Articles
// @namespace    https://github.com/bensgith/userscripts
// @version      0.3.1
// @description  Remove annoying side bars, comment blocks, ads, etc.
// @author       Benjamin L.
// @match        https://blog.csdn.net/*
// @match        https://www.cnblogs.com/*
// @match        https://www.reddit.com/*
// @match        https://juejin.cn/*
// @match        https://www.zhihu.com/*
// @match        https://zhuanlan.zhihu.com/*
// @match        https://www.baeldung.com/*
// @match        https://*.medium.com/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    // csdn.net
    if (location.host === "blog.csdn.net") {
        GM_addStyle(`
            .passport-login-container,
            .passport-login-tip-container,
            .more-toolbar,
            .recommend-box,
            .csdn-side-toolbar,
            .blog_container_aside,
            #csdn-toolbar .toolbar-menus,
            #csdn-toolbar .toolbar-container .toolbar-container-right,
            #rightAside {
                display: none;
            }
            body,
            #csdn-toolbar .toolbar-container {
                min-width: auto;
            }
            #csdn-toolbar .toolbar-inside.exp3 .toolbar-container-middle .toolbar-search {
                max-width: none;
            }
            main,
            .container {
                width: 100% !important;
                margin-right: unset !important;
            }
        `);

        function enableCopy(callback, delay) {
            setTimeout(callback, delay)
        }

        enableCopy(() => {
            // 修改复制按钮
            document.querySelectorAll('.hljs-button').forEach((e) => {
                e.setAttribute('data-title', '点击复制')
                e.classList.remove('signin')
                e.removeAttribute('onclick')
                e.addEventListener('click', () => {
                    e.setAttribute('data-title', ' ')
                    navigator.clipboard.writeText(e.parentNode.innerText)
                    e.setAttribute('data-title', '复制成功')
                    setTimeout(() => e.setAttribute('data-title', '点击复制'), 1200)
                })
            })

            // 复制功能
            document.querySelector('.blog-content-box').addEventListener(
                'copy',
                (e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    navigator.clipboard.writeText(window.getSelection().toString())
                },
                true
            )
            document.addEventListener(
                'keydown',
                (e) => {
                    if (e.ctrlKey && e.keyCode == 67) { // Ctrl+C
                        e.stopPropagation()
                        e.preventDefault()
                        navigator.clipboard.writeText(window.getSelection().toString())
                    }
                },
                true
            )
            document.oncopy = null
            window.oncopy = null
        }, 500)
    }

    // cnblogs.com
    if (location.host === "www.cnblogs.com") {
        GM_addStyle(`
            #leftcontent,
            #sideBar,
            #comment_form,
            #div_digg {
                display: none;
            }
            #home {
                width: fit-content;
            }
            #main {
                margin: auto 10px;
            }
            #mainContent {
                flex: 0 1 100%;
                max-width: 100%;
                margin: auto 0px;
            }
            #mainContent .forFlow {
                margin: 0px;
            }
            #centercontent {
                padding: 0px;
            }
        `);

        var cssForWideScreen =`
            #main {
                width: 1200px;
            }`;

        var cssForPortraitScreen =`
            #home {
                min-width: unset;
            }
            #main {
                min-width: fit-content;
            }`;

        adjustWidthByWindowSize(cssForWideScreen, cssForPortraitScreen);
    }

    // reddit.com
    if (location.host === "www.reddit.com") {
        GM_addStyle(`
            .promotedlink,
            #right-sidebar-container {
                display: none;
            }
            .main-container {
                grid-template-columns: 1fr !important;
            }
        `);
    }

    // juejin.cn
    if (location.host === "juejin.cn") {
        GM_addStyle(`
            #sidebar-container,
            .article-suspended-panel,
            .comment-box-common,
            .recommended-area,
            .bottom-login-guide {
                display: none;
            }
            .main-area {
                width: auto !important;
                margin: 20px;
            }

            .container.main-container {
                width: auto !important;
                max-width: 100% !important;
            }
            .column-view {
                padding-bottom: 0rem !important;
            }
        `);
    }

    // zhihu.com
    if (location.host === "www.zhihu.com" || location.host === "zhuanlan.zhihu.com") {
        GM_addStyle(`
            html {
                --MapLink: var(--flag-light, #6eaaff) var(--flag-dark, #5271b0); /* 展开全文、展开阅读全文 */
                --MapInfo: var(--flag-light, #3a88f5) var(--flag-dark, #558eff); /* 赞同 */
            }

            /* HIDDEN ELEMENTS */
            .css-1qyytj7, /* right side column */
            .Pc-Business-Card-PcTopFeedBanner, /* banner ad. */
            .AppHeader-userInfo,
            .Pc-feedAd-container,
            .Pc-word-new, /* timeline ad. */
            .Pc-feedAd-new, /* timeline ad. */
            .Topstory-mainColumn .TopstoryItem--advertCard,
            .TopstoryMain .TopstoryItem--advertCard {
                display: none;
            }
    
            /* MAIN PAGE */
            a {
                color: #D4D4D4 !important;
            }
            body,
            .AppHeader,
            .Card,
            .ContentItem-actions {
                background-color: #1E1E1E;
            }
            .Card {
                color: #D4D4D4;
            }
            .Topstory-tabs {
                border-bottom: 1px solid #ccc;
            }
            .Topstory-mainColumnCard .Card:not(.Topstory-tabCard) {
                border-bottom: 1px solid #333;
            }
    
            /* QUESTION PAGE */
            .QuestionHeader,
            .QuestionHeader .QuestionHeader-title,
            .NumberBoard-itemValue,
            .CommentContent,
            .css-r4op92 /* comment section title */ {
                color: #D4D4D4;
            }
            .QuestionHeader,
            .QuestionHeader .QuestionHeader-footer {
                background-color: #1E1E1E;
            }
            .QuestionMainAction {
                border-radius: 10px;
                background-color: #292929;
            }
            .AuthorInfo {
                max-width: unset;
            }
            .List-header {
                border-bottom: 1px solid #ccc;
            }
            .List-item+.List-item:after {
                border-bottom: 1px solid #333;
            }
            .css-1yl6ec1 code {
                background-color: #333;
            }
            /* subscription card in post */
            .css-34mzkj {
                background-color: #292929;
            }
            .css-573q3,
            .css-oir6xv {
                color: #fff;
            }
     
            /* PROFILE PAGE */
            .ProfileHeader-wrapper {
                background-color: #1e1e1e;
            }
            .ProfileHeader-detail {
                color: #fff;
            }
            /* search */
            .css-3f82om {
                background-image: none;
            }
            .css-zduc1z {
                background-color: #1e1e1e;
            }

            /* SEARCH PAGE */
            .SearchTabs {
                background-color: #1e1e1e !important;
            }
            .css-5ug749 {
                background-color: #292929;
            }
     
            /* ALL PAGES */
            /* comment area */
            .css-14zbeoe,
            .css-u76jt1 {
                border: 1px solid #333;
            }
            .FeeConsultCard,
            .css-1yl6ec1 .LinkCard.new,
            .css-1yl6ec1 .LinkCard.new:hover,
            .GoodsRecommendCard {
                background-color: #333;
            }
            .FeeConsultCard>div:first-of-type>div:first-child,
            .css-1yl6ec1 .LinkCard.new .LinkCard-title,
            .GoodsRecommendCard .CPSCommonCard-title {
                color: #fff;
            }
            /* reply box */
            .css-1e7fksk,
            .css-70t8h2,
            .css-kt4t4n {
                background-color: #1e1e1e;
            }

            /* ZHUANLAN */
            .ColumnPageHeader {
                background-color: #292929;
            }
            .Post-Row-Content .Post-Row-Content-left {
                width: 100%;
                background-color: #1e1e1e;
                color: #fff;
            }
            /* code block */
            .css-1yl6ec1 pre,
            .css-1yl6ec1 pre code {
                background: #232326;
                color: #00baba;
            }
        `);

        var cssForWideScreen =`
            .Topstory-container,
            .Topstory-container .Topstory-mainColumn,
            .Question-main,
            .Question-main .Question-mainColumn,
            .Profile-main,
            .Profile-mainColumn {
                padding: 0px;
                width: 1200px;
            }
        `

        var cssForPortraitScreen =`
            .Topstory-container,
            .Topstory-container .Topstory-mainColumn,
            .Question-main,
            .Question-main .Question-mainColumn,
            .Profile-main,
            .Profile-mainColumn {
                padding: 0px;
                width: 100%;
            }
        `

        adjustWidthByWindowSize(cssForWideScreen, cssForPortraitScreen);
    }

    // baeldung.com
    if (location.host === "www.baeldung.com") {
        GM_addStyle(`
            .aelzmn, /* ad blocker box */
            .sidebar,
            .topAdContainer,
            .before-post-widgets,
            .after-post-widgets,
            #footer,
            #fs-sticky-footer {
                display: none !important;
            }
            #main {
                width: 100% !important;
            }
        `);
    }

    // medium.com
    if (location.host.endsWith("medium.com")) {
        GM_addStyle(`
            .uk, /* member promotion bar */
            .st /* member promotion bar */
            {
                display: none;
            }

            body svg path, /* small icons */
            .kk svg path, /* small icons */
            .aw path, /* logo */
            .bc path /* search box arrow */
            {
                fill: #fff;
            }

            .c, /* artical */
            .bw, /* more recommendation section */
            .dx /* tags */
            {
                background-color: #212121;
            }
            .bk {
                color: #f3f3f3; /* artical font */
            }

            .bb, .pr, /* code block */
            .cx /* inline code */
            {
                background-color: #303030;
            }
            .ph {
                border: 1px solid #676767; /* code block */
            }
            .hljs-deletion {
                background-color: unset; /* code block font */
            }
            div[role='separator'] .nh {
                background-color: #fff; /* separator */
            }
            textarea,
            #searchResults, /* search box */
            .on::after /* search box triangle */
            {
                background-color: #303030;
                color: #fff;
            }
            /* cancel,respond button */
            .wh:hover {
                color: black;
                background-color: #fff;
            }
        `);

        let cssForWideScreen =`
            .ez {
                max-width: 1200px;
            }`;

        let cssForPortraitScreen =`
            .ez {
                max-width: 100%;
            }`;

        adjustWidthByWindowSize(cssForWideScreen, cssForPortraitScreen);
    }

    function adjustWidthByWindowSize(cssForWideScreen, cssForPortraitScreen) {
        if (window.innerWidth >= 1500) {
            GM_addStyle(cssForWideScreen);
        } else {
            GM_addStyle(cssForPortraitScreen);
        }
    }
})();