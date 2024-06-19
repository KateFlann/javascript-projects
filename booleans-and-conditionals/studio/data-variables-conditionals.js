// Initialize Variables below

let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius	= -225
let minimumFuelTemp	= -300
let maximumFuelTemp = -150
let fuelLevel = 100
let weatherStatus =	"clear"
let preparedForLiftOff = true


if ((astronautCount <= 7) && 
(astronautStatus === "ready") && 
(totalMassKg < maximumMassLimit) && 
(fuelTempCelsius <= -150 && fuelTempCelsius >= -300) && 
(fuelLevel === 100) && 
(weatherStatus === "clear")) {
    preparedForLiftOff = true
} else {
    preparedForLiftOff = false
}


// Verify shuttle launch can proceed based on above conditions


if (preparedForLiftOff) {
    console.log(date + " " + time);
    console.log("Astronaut Count: "+astronautCount)
    console.log("Crew Mass Kg: "+crewMassKg)
    console.log("Fuel Mass Kg: "+fuelMassKg)
    console.log("Shuttle Mass Kg: "+shuttleMassKg)
    console.log("Total Mass Kg: "+totalMassKg)
    console.log("Fuel Temp Celsius: "+fuelTempCelsius)
    console.log("Weather Status: "+weatherStatus)

    console.log("Have a Safe Flight!")
}


