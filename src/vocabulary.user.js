// ==UserScript==
// @name         Vocabulary Ehancement
// @namespace    https://github.com/bensgith/tampermonkey-scripts/
// @version      0.0.3
// @description  Remove / hide unecessary infomation
// @author       Benjamin L
// @match        https://www.vocabulary.com/dictionary/*
// @icon         https://cdn.vocab.com/images/favicons/favicon-32x32-2frmtt.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    let css = `
        .page-footer,
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

})();