//Make it run, make it right, make it fast

function month(date) {
	if (date instanceof Date) {
		let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return monthArray[date.getMonth()]
	} else {
		return "Error, input is not a correctly formatted Date object"
	}
}