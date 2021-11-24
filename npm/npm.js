var casual = require('casual');

// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism
var sentence = casual.sentence;

// Generate random city name
var city = casual.city;

console.log(city);
console.log(sentence);