$(document).ready(function() {
	// Just for copy-paste these lines, should be empty, unless I will need it for some reason
});

/*
* sysFunc.js
* -----------
* Some helper functions, not critical functions
*/

var WEBSITE_URL = "file:///C:/Users/Noam/Documents/Code%20library/";

function printErr(txt, br) {
	/*
	 * Printing a message in red - an indicator that something isn't good. Should be used just for debugging.
	*/
	switch (br) {
		case 0: // No br tag needed
			document.write('<span style="color: red;">'+txt+'</span>');
			break;
		case 1: // Br just before the text
			document.write("<br />");
			document.write('<span style="color: red;">'+txt+'</span>');
			break;
		case 2: // Br before and after the text
			document.write("<br />");
			document.write('<span style="color: red;">'+txt+'</span>');
			document.write("<br />");
			break;
	}
}

function printOK(txt, br) {
	/*
	 * Same as the function above, but with green text - an indicator that something is good
	*/
	switch (br) {
		case 0:
			document.write('<span style="color: green;">'+txt+'</span>');
			break;
		case 1:
			document.write("<br />");
			document.write('<span style="color: green;">'+txt+'</span>');
			break;
		case 2:
			document.write("<br />");
			document.write('<span style="color: green;">'+txt+'</span>');
			document.write("<br />");
			break;
	}
}

function errorBorder(tag) {
	/*
	* Making the border of the selected element be flashing red - indicator for an error
	*/
	var border = tag.css("border"); // Saving the original border
	var i = 0;
	function tst() {
		if (i == 5) { // Flash 5 times
			clearInterval();
		} else {
			i+=1;
			tag.css("border", "solid red 2px");
			setTimeout(function(){ // Flash red for 40 milliseconds
				tag.css("border", border);
			}, 40);
		}
	}
	var timer = setInterval(tst, 200); // As a variable, just in case I will need it - the function setInterval returns the interval's ID
}