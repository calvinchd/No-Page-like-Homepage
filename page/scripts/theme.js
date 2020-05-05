const themeDir = "styles/themes/";
const themeLight = "gruvbox-light";
const themeDark = "gruvbox-dark";

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
	var current = link.href.split('/').pop();
	if (current === (themeDark + ".css")) {
		current = setLight();
	} else {
		current = setDark();
	}
	link.href = current + ".css";
}

// Set theme and save in local storage
function setDark() {
	document.getElementById('themeButton').innerHTML = "&#x1F31E;";
	localStorage.removeItem("theme");
	return current = themeDir + themeDark;
}
function setLight() {
	document.getElementById('themeButton').innerHTML = "&#x1F311;";
	localStorage.setItem("theme", "light");
	return themeDir + themeLight;
}