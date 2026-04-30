// ---------------- THEME TOGGLE ----------------

const body = document.body;
const toggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.className = savedTheme;
} else {
    body.className = "dark";
}

toggle.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});


// ---------------- VOLUNTEERS ----------------

const volunteers = [
    {
        name: "Aarav Sharma",
        role: "Medical Responder",
        city: "Chennai"
    },
    {
        name: "Priya Nair",
        role: "Food Assistance",
        city: "Bangalore"
    },
    {
        name: "Rahul Menon",
        role: "Transport Support",
        city: "Hyderabad"
    },
    {
        name: "Meera Iyer",
        role: "Shelter Coordination",
        city: "Chennai"
    },
    {
        name: "Arjun Patel",
        role: "Emergency Logistics",
        city: "Mumbai"
    },
    {
        name: "Sneha Verma",
        role: "Rapid Response",
        city: "Delhi"
    }
];

const volunteerGrid = document.getElementById("volunteerGrid");

function renderVolunteers() {
    volunteerGrid.innerHTML = "";

    volunteers.forEach((volunteer, index) => {
        const card = document.createElement("div");

        card.classList.add("solution-card");
        card.style.animationDelay = `${index * 0.15}s`;

        card.innerHTML = `
            <h3>${volunteer.name}</h3>
            <p>${volunteer.role}</p>
            <span>${volunteer.city}</span>
        `;

        volunteerGrid.appendChild(card);
    });
}

renderVolunteers();


// ---------------- FORM ----------------

const helpForm = document.getElementById("helpForm");
const formMsg = document.getElementById("formMsg");

helpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    formMsg.textContent = "Request submitted successfully. A responder is being matched.";
    formMsg.style.color = "#10b981";
    formMsg.style.marginTop = "14px";

    helpForm.reset();

    setTimeout(() => {
        formMsg.textContent = "";
    }, 5000);
});


// ---------------- SCROLL REVEAL ----------------

const revealElements = document.querySelectorAll(
    ".solution-card, .impact-box, .request-panel, .dashboard-shell"
);

function revealOnScroll() {
    revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ---------------- PARALLAX ----------------

document.addEventListener("mousemove", (e) => {
    const orbs = document.querySelectorAll(".orb");

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const moveX = (x - 0.5) * (index + 1) * 30;
        const moveY = (y - 0.5) * (index + 1) * 30;

        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});


// ---------------- HERO FLOAT ----------------

const dashboard = document.querySelector(".dashboard-shell");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    dashboard.style.transform = `
        rotateY(${x}deg)
        rotateX(${-y}deg)
    `;
});


// ---------------- BUTTON INTERACTIONS ----------------

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.06)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});


// ---------------- LOADER EFFECT ----------------

window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "1";
    }, 100);
});
