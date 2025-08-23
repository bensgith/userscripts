// ==UserScript==
// @name         Vocabulary Ehancement
// @namespace    https://github.com/bensgith/userscripts
// @version      0.0.5
// @description  Remove / hide unecessary infomation
// @author       Benjamin L
// @match        https://www.vocabulary.com/*
// @icon         https://cdn.vocab.com/images/favicons/favicon-32x32-2frmtt.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    if (location.pathname === "/") {
        console.log("match /");
        let css = `
            header,
            #page,
            .page-footer,
            body.home .wave-bottom {
                display: none;
            }
        `;

        GM_addStyle(css);
    }

    if (location.pathname.startsWith("/dictionary")) {
        console.log("match /dictionary/*");
        let css = `
            header,
            .page-footer,
            .box-market-bowl-subscription,
            .dictionary_home .box-subscribe,
            .dictionary_home .dictionary-quiz,
            .wordPage .vcom_progress,
            .wordPage .col-2 .vocab-trainer-background,
            .sign-up-area,
            .sign-up-tile-area,
            .loggedout .sign-up-area {
                display: none;
            }
            .promote-subscribe-dictionary {
                display: none !important;
            }
            .dictionary_home .word-of-the-day {
                width: unset;
            }
        `;

        GM_addStyle(css);

        window.addEventListener('load', function() {
            let vocabTrainer = document.querySelector('.wordPage .col-2 .vocab-trainer-background');
            vocabTrainer.removeAttribute('style');
        });
    }

})();