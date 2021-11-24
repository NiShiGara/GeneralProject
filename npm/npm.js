var casual = require('casual');

// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism
var sentence = casual.sentence;

// Generate random city name
var city = casual.city;
var text = casual.text                   // 'Nemo tempore natus non accusamus eos placeat nesciunt. et fugit ut odio nisi dolore non ... (long text)'
var desc = casual.description
console.log(city);
console.log(sentence);
console.log(text);
console.log(desc);