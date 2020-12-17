// ==UserScript==
// @name         Prolific Check new Study
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Check if there is a new study and notify.
// @author       https://github.com/F-Wer/
// @include      https://app.prolific.co/studies
// @icon             https://app.prolific.co/favicon.ico
// @grant        none
// ==/UserScript==

var url = 'https://app.prolific.co/studies';
const request = 'http://localhost:8000/';


window.onload = function(){
    Notification.requestPermission().then(function(result) {
        console.log(result);
        console.log('Loaded');
        randomfunccall();
    });
}
;

function prolificcallSite(){
//     Possibility to get the count of elements with a specific class name. Problem -> if there is one or none the length starts at 0.
//   var classlength = document.getElementsByClassName('#detail-wrap').length;
//     console.log(classlength);

var innertext = document.getElementsByClassName('detail-wrap')[0];
if(!innertext) {
           console.log("There is no new study");
           return;
       }else {
    for(var n=0; n < 3 ; n++) {
        var text = document.getElementsByClassName('detail-wrap')[n].innerText;
       var notification = new Notification('NEW STUDY' ,{body: text});
  //          calltoServer(text);
       notification.onclick = function(event) {
           event.preventDefault();
           window.open(url, '_blank');
       };
    }
    return;
}
}

function randomfunccall() {
    window.setInterval(function(){
        prolificcallSite();
    }, 60000);
}

function calltoServer (text) {
 var xhr = new XMLHttpRequest();
xhr.open("POST", request, true);
xhr.setRequestHeader('Content-Type', 'text/html');
xhr.send(JSON.stringify(
    text
));
}