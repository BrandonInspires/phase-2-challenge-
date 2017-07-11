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

// Test for filterBetween function 
// let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
console.assert(JSON.stringify(filterBetween(arr, 'deer', 'giraffe')) == JSON.stringify(['dog']), "It should output ['dog']")
console.assert(JSON.stringify(filterBetween(arr, 'chimp', 'lobster')) == JSON.stringify(['dog', 'lion', 'cow']),  "It should output ['dog', 'lion', 'cow']")
console.assert(JSON.stringify(filterBetween(arr, 'chickadee', 'chimpanzee')) == JSON.stringify([]), "It should output an empty array")
console.assert((filterBetween(arr, 435, 'chimpanzee')) == "All inputs should be strings", "It should return an error message when any input is not a string")
console.assert((filterBetween(arr, 'chimp', 654)) == "All inputs should be strings", "It should return an error message when any input is not a string")