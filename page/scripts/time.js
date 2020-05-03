window.addEventListener("load", initialClock, true);

function initialClock() {
	updateTime();
	setGreeting();
	if(!(userName.trim().length === 0)) {
		document.getElementById('cGreetName').innerHTML = ", " + userName;
	}
	setInterval(updateTime, 1000);
	setInterval(setGreeting, 3600000);
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
	var greeting = "Good ";
	if (h >= 18) {
		greeting += "evening";
	} else if (h >= 12) {
		greeting += "afternoon";
	} else if (h >= 5) {
		greeting += "morning";
	} else { // 00:00-04:59
		greeting += "night";
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