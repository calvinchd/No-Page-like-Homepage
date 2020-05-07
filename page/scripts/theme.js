window.addEventListener("load", initTheme, true);

// Load saved theme
function initTheme() {
	if (localStorage.getItem("theme") === "light") {
		document.getElementById('theme').href = setLight() + ".css";
	}
	if ((32 & feats) === 32) {
		document.getElementById("themeButton").style = "display:none;";
	}
}

function toggleTheme() {
	var link = document.getElementById('theme');
	var current;
	if (localStorage.getItem("theme") === "light") {
		current = setDark();
	} else {
		current = setLight();
	}
	link.href = current + ".css";
}

// Set theme and save in local storage
function setDark() {
	//document.getElementById('themeButton').innerHTML = "&#x1F31E;"; // Sun
	//document.getElementById('themeButton').innerHTML = "&#x1F642;"; // Smiley face
	document.getElementById('themeButton').innerHTML = "&#x1F634;";
	localStorage.removeItem("theme");
	return current = themeDir + themeDark;
}
function setLight() {
	//document.getElementById('themeButton').innerHTML = "&#x1F311;"; // Moon
	document.getElementById('themeButton').innerHTML = "&#x1F60E;"; // Sunglasses face
	localStorage.setItem("theme", "light");
	return themeDir + themeLight;
}