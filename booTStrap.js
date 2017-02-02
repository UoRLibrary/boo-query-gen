var s0 = document.getElementById("initBooWidget");
var h0 = document.getElementsByTagName("head");

var wCss = document.createElement("link");
wCss.setAttribute("rel", "stylesheet");
wCss.type = "text/css";
wCss.setAttribute("href", "https://UoRLibrary.github.io/boo-query-gen/boo.css")
h0[0].appendChild(wCss);

var wBooWidget = document.createElement("script");
wBooWidget.type = "text/javascript";
wBooWidget.setAttribute('async', 'async');
wBooWidget.src = "https://UoRLibrary.github.io/boo-query-gen/booWidget.js";
s0.parentNode.insertBefore(wBooWidget, s0);

var wBooMain = document.createElement("script");
wBooMain.type = "text/javascript";
wBooMain.setAttribute('async', 'async');
wBooMain.src = "https://UoRLibrary.github.io/boo-query-gen/boo.js";
s0.parentNode.insertBefore(wBooMain, s0);
