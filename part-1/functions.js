//Make it run, make it right, make it fast
// The second condition in the if statement handles the following edge case:

// month(new Date('anystring'))
function month(date) {
	if (date instanceof Date && !isNaN(date.valueOf())) {
		let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return monthArray[date.getMonth()]
	} else {
		return "Error, input is not a correctly formatted Date object"
	}
}

// Works fine except when input string includes commas
function reverseSentence(string) {
	if (typeof(string) === "string") {
	return string.split(' ').reverse().toString().replace(',', ' ')
	} else {
		console.log(typeof(string))
		return "Please enter a valid string"
	}
}

function nameProps(obj) {
	if (obj instanceof Object) {
		return Object.keys(obj).sort()
	} else {
		return "Please Enter A valid ECMAScript Object"
	}
}

function filterBetween(array, min, max) {
	return []
}