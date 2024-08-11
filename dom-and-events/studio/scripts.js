// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
  takeoff.addEventListener("click", function (event) {
    let answer = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (answer === true) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style["background-color"] = "blue";
      spaceShuttleHeight.innerHTML = "10000";
    }
  });

  landing.addEventListener("click", function (event) {
    let answer = window.confirm(
      "The shuttle is landing. Landing gear engaged."
    );
    if (answer === true) {
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackground.style = "green";
      spaceShuttleHeight.innerHTML = "0";
    }
  });

  missionAbort.addEventListener("click", function (event) {
    let answer = window.confirm("Confirm that you want to abort the mission.");
    if (answer === true) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style = "green";
      spaceShuttleHeight.innerHTML = "0";
    }
  });

  up.addEventListener("click", function (event) {
    let position = parseInt(rocket.style.top) || 0;
    let template = `${position - 10}px`;
    window.alert(template);
    rocket.style.top = `${position - 10}px`;
  });

  down.addEventListener("click", function (event) {});

  left.addEventListener("click", function (event) {
    rocket.x -= 10;
  });

  right.addEventListener("click", function (event) {
    let position = parseInt(rocket.style.left) || 0;
    let template = `${position + 10}px`;
    window.alert(template);
    rocket.style.left = `${position + 10}px`;
  });
}

window.addEventListener("load", init);
