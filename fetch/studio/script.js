//TODO: Add Your Code Below
window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      const container = document.getElementById("container");
      for (i = 0; i < json.length; i++) {
        container.innerHTML += `
      <div class="astronaut">
    <div class="bio">
        <h3>${json[i].firstName} ${json[i].lastName}</h3>
        <ul>
        <li>Hours in space: ${json[i].hoursInSpace}</li>
        <li>Active: ${json[i].active}</li>
        <li>Skills: ${json[i].skills}</li>
        </ul>
    </div>
    <img class="avatar" src="${json[i].picture}">
</div>`;
      }
    });
  });
});

// Bonus #1: Display the astronauts sorted from most to least time in space.
// Return a comparison between hours in space in the list. If less return 1, else return -1
json.sort(function (a, b) {
  return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
});
edited;

______________________________________________________________;
// Bonus #2: Make the “Active: true” text green, for astronauts that are still active (active is true)
let active = astronaut.active ? "active" : "";

// Bonus #3
// const astronautCount  = document.getElementById('astronaut-count');
// astronautCount.innerHTML = `All ${json.length} floating in space, Astronaut's silent ballet, Limitless wonder.!`;
