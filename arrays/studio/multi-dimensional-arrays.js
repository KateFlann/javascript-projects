const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let food1 = food.split(",").sort()
let equipment1 = equipment.split(",").sort()
let pets1 = pets.split(",").sort()
let sleepAids1 = sleepAids.split(",").sort()

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = []
let cargoHold1 = cargoHold.push(food1, equipment1, pets1, sleepAids1)
console.log(cargoHold1)

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let info = input.question("Please select a cabinet, 0-3, within the cargoHold.");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (info > 3) {
    console.log(`Invalid number.`)
} else {
    console.log(`The contents of cabinet ${info} are ${cargoHold[info]}`)
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let info2 = input.question("Please select an item from the CargoHold by providing 2 numbers within [][].")