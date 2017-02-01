var s0 = document.getElementById("initBooWidget");
var h0 = document.getElementsByTagName("head");

var wCss = document.createElement("link");
wCss.setAttribute("rel", "stylesheet");
wCss.type = "text/css";
wCss.setAttribute("href", "http://px911454.github.io/boolean-string-generator/boo.css")
h0.appendChild(wCss);

var wBooWidget = document.createElement("script");
wBooWidget.type = "text/javascript";
wBooWidget.setAttribute('async', 'async');
wBooWidget.src = "http://px911454.github.io/boolean-string-generator/docs/booWidget.js";
s0.parentNode.insertBefore(wBooWidget, s0);

var wBooMain = document.createElement("script");
wBooMain.type = "text/javascript";
wBooMain.setAttribute('async', 'async');
wBooMain.src = "http://px911454.github.io/boolean-string-generator/boo.js";
s0.parentNode.insertBefore(wBooMain, s0);