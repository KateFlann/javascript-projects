const launchcode = require("../index.js");

describe("Testing launchcode"),
  function () {
    //Write your unit tests here!

    test("check organization type", function () {
      expect(launchcode.organization).toEqual("nonprofit");
    });

    test("check executive director name", function () {
      expect(launchcode.ExecutiveDirector).toEqual("Jeff");
    });

    test("check cool employees", function () {
      expect(launchcode.percentageCoolEmployees).toEqual("100%");
    });

    test("returns an array of values 'Web Development', 'Data Analysis', 'Liftoff'.", function () {
      let output = launchcode.programsOffered;
      expect(output).toContain("Web Development");
      expect(output).toContain("Data Analysis");
      expect(output).toContain("Liftoff");
      expect(output.length).toEqual(3);
    });

    test("should return 'Launch!' when LaunchOutput is passed a number that is ONLY divisible by 2.", () => {
      let output = launchcode.launchOutput(2);
      expect(output).toEqual("Launch!");
    });

    test("should return 'Launch!' when LaunchOutput is passed a number that is ONLY divisible by 3.", () => {
      let output = launchcode.launchOutput(3);
      expect(output).toEqual("Code!");
    });

    test("should return 'Launch!' when LaunchOutput is passed a number that is ONLY divisible by 5.", () => {
      let output = launchcode.launchOutput(5);
      expect(output).toEqual("Rocks!");
    });

    test("should return 'Launch!' when LaunchOutput is passed a number that is ONLY divisible by 2 and 3.", () => {
      let output = launchcode.launchOutput(6);
      expect(output).toEqual("Launchcode!");
    });
  };
