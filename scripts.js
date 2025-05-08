// Typewriter effect for hero section
const typewriterTexts = [
  "Flutter Team Lead.",
  "Mobile App Developer.",
  "Web Developer.",
  "Crafting beautiful UIs with Flutter.",
  "Open to new opportunities!"
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
      setTimeout(typeWriter, 1100);
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
  setTimeout(typeWriter, isDeleting ? 55 : 110);
}
typeWriter();

// Populate About
document.getElementById('aboutText').innerHTML = aboutMe;

// Populate Skills with animated bars
const skillsContainer = document.getElementById('skillsList');
skills.forEach((skill, i) => {
  const el = document.createElement('div');
  el.className = 'skill-bar';
  el.style.animationDelay = `${i * 0.07 + 0.2}s`;
  el.innerText = skill;
  skillsContainer.appendChild(el);
});

// Populate Experience Timeline
const expContainer = document.getElementById('experienceList');
experience.forEach((exp, i) => {
  const entry = document.createElement('div');
  entry.className = 'timeline-entry';
  entry.style.animationDelay = `${i * 0.18 + 0.2}s`;
  entry.innerHTML = `
    <h3>${exp.title} @ ${exp.company}</h3>
    <div class="period">${exp.period}</div>
    <ul>${exp.details.map(d => `<li>${d}</li>`).join('')}</ul>
  `;
  expContainer.appendChild(entry);
});

// Populate Projects
const projContainer = document.getElementById('projectsList');
projects.forEach((proj, i) => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.style.animationDelay = `${i * 0.15 + 0.2}s`;
  card.innerHTML = `
    <img src="${proj.img}" alt="${proj.name}" onerror="this.src='https://img.icons8.com/color/96/flutter.png'"/>
    <h3>${proj.name}</h3>
    <div class="project-meta">${proj.year} &nbsp;|&nbsp; ${proj.stack}</div>
    <ul>${proj.description.map(d => `<li>${d}</li>`).join('')}</ul>
    <div class="project-links">
      ${proj.links.map(link => `<a href="${link.url}" target="_blank">${link.label}</a>`).join('')}
    </div>
  `;
  projContainer.appendChild(card);
});

// Populate Education
const eduContainer = document.getElementById('educationList');
education.forEach((edu, i) => {
  const card = document.createElement('div');
  card.className = 'education-card';
  card.style.animationDelay = `${i * 0.14 + 0.2}s`;
  card.innerHTML = `
    <b>${edu.degree}</b><br>
    <span>${edu.place}</span><br>
    <span>${edu.period} &nbsp;|&nbsp; ${edu.score}</span>
  `;
  eduContainer.appendChild(card);
});

// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark', document.body.classList.contains('dark') ? '1' : '0');
}
darkToggle.addEventListener('click', toggleDarkMode);
if (localStorage.getItem('dark') === '1') document.body.classList.add('dark');

// AOS Animation Init
AOS.init({
  duration: 1100,
  once: true,
  offset: 80
});