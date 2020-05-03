# No page like homepage
A minimal and simple desktop homepage, startpage and/or new tab page. It is not made for or tested on mobile devices.

## Features
- Basic clock and date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
- DuckDuckGo search
- Personalised greetings
- Custom link shortcuts

## Configuration
```custom.js``` stores the user's name and links:
- The name is only used for the personalised greeting
``` javascript
const userName = "John Smith";
```
- Set up link shortcuts, columns, rows and color codes for each link.
``` javascript
const linksGroups = [[
	{
		"header": "Row1Col1", // column header
		"links": [
			{
				"name": "Link1",
				"url": "https://www.link1.com/",
				"color": "012345" // hex color codes, # not needed
			},
			{
				"name": "Link2",
				"url": "https://link2.com/",
				"color": "6789AB"
			}
		]
	},
	{
		"header": "Row1Col2",
		"links": [
			{
				"name": "Link3",
				"url": "https://link3.com",
				"color": "CDEF01"
			}
		]
	}
], // new row
[
	{
		"header": "Row2Col1",
		"links": [
			{
				"name": "Link4",
				"url": "https://link4.com/",
				"color": "234567B0" // With transparency
			}
		]
	}
]];
```
## Credits
[Gruvbox](https://github.com/morhetz/gruvbox) dark colour palette - [MIT/X11](https://en.wikipedia.org/wiki/MIT_License)

Open Sans font - [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)