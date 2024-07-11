const RPS = require("../RPS.js");

describe("RPS", function () {
  test("Tie", function () {
    let result = RPS("rock", "rock");
    expect(result).toBe("TIE!");
  });
});

describe("RPS", function () {
  test("Paper Beats Rock", function () {
    let result = RPS("rock", "paper");
    expect(result).toBe("Player 2 wins!");
  });
});

describe("RPS", function () {
  test("Scissors beats paper.", function () {
    let result = RPS("paper", "scissors");
    expect(result).toBe("Player 2 wins!");
  });
});

describe("RPS", function () {
  test("Rock beats scissors", function () {
    let result = RPS("scissors", "rock");
    expect(result).toBe("Player 2 wins!");
  });
});
