function one() {
	var g = document.querySelectorAll(".one").length;
	for (i = 0; i < g; i++) {
		var current = document.querySelectorAll(".one")[i].innerHTML;
		if (current.indexOf("-one") > -1) {

		} else {
			document.querySelectorAll(".one")[i].innerHTML = "<div class='-one'>" + current + "</div>";
		}
	}
	var h = document.querySelectorAll(".container");
	for (i = 0; i < h.length; i++) {
		var maxHeight = 0;
		var elts = document.querySelectorAll(".container")[i].querySelectorAll(".one");
		for (j = 0; j < elts.length; j++) {
			if (maxHeight < elts[j].querySelector(".-one").offsetHeight) {
				maxHeight = elts[j].querySelector(".-one").offsetHeight;
			}
		}
		for (j = 0; j < elts.length; j++) {
			elts[j].querySelector(".-one").style.height = maxHeight + "px";
		}
	}
}

if (document.readyState != "loading"){
	one();
} else if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", one);
} else {
	document.attachEvent("onreadystatechange", function() {
		if (document.readyState != "loading")
			one();
	});
}
window.addEventListener("resize", one);