const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

var pig = str.slice(3, str.length)
var latin = str.slice(0, 3)
var pigLatin= pig + latin

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The phrase ${str} is ${pigLatin} in Pig Latin.`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let wordInput = input.question("Please enter your phrase:");
let wordLengthInput = input.question("Please enter the number of letters that will be relocated:")

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (wordLengthInput > wordInput.length) {
    let PIG = wordInput.slice(3, wordInput.length)
    let LATIN = wordInput.slice(0,3)
    console.log(PIG + LATIN)
} else {
    let newPig = wordInput.slice(wordLengthInput, wordInput.length)
    let newLatin = wordInput.slice(0, wordLengthInput)
    let newPigLatin = newPig + newLatin
    console.log(`${wordInput} is ${newPigLatin} in Pig Latin.`);
}