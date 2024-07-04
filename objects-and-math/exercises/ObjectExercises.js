let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronaudID: 1,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  astronaudID: 2,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let chimp = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronaudID: 3,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let beagle = {
  name: "Leroy",
  species: "canis lupis",
  mass: 14,
  age: 5,
  astronaudID: 4,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let waterBear = {
  name: "Almina",
  species: "tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronaudID: 5,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

function crewReports(animal) {
  console.log(`${animal.name} is a ${animal.species}. 
They are ${animal.age} years old and ${animal.mass} kilograms.
Their ID is ${animal.astronaudID}.`);
}

crewReports(waterBear);

spaceAnimals = [superChimpOne, salamander, chimp, beagle, waterBear];

function fitnessTest(array) {
  let stepsPerAnimal = [];
  let turnsPerAnimal = [];
  let results = [];

  for (i = 0; i < array.length; i++) {
    stepsPerAnimal[i] = 0;
    turnsPerAnimal[i] = 0;
    while (stepsPerAnimal[i] < 20) {
      let distanceTraveled = array[i].move();
      stepsPerAnimal[i] += distanceTraveled;
      turnsPerAnimal[i]++;
    }
    results.push(
      `${array[i].name} took ${turnsPerAnimal[i]} turns to take 20 steps.`
    );
  }
  return results;
}

let finalResults = fitnessTest(spaceAnimals);

for (i = 0; i < finalResults.length; i++) {
  console.log(finalResults[i]);
}
