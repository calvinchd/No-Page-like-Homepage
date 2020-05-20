window.addEventListener("load", initLocale, true);

function initLocale(){
	document.getElementById("searchInput").placeholder = localeStrings[5];
	document.getElementById("pageTitle").innerHTML = localeStrings[6];
}