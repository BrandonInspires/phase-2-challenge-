//Make it run, make it right, make it fast

function month(date) {
	if (date instanceof Date) {
		return "June"
	} else {
		return "Error, input is not a correctly formatted Date object"
	}
}