//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let fuelLevel;
let astronautsAboard;
let shuttleAltitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  let fuelInput = input.question("Enter starting fuel level (greater than 5,000, but less than 30,000):");
    while (fuelInput > 30000 || fuelInput < 5000) {
      console.log("Invalid entry.")
      fuelInput = input.question("Enter starting fuel level (greater than 5,000, but less than 30,000):");
    }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
let astronautInput = input.question("Enter number of astronauts (1-7):");
  while (astronautInput > 7 || astronautInput < 1) {
   console.log("Invalid entry.")
   astronautInput = input.question("Enter number of astronauts (1-7):");
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. 
//Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

fuelLevel = Number(fuelInput);
astronautsAboard = Number(astronautInput);

while (fuelLevel >= 0) {
  fuelLevel = (fuelLevel - (astronautsAboard * 100))
  if (fuelLevel > 0) {
    shuttleAltitude = shuttleAltitude + 50
    console.log("Fuel level is now " + fuelLevel)
    console.log("Shuttle altitude is now " + shuttleAltitude)
  }
}

//let newAltitude = 


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`)

if (shuttleAltitude >= 2000) {
  console.log("Orbit achieved!")
} else {
  console.log("Failed to reach orbit.")
}