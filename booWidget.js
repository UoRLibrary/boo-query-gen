var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("booWidget").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "https://UoRLibrary.github.io/boo-query-gen/booContent.html", true);
xhttp.send();
