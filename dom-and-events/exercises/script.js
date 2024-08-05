function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Put your code for the exercises here.

  button.addEventListener("click", function (event) {
    paragraph.innerHTML = "Houston! We have liftoff!";
  });

  missionAbort.addEventListener("mouseover", function (event) {
    missionAbort.style.background = "red";
  });

  missionAbort.addEventListener("mouseout", function (event) {
    missionAbort.style.background = "";
  });

  missionAbort.addEventListener("click", function (event) {
    let answer = window.confirm("Are you sure you want to abort the mission?");
    if (answer === true) {
      paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
    }
  });
}

window.addEventListener("load", init);
