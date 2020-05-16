window.addEventListener("load", initLocale, true);

function initLocale(){
	document.getElementById("searchInput").placeholder = localeStrings[5];
	document.getElementById("nsMsg").innerHTML = localeStrings[6];
	document.getElementById("pageTitle").innerHTML = localeStrings[7];
}