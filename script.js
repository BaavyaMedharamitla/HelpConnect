// THEME TOGGLE

const body = document.body;
const toggle = document.getElementById("themeToggle");
const circle = document.querySelector(".toggle-circle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme){
    body.className = savedTheme;
}

updateToggle();

toggle.addEventListener("click", () => {
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme","light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme","dark");
    }

    updateToggle();
});

function updateToggle(){
    if(body.classList.contains("light")){
        circle.style.transform = "translateX(28px)";
    } else {
        circle.style.transform = "translateX(0px)";
    }
}


// SCROLL TO REQUEST

function scrollToRequest(){
    document.getElementById("request").scrollIntoView({
        behavior:"smooth"
    });
}


// VOLUNTEERS

const volunteers = [
    {name:"Arjun Mehta", role:"Medical Response"},
    {name:"Priya Sharma", role:"Food Support"},
    {name:"Ravi Nair", role:"Transport Assistance"},
    {name:"Sneha Iyer", role:"Emergency Shelter"},
    {name:"Karthik Rao", role:"Crisis Logistics"},
    {name:"Meera Das", role:"Rapid Assistance"}
];

const volunteerGrid = document.getElementById("volunteerGrid");

volunteers.forEach(v => {
    const card = document.createElement("div");
    card.className = "feature-card";

    card.innerHTML = `
        <h3>${v.name}</h3>
        <p>${v.role}</p>
    `;

    volunteerGrid.appendChild(card);
});


// FORM SUBMISSION

const helpForm = document.getElementById("helpForm");
const notification = document.getElementById("notification");

helpForm.addEventListener("submit", function(e){
    e.preventDefault();

    notification.style.display = "block";
    notification.style.background = "rgba(16,185,129,.18)";
    notification.style.border = "1px solid rgba(16,185,129,.35)";
    notification.style.color = "#10b981";
    notification.innerHTML =
        "Request submitted successfully. Matching nearest responder...";

    helpForm.reset();

    setTimeout(() => {
        notification.style.display = "none";
    },5000);
});


// DASHBOARD TILT

const dashboard = document.querySelector(".live-dashboard");

document.addEventListener("mousemove", e => {
    const x = (window.innerWidth/2 - e.pageX)/35;
    const y = (window.innerHeight/2 - e.pageY)/35;

    dashboard.style.transform = `
        rotateY(${x}deg)
        rotateX(${-y}deg)
    `;
});


// REVEAL ON SCROLL

const cards = document.querySelectorAll(
    ".feature-card,.request-card,.live-dashboard"
);

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(50px)";
});

function revealCards(){
    cards.forEach(card=>{
        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){
            card.style.opacity="1";
            card.style.transform="translateY(0)";
            card.style.transition="all .9s ease";
        }
    });
}

window.addEventListener("scroll",revealCards);
revealCards();


// PARTICLE BACKGROUND

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2+1,
        dx:(Math.random()-0.5)*0.5,
        dy:(Math.random()-0.5)*0.5
    });
}

function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(79,140,255,.45)";
        ctx.fill();

        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0||p.x>canvas.width)p.dx*=-1;
        if(p.y<0||p.y>canvas.height)p.dy*=-1;
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener("resize",()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
});
