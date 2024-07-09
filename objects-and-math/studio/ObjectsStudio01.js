// Code your selectRandomEntry function here:

function selectRandomEntry(numberArray) {
  let index = Math.floor(Math.random() * numberArray.length);
  return numberArray[index];
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let selectThree = [];

while (selectThree.length < 3) {
  let selectedID = selectRandomEntry(idNumbers);
  if (!selectThree.includes(selectedID)) {
    selectThree.push(selectedID);
  }
}

console.log(selectThree);
// Code your buildCrewArray function here:

function buildCrewArray(numberID, candidateArray) {
  let crew = [];

  for (i = 0; i < candidateArray.length; i++) {
    if (numberID.includes(candidateArray[i].astronautID)) {
      crew.push(candidateArray[i]);
      console.log(crew);
    }
  }
  return crew;
}

// let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];

// Code your template literal and console.log statements:

let crew = buildCrewArray(selectThree, animals);
console.log(crew);

console.log(
  `${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`
);
