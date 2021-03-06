//Make it run, make it right, make it fast
// The second condition in the if statement handles the following edge case:
// TODO refactor to ES6
// month(new Date('anystring'))
function month(date) {
	if (date instanceof Date && !isNaN(date.valueOf())) {
		let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return monthArray[date.getMonth()]
	} else {
		return "Error, input is not a correctly formatted Date object"
	}
}

function reverseSentence(string) {
	if (typeof(string) === "string") {
	return string.split(' ').reverse().join(' ')
	} else {
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

function filterBetween(arr, min, max){
	if (typeof(min) === "string" && typeof(max) === "string") {
		return arr.filter(function(word){
			return word > min && word < max;})
} else { return "All inputs should be strings"}

	}

module.exports = {
	filterBetween : filterBetween,
	nameProps : nameProps,
	month: month,
	reverseSentence: reverseSentence,
 }

