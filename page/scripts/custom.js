const userName = "calvinchd";
const feats = 0;
const themeDir = "styles/themes/";
const themeLight = "gruvbox-light";
const themeDark = "gruvbox-dark";
const linksGroups = [[
	{
		"header": "",
		"links": [
			{
				"name": "r/Startpages",
				"url": "https://reddit.com/r/startpages/",
				"color": "E52D27"
				// links with no shortKey are auto bound
			}
		]
	}
],
[
	{
		"header": "Fun",
		"links": [
			{
				"name": "Youtube",
				"url": "https://youtube.com/",
				"color": "E52D27",
				"shortKey": "y" // manually bound keys
			},
			{
				"name": "Reddit",
				"url": "https://reddit.com/",
				"color": "FF5700",
				"shortKey": "r"
			},
			{
				"name": "Twitch",
				"url": "https://twitch.tv/",
				"color": "6441A5",
				"shortKey": "t" // bindings are case sensitive (Shift + t)
			},
			{
				"name": "Twitter",
				"url": "https://tweetdeck.twitter.com/",
				"color": "1DA1F2",
				"shortKey": "T" // 
			},
			{
				"name": "Facebook",
				"url": "https://facebook.com/",
				"color": "3B5998",
				"shortKey": "" // empty shortKey values are not auto bound
			}
		]
	},
	{
		"header": "Dev",
		"links": [
			{
				"name": "GitLab",
				"url": "https://gitLab.com",
				"color": "FC6D26",
				"shortKey": "l"
			},
			{
				"name": "Github",
				"url": "https://github.com/",
				"color": "46474A",
				"shortKey": "h"
			},
			{
				"name": "Bitbucket",
				"url": "https://bitbucket.org/",
				"color": "166FE9",
				"shortKey": ""
			},
			{
				"name": "DevDocs",
				"url": "https://devdocs.io",
				"color": "5E5D5E",
				"shortKey": ""
			},
			{
				"name": "MDN",
				"url": "https://developer.mozilla.org/en-US/docs/Web",
				"color": "88D1F1",
				"shortKey": ""
			}
		]
	},
	{
		"header": "Mail",
		"links": [
			{
				"name": "Gmail",
				"url": "https://mail.google.com/",
				"color": "DC473A",
				"shortKey": "["
			},
			{
				"name": "Protonmail",
				"url": "https://mail.protonmail.com/",
				"color": "333366",
				"shortKey": "]"
			},
			{
				"name": "Tutanota",
				"url": "https://mail.tutanota.com/mail/",
				"color": "A01E20",
				"shortKey": "\\"
			},
			{
				"name": "Outlook",
				"url": "https://outlook.office.com/mail/",
				"color": "0B66C9",
				"shortKey": ""
			},
			{
				"name": "TempMail",
				"url": "https://temp-mail.org/en/",
				"color": "17CCA4",
				"shortKey": ""
			}
		]
	},
	{
		"header": "Apps",
		"links": [
			{
				"name": "Asana",
				"url": "https://app.asana.com",
				"color": "FA5978",
				"shortKey": ""
			},
			{
				"name": "ClickUp",
				"url": "https://app.clickup.com/",
				"color": "AD60BB",
				"shortKey": ""
			},
			{
				"name": "GDrive",
				"url": "https://drive.google.com/",
				"color": "1DA362",
				"shortKey": ""
			},
			{
				"name": "Jitsi Meet",
				"url": "https://meet.jit.si/",
				"color": "17A0DB",
				"shortKey": ""
			}
		]
	}
],
[
	{
		"header": "Follow",
		"links": [
			{
				"name": "GitLab",
				"url": "https://gitlab.com/calvinchd",
				"color": "FC6D26"
			}
		]
	},
	{
		"header": "me",
		"links": [
			{
				"name": "Github",
				"url": "https://github.com/calvinchd",
				"color": "46474A"
			}
		]
	},
	{
		"header": "on",
		"links": [
			{
				"name": "Twitter",
				"url": "https://twitter.com/truecalvinchd",
				"color": "17A0DB"
			}
		]
	}
]];
const localeStrings = [
	"Good morning", // Greeting strings
	"Good afternoon",
	"Good evening",
	"Good night",
	", ", // Greeting and name separator
	"DuckDuckGo...", // Search box placeholder
	"Your browser does not support <strong>Javascript</strong> or has it disabled. This page requires <strong>JS</strong> for most of its functions.", // noscript message
	"Home", // Page title
];
const autoBindKeys = "1234567890qwertyuiop[]asdfghjkl;\'zxcvbnm,.QWERTYUIOOPASDFGHJKL:\"ZXCVBNM<>?"; // Specify keys for auto key binding