// Volunteer data
const volunteers = [
  { name: "Anjali S", location: "chennai", skill: "Medical Aid" },
  { name: "Ravi K", location: "bangalore", skill: "Food Delivery" },
  { name: "Priya M", location: "chennai", skill: "Shelter Support" },
  { name: "Arun J", location: "bangalore", skill: "Transport Help" }
];

// Render volunteers
function renderVolunteers(data = volunteers) {
  const grid = document.getElementById('volunteerGrid');
  grid.innerHTML = "";

  data.forEach(volunteer => {
    const card = document.createElement('div');
    card.className = "volunteer-card";

    card.innerHTML = `
      <h3>👤 ${volunteer.name}</h3>
      <p><strong>📍 Location:</strong> ${volunteer.location}</p>
      <p><strong>🛠 Skill:</strong> ${volunteer.skill}</p>
    `;

    grid.appendChild(card);
  });
}

// Filter volunteers by location
function filterVolunteers() {
  const location = document.getElementById('locationFilter').value;
  const filtered = location === "all"
    ? volunteers
    : volunteers.filter(v => v.location === location);
  renderVolunteers(filtered);
}

// Handle help form submission
document.getElementById('helpForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const msg = document.getElementById('formMsg');
  msg.textContent = "✅ Your request has been received. A volunteer will contact you soon.";
  msg.style.color = "green";

  this.reset();

  setTimeout(() => {
    msg.textContent = "";
  }, 5000);
});

// Initialize on page load
window.onload = () => {
  renderVolunteers();
};
