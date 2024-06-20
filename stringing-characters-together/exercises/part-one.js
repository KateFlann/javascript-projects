let num = 1001;

//Returns 'undefined'.


//Use type conversion to print the length (number of digits) of an integer.
let converted = num.toString()
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if(converted.includes('.') ) {
    let newNumber = converted.length-1
    console.log(newNumber)
} else {
    console.log(converted.length)
}
