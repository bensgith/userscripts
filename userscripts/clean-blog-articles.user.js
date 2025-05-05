// ==UserScript==
// @name         Clean Blog Articles
// @namespace    https://github.com/bensgith/mytoolbox
// @version      0.1.4
// @description  Remove annoying side bars, comment blocks, ads, etc.
// @author       Benjamin L.
// @match        https://blog.csdn.net/*
// @match        https://www.cnblogs.com/*
// @match        https://www.reddit.com/*
// @match        https://juejin.cn/*
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
            }
        `);
    }

    // reddit.com
    if (location.host === "www.reddit.com") {
        GM_addStyle(`
            .promotedlink {
                display: none;
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
})();