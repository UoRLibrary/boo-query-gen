var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("booWidget").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "https://px911454.github.io/boo-str-gen2/docs/booContent.html", true);
xhttp.send();