window.addEventListener("load", generateLinks, true);

function generateLinks(){
	var contentDiv = document.getElementById("mainContent");
	for (const colGroups of linksGroups) {
		var group = newRow(contentDiv);
		for (const colGroup of colGroups) {
			var col = newColumn(colGroup.header);
			for (const link of colGroup.links) {
				col.appendChild(newLink(link.url, link.name, link.color));
			}
			group.appendChild(col);
		}
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
	aIcon.style = "background:#" + color+";"; // Apply color
	// Append elements;
	aItem.appendChild(aIcon);
	aItem.appendChild(document.createTextNode(name));
	aLink.appendChild(aItem);
	return aLink;
}