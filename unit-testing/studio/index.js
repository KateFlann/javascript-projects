let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: "100%",
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (num) {
    let message = {
      1: "Launch",
      2: "Code",
      3: "Rocks",
    };

    let LaunchCodeString = "";
    for (property in message) {
      if (num % property === 0) {
        LaunchCodeString += message[property];
      }
    }
    if (LaunchCodeString === "") {
      return "Rutabegas! That doesn't work.";
    } else {
      if (num % 2 === 0 && num % 5 === 0 && num % 3 !== 0) {
        return (LaunchCodeString += "! (Crash!!!!)");
      }
      return LaunchCodeString.trim() + "!";
    }
    // if (num % 2 === 0) {
    //   if (num % 3 === 0) {
    //     if (num % 5 === 0) {
    //       return "LaunchCode Rocks!";
    //     }
    //     return "LaunchCode!";
    //   }
    //   if (num % 5 === 0) {
    //     return "Launch Rocks! (CRASH!!!!)";
    //   }
    //   return "Launch!"
    // }
    // if (num % 3 === 0) {
    //   if (num %5 === 0) {
    //     return "Code Rocks!";
    //   }
    //   return "Code!"
    // }
    // if (num % 5 === 0) {
    //   return "Rocks!"
    // }
  },
};

// launchOutput() needs to meet the following conditions:
// When passed a number that is ONLY divisible by 2, return 'Launch!'
// When passed a number that is ONLY divisible by 3, return 'Code!'
// When passed a number that is ONLY divisible by 5, return 'Rocks!'
// When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'
// When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'
// When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'
// When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'
// When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'

module.exports = launchcode;
