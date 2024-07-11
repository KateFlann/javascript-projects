const checkFive = require("../checkFive.js");
// const test = require("../checkFive.js");

describe("checkFive", function () {
  test("Answer is equal to 5.", function () {
    let result = checkFive(5);
    expect(result).toBe("5 is equal to 5.");
  });
});

describe("checkFive", function () {
  test("Answer is less than 5.", function () {
    let result = checkFive(2);
    expect(result).toBe("2 is less than 5.");
  });
});

describe("checkFive", function () {
  test("Descriptive feedback...", function () {
    let result = checkFive(9);
    expect(result).toBe("9 is greater than 5.");
  });
});
