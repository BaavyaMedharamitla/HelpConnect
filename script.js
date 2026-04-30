const volunteers = [
  { name: "Anjali S", location: "Chennai", skill: "Medical Aid" },
  { name: "Ravi K", location: "Bangalore", skill: "Food Delivery" },
  { name: "Priya M", location: "Chennai", skill: "Shelter Support" },
  { name: "Arun J", location: "Bangalore", skill: "Transport Help" }
];

const grid = document.getElementById("volunteerGrid");
const filter = document.getElementById("locationFilter");

function renderVolunteers(data) {
  grid.innerHTML = "";

  data.forEach(v => {
    grid.innerHTML += `
      <div class="volunteer-card">
        <h3>${v.name}</h3>
        <p>📍 ${v.location}</p>
        <p>🛠 ${v.skill}</p>
      </div>
    `;
  });
}

filter.addEventListener("change", () => {
  const selected = filter.value;

  if(selected === "all"){
    renderVolunteers(volunteers);
  } else {
    renderVolunteers(
      volunteers.filter(v => v.location === selected)
    );
  }
});

document.getElementById("helpForm").addEventListener("submit", function(e){
  e.preventDefault();

  document.getElementById("formMsg").innerHTML =
    "✅ Request submitted successfully!";

  this.reset();
});

function animateCounter(id, target){
  let count = 0;
  const element = document.getElementById(id);

  const interval = setInterval(() => {
    count += Math.ceil(target / 80);

    if(count >= target){
      count = target;
      clearInterval(interval);
    }

    element.textContent = count;
  }, 30);
}

window.onload = () => {
  renderVolunteers(volunteers);

  animateCounter("requests", 1250);
  animateCounter("volunteersCount", 420);
  animateCounter("cities", 18);
};
