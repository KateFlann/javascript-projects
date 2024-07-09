// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  let circumference = Math.round(2 * Math.PI * radius);
  return circumference;
}

// Code your missionDuration function here:
function missionDuration(
  orbitsCompleted,
  orbitRadius = 2000,
  orbitalSpeed = 28000
) {
  // Set the default radius to 2000 km  orbitRadius = 2000
  // set the default orbital speed to 28000 km/hr. orbitalSpeed = 28000

  let orbitsCircumference = orbitCircumference(orbitRadius);

  let duration = orbitsCircumference / orbitalSpeed;
  // time (missionDuration) = distance/speed

  let result = Math.round(duration * orbitsCompleted * 100) / 100;

  return result;
}

// let crew = buildCrewArray(selectThree, animals);
// console.log(crew);

// console.log(
//   `${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`
// );
let orbitalSpeed = 2000;
let result = missionDuration(5);

console.log(
  `The mission will travel ${orbitalSpeed} km around the planet, and it will take ${result} hours to complete.`
);

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(numberArray) {
  let index = Math.floor(Math.random() * numberArray.length);
  return numberArray[index];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, hours) {
  let oxygenUsed = Math.round(candidate.o2Used(hours) * 1000) / 1000;
  return oxygenUsed;
}

// Candidate data & crew array.
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let crew = [candidateA, candidateC, candidateE];

let spaceWalkLength = missionDuration(3);
for (i = 0; i < crew.length; i++) {
  console.log(
    `${
      crew[i].name
    } will perform the spacewalk, which will last ${spaceWalkLength} hours and require ${oxygenExpended(
      crew[i],
      spaceWalkLength
    )} kg of oxygen.`
  );
}
