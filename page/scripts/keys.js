window.addEventListener("keypress", function (e) { keyShortcut(e);});

var shortcuts = new Array(94); // UTF-8 basic latin keys only

// Processes key presses
function keyShortcut(e) {
	if (document.activeElement === document.getElementById("searchInput")) { // Ignore if focused on search box
		return;
	}
	var code = e.keyCode - 32;
	if(code < 0 || code >= shortcuts.length) { // Invalid keycode
		return;
	}
	var link = shortcuts[code];
	// Focus link and click link on second keypress
	if (link != null) {
		if (document.activeElement === link) {
			link.click();
		} else {
			link.focus();
		}
	}
}

function addShortcut(key, link) {
	var code = key.charCodeAt(0) - 32;
	if (code < 0 || code >= shortcuts.length) { // Invalid keycode
		return;
	}
	if (!(shortcuts[code] == null)) { // Duplicate key bindings
		console.warn("Key \`" + key + "\` already bound to " + "\'" + shortcuts[code].parentNode.href + "\' will be bound to \'" + link.parentNode.href + "\'");
	}
	shortcuts[code] = link;
}

// Looks through array of allowed keys and binds the link if a unbound key is found
function addShorcutAuto(link, startIndex) {
	for (let index = startIndex; index < autoBindKeys.length; ++index) {
		if (shortcuts[autoBindKeys.charCodeAt(index) - 32] == null) {
			addShortcut(autoBindKeys.charAt(index), link);
			console.log("Auto shortcut: " + autoBindKeys.charAt(index) + " | " + link.parentNode.href);
			return ++index;
		}
	}
	return autoBindKeys.length;
}