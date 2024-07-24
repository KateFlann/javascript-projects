//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }

  average() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    return sum / this.scores.length;
  }

  status() {
    let status = "";
    if (this.average() >= 90) {
      status = "Accepted";
    } else if (this.average() >= 80 && this.average() <= 89) {
      status = "Reserve";
    } else if (this.average() >= 70 && this.average() <= 79) {
      status = "Probationary";
    } else if (this.average() <= 69) {
      status = "Rejected";
    }

    return `${
      this.name
    } earned an average test score of ${this.average()}% and has a status of ${status}.`;
  }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let dog = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [72, 78, 62]);

console.log(bear);
console.log(dog);
console.log(gator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//should log all scores plus 83
bear.addScore(83);
console.log(bear);

//average should be 92.7.
console.log(dog.average());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
console.log(bear.status());
console.log(dog.status());
console.log(gator.status());
