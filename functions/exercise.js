function makeLine(size, character = "#") {
  let line = "";
  for (let i = 0; i < size; i++) {
    line += character;
  }
  return line;
}

console.log(makeLine(7));

function makeSquare(size, character) {
  let square = "";
  for (let i = 0; i < size; i++) {
    square += makeLine(size, character) + "\n";
  }
  return square.slice(0, -1);
}

console.log(makeSquare(5));
// function makeRectangle(width, height) {
//     console.log(`${makeline (width)} * ${height} /n`)
// }

function makeRectangle(width, height, character) {
  let rectangle = "";
  for (let i = 0; i < height; i++) {
    rectangle += makeLine(width, character) + "\n";
  }
  return rectangle.slice(0, -1);
}

console.log(makeRectangle(4, 7));

//   Now, go back and rewrite makeSquare to use makeRectangle.

function makeDownwardStairs(height, character) {
  let downStairs = "";
  for (let i = 0; i < height; i++) {
    downStairs += makeLine(i + 1, character) + "\n";
  }
  return downStairs.slice(0, -1);
}

console.log(makeDownwardStairs(10));

function makeSpaceLine(numSpaces, numChars, character = "#") {
  let line = "";
  for (let i = 0; i < numSpaces; i++) {
    line += " ";
  }
  for (let i = 0; i < numChars; i++) {
    line += character;
  }
  for (let i = 0; i < numSpaces; i++) {
    line += " ";
  }
  return line;
}

// console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height, character) {
  let triangle = "";
  for (let i = 0; i < height; i++) {
    triangle += makeSpaceLine(height - i - 1, 2 * i + 1, character) + "\n";
  }
  return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(7));

function reverse(str) {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}

function makeDiamond(height, character) {
  let diamond = "";

  for (let i = 0; i < height; i++) {
    diamond += makeSpaceLine(height - i - 1, 2 * i + 1, character) + "\n";
  }

  // for (let i = height - 1; i >= 0; i--) {
  //   diamond += makeSpaceLine(height - i - 1, 2 * i + 1, character) + "\n";
  // }

  diamond += reverse(diamond.slice(0, -1));

  return diamond;
}

console.log(makeDiamond(5, "?"));
