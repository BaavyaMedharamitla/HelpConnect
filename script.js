// ---------------- THEME TOGGLE ----------------

const body = document.body;
const toggle = document.getElementById("themeToggle");
const circle = document.querySelector(".toggle-circle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.className = savedTheme;
}

updateToggle();

toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        body.classList.contains("light") ? "light" : "dark"
    );

    updateToggle();
});

function updateToggle() {
    circle.style.transform =
        body.classList.contains("light")
            ? "translateX(28px)"
            : "translateX(0)";
}

// ---------------- SCROLL ----------------

function scrollToRequest() {
    document.getElementById("request").scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

// ---------------- VOLUNTEERS ----------------

const volunteers = [
    {
        name: "Arjun Mehta",
        role: "Medical Response Specialist"
    },
    {
        name: "Priya Sharma",
        role: "Food Distribution Lead"
    },
    {
        name: "Ravi Nair",
        role: "Transport Coordination"
    },
    {
        name: "Meera Iyer",
        role: "Emergency Shelter Support"
    },
    {
        name: "Karthik Rao",
        role: "Rapid Logistics"
    },
    {
        name: "Sneha Das",
        role: "Crisis Assistance"
    }
];

const volunteerGrid = document.getElementById("volunteerGrid");

volunteers.forEach((v, index) => {
    const card = document.createElement("div");

    card.className = "feature-card";
    card.style.animationDelay = `${index * 0.12}s`;

    card.innerHTML = `
        <h3>${v.name}</h3>
        <p>${v.role}</p>
    `;

    volunteerGrid.appendChild(card);
});

// ---------------- FORM ----------------

const helpForm = document.getElementById("helpForm");
const notification = document.getElementById("notification");

helpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    notification.style.display = "block";
    notification.style.opacity = "0";
    notification.style.transform = "translateY(20px)";
    notification.style.background = "rgba(16,185,129,.18)";
    notification.style.border = "1px solid rgba(16,185,129,.35)";
    notification.style.color = "#10b981";

    notification.innerHTML =
        "Request submitted successfully. Matching nearest responder...";

    setTimeout(() => {
        notification.style.opacity = "1";
        notification.style.transform = "translateY(0)";
    }, 100);

    helpForm.reset();

    setTimeout(() => {
        notification.style.opacity = "0";

        setTimeout(() => {
            notification.style.display = "none";
        }, 400);
    }, 4500);
});

// ---------------- DASHBOARD TILT ----------------

const dashboard = document.querySelector(".live-dashboard");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 45;
    const y = (window.innerHeight / 2 - e.pageY) / 45;

    dashboard.style.transform = `
        rotateY(${x}deg)
        rotateX(${-y}deg)
    `;
});

// ---------------- REVEAL ON SCROLL ----------------

const revealElements = document.querySelectorAll(
    ".feature-card,.request-card,.live-dashboard"
);

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
});

function reveal() {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "all .9s ease";
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// ---------------- PARTICLE SYSTEM ----------------

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.45,
        dy: (Math.random() - 0.5) * 0.45
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

        ctx.fillStyle = body.classList.contains("light")
            ? "rgba(37,99,235,.28)"
            : "rgba(79,140,255,.35)";

        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(drawParticles);
}

drawParticles();

// ---------------- RESIZE ----------------

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
