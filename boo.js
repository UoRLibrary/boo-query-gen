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
  var concept = document.querySelectorAll('[id^=concept]');
  var concepts = [];
	for(var i = 0; i < concept.length; i++){
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
    search.value = ""; }
}
