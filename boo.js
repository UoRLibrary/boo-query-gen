function boo() {
  //Reset search.value
  var search = document.getElementById("search");
  search.value = "(";

  //extract function - splits tested input into arrays and removes array elements that are empty
  function extract(x) {
    if (/\w|\d/.test(x.value)) {
      var y = x.value.toLowerCase().split("\n");
      for (var i = 0; i < y.length; i++) {
        y[i] = y[i].trim();
        if (!(/\w|\d/.test(y[i]))) {
          y.splice(i, 1);
          i--;
        }
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
	search.value = "";
    alert("Please enter some concepts");
  }
}

function addConcept() {

  var cnt = document.getElementsByClassName("booContainer").length;
  if (cnt < 6) {
    //find container div  
    var container = document.getElementById("container");

    //create div
    var div = document.createElement("div");
    div.setAttribute("class", "booContainer");

    //create h4 and add text
    var h4 = document.createElement("h4");
    var count = document.querySelectorAll(".concept");
    var h4Text = "Concept " + (count.length + 1);
    h4.appendChild(document.createTextNode(h4Text));

    //create textarea
    var textarea = document.createElement("textarea");
    textarea.setAttribute("class", "concept");

    //append new elements
    container.appendChild(div);
    div.appendChild(h4);
    div.appendChild(textarea);
  } else {
    alert("Maximum number of concepts created");
  }
}

function clearAll() {
  var x = document.getElementsByClassName("concept");
  for (var i = 0; i < x.length; i++) {
    x[i].value = "";
  }
}