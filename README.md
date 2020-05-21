## Boolean Query Generator
Creates a Boolean search string based on multiple lists of synonyms  
Written by Ian Chilvers, University of Reading Library

####
To see the tool in action visit: https://uorlibrary.github.io/boo-query-gen/demo.html

Please don't link to this page for extended use.

#### Using your own version of the tool
##### Hosting via GitHub pages
Fork boo-query-gen repository to your own GitHub account and update the paths in the following files:
*  booTStrap.js
*  booWidget.js
*  initBooWidget

Embed the code in initBooWidget to include the Boolean Query Generator on a webpage.

##### Hosting on your own server
Copy files 1-5 to your webserver/CMS and update the paths in the following files:
*  booTStrap.js
*  booWidget.js
*  initBooWidget

Embed the code in (6) initBooWidget to include the Boolean Query Generator on a webpage.

#### Files
##### Required
1.  boo.css - basic stylesheet
2.  boo.js - makes the tool work
3.  booContent.html - html that works with boo.js
4.  booTStrap.js - inserts into webpage html links to boo.css, boo.js & booWidget.js
5.  booWidget.js - AJAX call to booContent.html
6.  initBooWidget - the code to embed into the webpage/widget asset

##### Demonstration
*  index.html - required to host code using gh-pages
*  demo.html - a simple page to preview the tool (uses initBooWidget script)
