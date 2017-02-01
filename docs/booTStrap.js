var s0 = document.getElementById("initBooWidget");

var wCss = document.createElement("link");
wCss.setAttribute("rel", "stylesheet");
wCss.type = "text/css";
wCss.setAttribute("href", "../boo.css")
s0.parentNode.insertBefore(wCss, s0);

var wBooWidget = document.createElement("script");
wBooWidget.type = "text/javascript";
wBooWidget.setAttribute('async', 'async');
wBooWidget.src = "booWidget.js";
s0.parentNode.insertBefore(wBooWidget, s0);

var wBooMain = document.createElement("script");
wBooMain.type = "text/javascript";
wBooMain.setAttribute('async', 'async');
wBooMain.src = "../boo.js";
s0.parentNode.insertBefore(wBooMain, s0);