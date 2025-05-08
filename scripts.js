// Typewriter effect
const typewriterTexts = [
  "Innovative Flutter Apps.",
  "Animated UIs That Wow.",
  "Fullstack Magic.",
  "Award-winning Freelancer.",
  "Let’s Build Your Next Big Thing!"
];
let tIndex = 0, charIndex = 0, isDeleting = false;
const typeTarget = document.getElementById('typewriter');
function typeWriter() {
  const current = typewriterTexts[tIndex];
  if (!isDeleting) {
    typeTarget.innerHTML = current.substring(0, charIndex + 1) + '<span class="caret"></span>';
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1200);
      return;
    }
  } else {
    typeTarget.innerHTML = current.substring(0, charIndex - 1) + '<span class="caret"></span>';
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      tIndex = (tIndex + 1) % typewriterTexts.length;
    }
  }
  setTimeout(typeWriter, isDeleting ? 70 : 110);
}
typeWriter();

// About
document.getElementById('aboutText').innerHTML = aboutMe;

// Skills
const skillsContainer = document.getElementById('skillsList');
skills.forEach(skill => {
  const el = document.createElement('div');
  el.className = 'skill-chip';
  el.innerText = skill;
  el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.13, duration: 0.21 }));
  el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1, duration: 0.21 }));
  skillsContainer.appendChild(el);
});

// Projects (with phone frame)
const projContainer = document.getElementById('projectsList');
projects.forEach((proj, i) => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="phone-frame">
      <img src="${proj.phone}" alt="${proj.name} Screenshot"/>
    </div>
    <h3>${proj.name}</h3>
    <div class="project-meta">${proj.year} • ${proj.stack}</div>
    <ul>${proj.description.map(d => `<li>${d}</li>`).join('')}</ul>
    <div class="project-links">
      ${proj.links.map(link => `<a href="${link.url}" target="_blank">${link.label}</a>`).join('')}
    </div>
  `;
  projContainer.appendChild(card);
  // Tilt on hover
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    gsap.to(card, { rotateY: x/18, rotateX: -y/18, duration: 0.22 });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.22 });
  });
});

// Freelance
const freelanceContainer = document.getElementById('freelanceList');
freelance.forEach(f => {
  const card = document.createElement('div');
  card.className = 'freelance-card';
  card.innerHTML = `<h4>${f.title}</h4><ul>${f.details.map(d => `<li>${d}</li>`).join('')}</ul>`;
  freelanceContainer.appendChild(card);
});

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark', document.body.classList.contains('dark') ? '1' : '0');
});
if (localStorage.getItem('dark') === '1') document.body.classList.add('dark');

// Animate sections on scroll
document.querySelectorAll('[data-animate]').forEach(sec => {
  gsap.to(sec, {
    scrollTrigger: {
      trigger: sec, start: "top 80%", once: true
    },
    opacity: 1, y: 0, scale: 1, duration: 1.1, delay: 0.2,
    onStart: () => sec.classList.add('animated')
  });
});

// Animated visit counter
const countEl = document.getElementById('visits');
function updateVisits(n) {
  new CountUp('visits', 0, n, 0, 2.1).start();
}
// Use localStorage for demo; in real use, connect to an API
let vis = Number(localStorage.getItem('portfolio_visits') || '0') + 1;
localStorage.setItem('portfolio_visits', vis);
updateVisits(vis);