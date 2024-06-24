let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

console.log(protoArray1.includes(",", ";", " "))
console.log(protoArray2.includes(",", ";", " "))
console.log(protoArray3.includes(",", ";", " "))
console.log(protoArray4.includes(",", ";", " "))
//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check;
	let output;

	
	//TODO: 2. write the code required for this step

		


	if (protoArray1.includes(",")) {
		let newArray1 = protoArray1.split(",").reverse().join(",")
		console.log(newArray1)
	} 

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {
	let check;
	let output;

//TODO: write the code required for this step

if (protoArray2.includes(";")) {
		//split it into an array, alphabetize the entries, and then join the array into a new hyphen-separated string.
		let newArray2 = protoArray2.split(";").sort().join("-")
		console.log(newArray2)
}
  
	return output;
}

//4)
function reverseSpaces() {
	let check;
	let output;
  //TODO: write the code required for this step

  if (protoArray3.includes(" ")) {
	//split it into an array, alphabetize the entries, and then join the array into a new hyphen-separated string.
	let newArray3 = protoArray3.split(" ").sort().reverse().join(" ")
	console.log(newArray3)

	return output;
}
}

//5)
function commaSpace() {
	let check;
	let output;
	//TODO: write the code required for this step
  
	if (protoArray4.includes(", ")) {
		let newArray4 = protoArray4.split(", ").reverse().join(",")
		console.log(newArray4)
	} 
	
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
}
