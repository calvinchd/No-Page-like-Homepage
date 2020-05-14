window.addEventListener("load", initialClock, true);

function initialClock() {
	// Disable time content separator
	if ((26 & feats) === 26) { // Enable\Disable time, date and greeting
		document.getElementById('greetLine').style = "display:none;";
		return; // don't check if need to enable rest
	}
	if ((24 & feats) === 0) { // Enable\Disable Time and date
		updateTime();
		setInterval(updateTime, 1000);
	}
	else if ((16 & feats) === 0) { // Enable\Disable Time
		setTime(new Date());
		setInterval(() => { setTime(new Date()) }, 1000);
	}
	else if ((8 & feats) === 0) { // Enable\Disable Date
		setDate(new Date());
		setInterval(() => { setDate(new Date()) }, 60000);
	}
	if ((4 & feats) === 0) { // Enable\Disable Greeting
		if (!(userName.trim().length === 0)) {
			document.getElementById('cGreetName').innerHTML = localeStrings[4] + userName;
		}
		setGreeting();
		setInterval(setGreeting, 3600000);
	}
}

// Update date and time
function updateTime() {
	var today = new Date();
	setTime(today);
	setDate(today);
}
// Set time in 24 hour format
function setTime(today) {
	document.getElementById('cTime').innerHTML =
		formatDoubleDigits(today.getHours()) + ":" +
		formatDoubleDigits(today.getMinutes()) + ":" +
		formatDoubleDigits(today.getSeconds());
}
// Set date in ISO 8601 format
function setDate(today) {
	document.getElementById('cDate').innerHTML =
		today.getFullYear() + "-" +
		formatDoubleDigits(today.getMonth()) + "-" +
		formatDoubleDigits(today.getDate());
}
// Set greeting by hour of day
function setGreeting() {
	var h = new Date().getHours();
	var greeting;
	if (h >= 18) {
		greeting = localeStrings[2];
	} else if (h >= 12) {
		greeting = localeStrings[1];
	} else if (h >= 5) {
		greeting = localeStrings[0];
	} else { // 00:00-04:59
		greeting = localeStrings[3];
	}
	var greet = document.getElementById('cGreet');
	if (greeting != greet.innerHTML ) {
		greet.innerHTML = greeting;
	}
}

// Adds 0 in front of single digit numbers
function formatDoubleDigits(i) {
	return ("0" + i).slice(-2);
}