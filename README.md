# No page like homepage
 [![pipeline status](https://gitlab.com/calvinchd/no-page-like-homepage/badges/master/pipeline.svg)](https://gitlab.com/calvinchd/no-page-like-homepage/-/commits/master)
 
A minimal and simple desktop homepage, startpage and/or new tab page. It is not made for or tested on mobile devices.

## Features
- Basic clock and date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
- DuckDuckGo search
- Personalised greetings
- Custom link shortcuts
- Toggle light and dark mode
- Disable uneeded/unused features

## Configuration
```custom.js``` stores the user's name and links:
- The name is only used for the personalised greeting
``` javascript
const userName = "John Smith";
```
- Enable\Disable features
``` javascript
//0b | Theme | Clock | Date | Greeting | Search | Links
const feats = 0b000000; // set bit to 1 to disable
// 0b111000 to disable theme, clock and date
```
- Theme management
``` javascript
// Directory themeLight and themeDark is stored
const themeDir = "styles/themes/";
// .css is appended to the end for both themeLight & themeDark
const themeLight = "gruvbox-light";
const themeDark = "gruvbox-dark";
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
- Localisation configuration
```javascript
const localeStrings = [
	"Good morning", // 05:00-11:59 greeting
	"Good afternoon", // 12:00-17:59 greeting
	"Good evening", // 18:00-23:59 greeting
	"Good night", // 00:00-04:59 greeting
	", ", // Greeting and name separator
	"DuckDuckGo...", // Search box placeholder
	"Your browser does not support <strong>Javascript</strong> or has it disabled. This page requires <strong>JS</strong> for most of its functions.", // noscript message
	"Home", // Page title
];
```
## Credits
[Gruvbox](https://github.com/morhetz/gruvbox) colour palette - [MIT/X11](https://en.wikipedia.org/wiki/MIT_License)

Open Sans font - [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)