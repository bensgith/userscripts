// ==UserScript==
// @name         Clean Blog Articles
// @namespace    https://github.com/bensgith/userscripts
// @version      0.2.4
// @description  Remove annoying side bars, comment blocks, ads, etc.
// @author       Benjamin L.
// @match        https://blog.csdn.net/*
// @match        https://www.cnblogs.com/*
// @match        https://www.reddit.com/*
// @match        https://juejin.cn/*
// @match        https://www.zhihu.com/*
// @match        https://www.baeldung.com/*
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
            #comment_form {
                display: none;
            }
            #main {
                max-width: 100%;
                margin: 20px;
            }
            #mainContent {
                flex: 0 1 100%;
                max-width: 100%;
                margin-right: 0px;
            }
            #centercontent {
                padding: 0px;
            }
        `);
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
    if (location.host === "www.zhihu.com") {
        GM_addStyle(`
            /* HIDDEN ELEMENTS */
            .css-1qyytj7, /* right side column */
            .Pc-Business-Card-PcTopFeedBanner, /* banner ad. */
            .AppHeader-userInfo,
            .Pc-word-new, /* timeline ad. */
            .Pc-feedAd-new /* timeline ad. */ {
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
            .Topstory-container,
            .Topstory-container .Topstory-mainColumn {
                padding: 0px;
                width: 100%;
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
            .Question-main {
                padding: 0px;
            }
            .Question-main .Question-mainColumn {
                padding: 0px;
                width: 100%;
            }
            .Question-main .ListShortcut {
                width: 100%;
            }
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
     
            /* PROFILE PAGE */
            .Profile-main {
                width: 100%;
                padding: 0px;
            }
            .Profile-mainColumn {
                width: 100%;
            }
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
        `);
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
})();