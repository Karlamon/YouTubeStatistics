// Objects
var btns = document.querySelectorAll(".buttons button");
var ytGraph = document.getElementsByClassName("youtube-graph")[0];
var ytBar = document.getElementsByClassName("youtube-bar")[0];

//C ategories
var categories = ["Comedy", "Education", "Entertainment", "Film & Animation", "Howto & Style", "People & Blogs", "Overall"];
var categoryText = document.getElementById("category-text");

// Number text
var totalViewsNumberText = document.getElementById("total-views-number");
var minutesWatchedNumberText = document.getElementById("minutes-watched-number");
var videosWatchedNumberText = document.getElementById("videos-watched-number");
var likesNumberText = document.getElementById("likes-number");
var dislikesNumberText = document.getElementById("dislikes-number");
var totalVotesNumberText = document.getElementById("total-votes-number");

// Percent text
var totalViewsPercentText = document.getElementById("total-views-percent");
var minutesWatchedPercentText = document.getElementById("minutes-watched-percent");
var videosWatchedPercentText = document.getElementById("videos-watched-percent");
var likesPercentText = document.getElementById("likes-percent");
var dislikesPercentText = document.getElementById("dislikes-percent");
var totalVotesPercentText = document.getElementById("total-votes-percent");

// Numbers
var totalViewsNumber = ["166,754", "1,135,467", "25,666,867", "18,680,229", "22,438", "21,479", "45,693,234"];
var minutesWatchedNumber = ["23:23", "32:08", "59:07", "131:53", "6:03", "7:11", "259:45"];
var videosWatchedNumber = ["2", "3", "9", "13", "1", "1", "29"];
var likesNumber = ["13,523", "58,589", "280,603", "449,887", "402", "435", "803,439"];
var dislikesNumber = ["157", "292", "26,587", "7,955", "5", "2", "34,998"];
var totalVotesNumber = ["13,680", "58,881", "307,190", "457,842", "407", "437", "838,437"];

// Percentages
var totalViewsPercent = [0.36, 2.48, 56.17, 40.88, 0.05, 0.05, 100];
var minutesWatchedPercent = [9.00, 12.37, 22.76, 50.77, 2.33, 2.77, 100];
var videosWatchedPercent = [6.90, 10.34, 31.03, 44.83, 3.45, 3.45, 100];
var likesPercent = [98.85, 99.50, 91.35, 98.26, 98.77, 99.54, 95.83];
var dislikesPercent = [1.15, 0.50, 8.65, 1.74, 1.23, 0.46, 4.17];
var totalVotesPercent = [0.36, 2.48, 56.17, 40.88, 0.05, 0.05, 100];

// Detect Microsoft Internet Explorer.
function GetIEVersion() {
	"use strict";
	var sAgent = window.navigator.userAgent;
	var Idx = sAgent.indexOf("MSIE");

	// If IE, return version number.
	if (Idx > 0) {
		return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
	}
	// If IE 11 then look for Updated user agent string.
	else if (!!navigator.userAgent.match(/Trident\/7\./)) {
		return 11;
	} else {
		return 0; //It is not IE
	}
}

// Check if browser is Microsoft Edge or Internet Explorer.
function checkBrowser() {
	"use strict";
	if (navigator.userAgent.indexOf("Edge") !== -1) {
		alert("Microsoft Edge does not work with this page. Please open it in Mozilla Firefox, Google Chrome, Apple Safari, or Opera.");
	}
	if (GetIEVersion() > 0) {
		alert("Microsoft Internet Explorer does not work with this page. Please open it in Mozilla Firefox, Google Chrome, Apple Safari, or Opera.");
	}
}

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", manageYTClasses);
}

function startUp() {
	"use strict";
	checkBrowser();
	updateText(6);
}

function manageYTClasses() {
	if (this.getAttribute("data-add")) {
		ytGraph.classList.add(this.getAttribute("data-add"));
		ytBar.classList.add(this.getAttribute("data-add"));
	}
	if (this.getAttribute("data-remove-overall")) {
		ytGraph.classList.remove(this.getAttribute("data-remove-overall"));
		ytBar.classList.remove(this.getAttribute("data-remove-overall"));
	}
	if (this.getAttribute("data-remove-co")) {
		ytGraph.classList.remove(this.getAttribute("data-remove-co"));
		ytBar.classList.remove(this.getAttribute("data-remove-co"));
	}
	if (this.getAttribute("data-remove-ed")) {
		ytGraph.classList.remove(this.getAttribute("data-remove-ed"));
		ytBar.classList.remove(this.getAttribute("data-remove-ed"));
	}
	if (this.getAttribute("data-remove-en")) {
		ytGraph.classList.remove(this.getAttribute("data-remove-en"));
		ytBar.classList.remove(this.getAttribute("data-remove-en"));
	}
	if (this.getAttribute("data-remove-fa")) {
		ytGraph.classList.remove(this.getAttribute("data-remove-fa"));
		ytBar.classList.remove(this.getAttribute("data-remove-fa"));
	}
	if (this.getAttribute("data-remove-hs")) {
		ytGraph.classList.remove(this.getAttribute("data-remove-hs"));
		ytBar.classList.remove(this.getAttribute("data-remove-hs"));
	}
	if (this.getAttribute("data-remove-pb")) {
		ytGraph.classList.remove(this.getAttribute("data-remove-pb"));
		ytBar.classList.remove(this.getAttribute("data-remove-pb"));
	}
}

function updateText(i) {
	"use strict";
	categoryText.innerHTML = categories[i];

	totalViewsNumberText.innerHTML = totalViewsNumber[i];
	minutesWatchedNumberText.innerHTML = minutesWatchedNumber[i];
	videosWatchedNumberText.innerHTML = videosWatchedNumber[i];
	likesNumberText.innerHTML = likesNumber[i];
	dislikesNumberText.innerHTML = dislikesNumber[i];
	totalVotesNumberText.innerHTML = totalVotesNumber[i];

	totalViewsPercentText.innerHTML = totalViewsPercent[i] + "%";
	minutesWatchedPercentText.innerHTML = minutesWatchedPercent[i] + "%";
	videosWatchedPercentText.innerHTML = videosWatchedPercent[i] + "%";
	likesPercentText.innerHTML = likesPercent[i] + "%";
	dislikesPercentText.innerHTML = dislikesPercent[i] + "%";
	totalVotesPercentText.innerHTML = totalVotesPercent[i] + "%";
}

function detectClick() {
	"use strict";
	var e = window.event,
		btn = e.target || e.srcElement;
	if (btn.id === "button-comedy") {
		updateText(0);
	} else if (btn.id === "button-education") {
		updateText(1);
	} else if (btn.id === "button-entertainment") {
		updateText(2);
	} else if (btn.id === "button-film-animation") {
		updateText(3);
	} else if (btn.id === "button-howto-style") {
		updateText(4);
	} else if (btn.id === "button-people-blogs") {
		updateText(5);
	} else if (btn.id === "button-overall") {
		updateText(6);
	} else {
		alert("Error.");
	}
}