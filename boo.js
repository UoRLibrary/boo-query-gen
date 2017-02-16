function boo() {
  //Reset search.value
  var search = document.getElementById("search");
  search.value = "(";

  //extract function - splits tested input into arrays and removes array elements that are empty
    function extract(op, arrX) {
      if (/\w|\d/.test(arrX.value)) {
        var arrY = arrX.value.toLowerCase().split("\n");
        for (var i = 0; i < arrY.length; i++) {
          arrY[i] = arrY[i].trim();
          if (!(/\w|\d/.test(arrY[i]))) {
            arrY.splice(i, 1);
            i--;
          }
        }
        if (op.value === "and") {
          conObj = new obj(" AND ", arrY);
        } else {
          conObj = new obj(" NOT ", arrY);
        }
        concepts.push(conObj);
      }
    }

    //extract concepts and add to concepts array
    var concept = document.querySelectorAll(".concept");
    var operator = document.querySelectorAll('input:checked');
    var conObj;
    var concepts = [];
    //object constructor
    function obj(op, arr) {
      this.operator = op;
      this.array = arr;
      this.combine;
    }
    //ierate over all concept boxes
    for (var i = 0; i < concept.length; i++) {
      extract(operator[i], concept[i]);
    }

    //look for phrases
    for (var i = 0; i < concepts.length; i++) {
      for (var j = 0; j < concepts[i].array.length; j++) {
        if (/\s/.test(concepts[i].array[j])) {
          concepts[i].array[j] = "\"" + concepts[i].array[j] + "\"";
        }
      }
    }

    //combine synonyms "OR"
    for (var i = 0; i < concepts.length; i++) {
      var str = "(";
      for (var j = 0; j < concepts[i].array.length; j++) {
        if (j < concepts[i].array.length - 1) {
          str += concepts[i].array[j] + " OR ";
        } else {
          str += concepts[i].array[j] + ")";
        }
      }
      concepts[i].combine = str;
    }

    //combine concepts using user selected operators
    for (var i = 0; i < concepts.length; i++) {
      if (i < concepts.length - 1) {
        search.value += concepts[i].combine + concepts[i + 1].operator;
      } else {
        search.value += concepts[i].combine + ")";
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

    //create radio inputs
    function radObj(name, op) {
      this.type = "radio";
      this.name = name;
      this.id = name + "-" + op;
      this.value = op;
      this.label = op.toUpperCase();
    }

    var name = "concept" + (count.length + 1).toString();
    var radioAND = new radObj(name, "and");
    var radioNOT = new radObj(name, "not");

    var radio = [document.createElement("input"), document.createElement("input")];
    var radioArr = [radioAND, radioNOT];
    var radioLabel = [document.createElement("label"), document.createElement("label")];
    for (var i = 0; i < radio.length; i++) {
      radio[i].setAttribute("type", radioArr[i].type);
      radio[i].setAttribute("name", radioArr[i].name);
      radio[i].setAttribute("id", radioArr[i].id);
      radio[i].setAttribute("value", radioArr[i].value);
      if (i === 0) {
        radio[i].setAttribute("checked", "");
      }
      radioLabel[i].setAttribute("for", radioArr[i].id);
      radioLabel[i].appendChild(document.createTextNode(radioArr[i].label));
    }

    //create linebreak
    var br = document.createElement("br");

    //append new elements
    container.appendChild(div);
    div.appendChild(h4);
    div.appendChild(textarea);
    div.appendChild(br);
    for (var i = 0; i < 2; i++) {
      div.appendChild(radio[i]);
      div.appendChild(radioLabel[i]);
    }
  } else {
    alert("Maximum number of concepts created");
  }
}

function resetAll() {
  var x = document.getElementsByClassName("concept");
  for (var i = 0; i < x.length; i++) {
    x[i].value = "";
  }
  var radios = document.querySelectorAll('input[value="and"]');
  for (var i = 0; i < radios.length; i++) {
  	radios[i].checked = true;
  }
}
