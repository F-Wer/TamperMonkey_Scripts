// ==UserScript==
// @name         Prolific Check new Study
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Check if there is a new study and notify.
// @author       https://github.com/F-Wer/
// @include      https://app.prolific.co/studies
// @grant        none
// ==/UserScript==
var url = 'https://app.prolific.co/studies';


window.onload = function(){
    Notification.requestPermission().then(function(result) {
        console.log(result);
        console.log('Loaded');
        randomfunccall();
    });
}
;

function prolificcallSite(){

    var blankSite = document.getElementsByClassName('studies-list unselected');
    // if(typeof blankSite === 'undefined') {
     var n = '';
         for(n=0; n<10;n++) {
    var text = document.getElementsByClassName('detail-wrap')[n].innerText;


    console.log(text);
             var notification = new Notification('NEW STUDY' ,{body: text});

     notification.onclick = function(event) {
         event.preventDefault();
         window.open(url, '_blank');
         }

     }
return;
}


function randomfunccall() {
    window.setInterval(function(){
        prolificcallSite();
    }, 60000);
}

