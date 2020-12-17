// ==UserScript==
// @name         RefreshDKB
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/index.php?version=4.11&ext=dhdg&updated=true
// @grant        none
// @include     https://www.dkb.de/*
// ==/UserScript==
var Button = document.getElementById('sessionInfoCountdown');
if (typeof(Button) !== 'undefined' && Button != null) {
    randomfunccall();
}

function refreshButton() {
    'use strict';
Button.click();
}

function randomfunccall() {
    window.setInterval(function(){
       refreshButton();
}, Math.random()*270000);
}
