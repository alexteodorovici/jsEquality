// Method 3 : Using JSON.parse()

// Here we use the parse() method of JSON object.

// JSON is a built-in  javascript object and its parse() method parses a string as JSON and converts it into an object corresponding to the given text.
// So, if the string value is 'true', it is converted to a boolean object with value as true and false otherwise.

let stringValue = "true"; 
let boolValue = JSON.parse(stringValue); //returns true
console.log("result2 is: " + result2); //returns false