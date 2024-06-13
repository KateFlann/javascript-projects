// Declare and assign the variables below
let shuttleName	= "Determination";
let shuttleSpeedinMPH =	17500;
let marsDistanceinKM = 225000000;
let moonDistanceinKM =	384400;
let mileperKM =	0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName)
console.log(typeof shuttleSpeedinMPH)
console.log(typeof marsDistanceinKM)
console.log(typeof moonDistanceinKM)
console.log(typeof mileperKM)

// Calculate a space mission below

let milesToMars = marsDistanceinKM * mileperKM;
console.log(milesToMars);

let hoursToMars = milesToMars / shuttleSpeedinMPH;
console.log(hoursToMars);

let daysToMars = hoursToMars / 24;
console.log(daysToMars);

// Print the results of the space mission calculations below
console.log( shuttleName, "will take", daysToMars, "days to reach Mars." )

// Calculate a trip to the moon below
let milesToMoon = moonDistanceinKM * mileperKM;
console.log(milesToMoon);

let hoursToMoon = milesToMoon / shuttleSpeedinMPH;
console.log(hoursToMoon);

let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon);

// Print the results of the trip to the moon below
console.log( shuttleName, "will take", daysToMoon, "days to reach the moon." )
 