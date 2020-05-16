window.addEventListener("keypress", function (e) { keyShortcut(e);});

var shortcuts = new Array(127);

// Processes key presses
function keyShortcut(e) {
	if (document.activeElement === document.getElementById("searchInput")) { // 
		return;
	}
	var code = e.keyCode - 1;
	if (shortcuts.length > code) {
		var link = shortcuts[code];
		if(link != null) {
			if (document.activeElement === link) {
				link.click();
			} else {
				link.focus();
			}
		}
	}
}

function addShortcut(key, link) {
	var code = key.charCodeAt(0) - 1;
	if (shortcuts.length > code) {
		shortcuts[code] = link;
	}
}