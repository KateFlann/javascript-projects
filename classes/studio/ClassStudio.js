//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.score = scores;
  }
  addScore(newScore) {
    this.score.push(newScore);
  }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let dog = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [72, 78, 62]);

console.log(bear.CrewCandidate);
console.log(dog.CrewCandidate);
console.log(gator.CrewCandidate);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bear.addScore(83);
console.log(bear.CrewCandidate);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
