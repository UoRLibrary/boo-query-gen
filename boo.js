var search = document.getElementById("search");

function boo() {
  //Reset search.value
  search.value = "(";

  //extract function
  function extract(x) {
    if (/\w/.test(x.value)) {
      var y = x.value.toLowerCase().split("\n");
      for (var i = 0; i < y.length; i++) {
        y[i] = y[i].trim();
      }
      concepts.push(y);
    }
  }

  //extract concepts and add to concepts array
  var concept = document.querySelectorAll(".concept");
  var concepts = [];
  for (var i = 0; i < concept.length; i++) {
    extract(concept[i]);
  }

  //look for phrases
  for (var i = 0; i < concepts.length; i++) {
    for (var j = 0; j < concepts[i].length; j++) {
      if (/\s/.test(concepts[i][j])) {
        concepts[i][j] = "\"" + concepts[i][j] + "\"";
      }
    }
  }

  //combine synonyms "OR"
  var combine = [];
  for (var i = 0; i < concepts.length; i++) {
    var str = "(";
    for (var j = 0; j < concepts[i].length; j++) {
      if (j < concepts[i].length - 1) {
        str += concepts[i][j] + " OR ";
      } else {
        str += concepts[i][j] + ")";
      }
    }
    combine[i] = str;
  }

  //combine concepts "AND"
  for (var i = 0; i < combine.length; i++) {
    if (i < combine.length - 1) {
      search.value += combine[i] + " AND ";
    } else {
      search.value += combine[i] + ")";
    }
  }

  //check for empty search string
  if (search.value === "(") {
    alert("Please enter some concepts");
    search.value = "";
  }
}

function addConcept() {
	
  var cnt = document.getElementsByTagName("div").length;
  if (cnt < 7) {
    //find container div  
    var container = document.getElementById("container");

    //create div
    var div = document.createElement("div");

    //create h3 and add text
    var h3 = document.createElement("h3");
    var count = document.querySelectorAll(".concept");
    var h3Text = "Concept " + (count.length + 1);
    h3.appendChild(document.createTextNode(h3Text));

    //create textarea
    var textarea = document.createElement("textarea");
    textarea.setAttribute("class", "concept");

    //append new elements
    container.appendChild(div);
    div.appendChild(h3);
    div.appendChild(textarea);
  } else {
  	alert("Maximum number of concepts created");
  }
} 

function clearAll() {
	var x = document.getElementsByTagName("textarea");
  for (var i = 0; i < x.length; i++) {
  	x[i].value = "";
  }
}
