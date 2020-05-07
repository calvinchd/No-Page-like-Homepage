window.addEventListener("load", initLinks, true);

function initLinks() {
	if ((2 & feats) === 2) { // Enable\Disable Search bar
		document.getElementById("searchBox").style = "display:none;";
	}
	// Disable links
	if ((1 & feats) === 1) { // Enable\Disable Links
		return;
	}
	generateLinks();
}

function generateLinks() {
	var shortLinks = document.getElementById("shortLinks");
	for (const colGroups of linksGroups) {
		var groupContainer = document.createElement("div");
		groupContainer.className = "linkGroupContainer";
		var group = newRow(groupContainer);
		for (const colGroup of colGroups) {
			var col = newColumn(colGroup.header);
			for (const link of colGroup.links) {
				col.appendChild(newLink(link.url, link.name, link.color));
			}
			group.appendChild(col);
		}
		shortLinks.appendChild(groupContainer);
	}
}

// Makes new row and returns the created DOM element
function newRow(parent) {
	var row = document.createElement("div");
	row.className = "linksColumnsGroup";
	// Append elements
	parent.appendChild(row);
	return row;
}
// Makes new column and returns the created DOM element
function newColumn(headName) {
	var col = document.createElement("div");
	col.className = "linksColumn";
	var colHeader = document.createElement("p");
	colHeader.className = "linksHeader";
	// Append elements
	if(headName.trim()==="") { // Check if header name is empty
		colHeader.style = "height:0px;padding:0px;" // No header
	} else {
		colHeader.appendChild(document.createTextNode(headName)); // Apply header
	}
	col.appendChild(colHeader);
	return col;
}
// Makes new link and returns the created DOM element
function newLink(url, name, color) {
	var aLink = document.createElement("a");
	aLink.href = url;
	aLink.rel = "noopener noreferrer"; // no referrer info
	var aItem = document.createElement("p");
	aItem.className = "linksItem";
	var aIcon = document.createElement("canvas");
	aIcon.className = "linksIcon";
	if(color.trim() == "") { // no color
		aIcon.style = "background:var(--bg0);"; 
	} else { // Apply color
		aIcon.style = "background:#" + color + ";"; 
	}
	// Append elements;
	aItem.appendChild(aIcon);
	aItem.appendChild(document.createTextNode(name));
	aLink.appendChild(aItem);
	return aLink;
}