// ==UserScript==
// @name         RefreshDKB
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
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
