// Test for month function
console.assert(typeof(month(new Date()))=== "string", "It should return a string");

console.assert(month(new Date(2017, 6, 19)) === "June", "It should return June" );

console.assert(month(new Date(2017, 1, 1 )) === "February", "It should return February")

console.assert(month("string") === "Error, input is not a correctly formatted Date object", "It should return an error message when given invalid input")

// Test for reverseSentence function
console.assert(reverseSentence("Hello World!") === "World! Hello")

console.assert(reverseSentence([1,2,3]) === "Please enter a valid string")

console.assert(reverseSentence("Hello World!") === "World! Hello")

// Test for nameProps function
console.assert(JSON.stringify(nameProps({name: 'Brandon',age: 34, phone: '555-555-5555'})) == JSON.stringify(["age", "name", "phone"]))

console.assert(nameProps("Hello World!") == "Please Enter A valid ECMAScript Object")
