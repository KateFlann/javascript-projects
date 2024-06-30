//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let arguments = function (something) {
  if (typeof something === "number") {
    return something * 3;
  } else if (typeof something === "string") {
    return "ARRR!";
  } else {
    return something;
  }
};

console.log(arguments(3));

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ["Elocution", 21, "Clean teeth", 100];

let arguments2 = function (item) {
  if (typeof item === "number") {
    return item * 3;
  } else if (typeof item === "string") {
    return "ARRR!";
  } else {
    return item;
  }
};

let changes = arr.map(arguments2);

console.log(arr);
console.log(changes);

// let nums = [3.14, 42, 4811];

// let timesTwo = function (n) {
//     return n*2;
// };

// let doubled = nums.map(timesTwo);

// console.log(nums);
// console.log(doubled);
