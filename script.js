/* ================= MOBILE MENU ================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ================= TYPING EFFECT ================= */
const text = "Ahenkorah Listowel, Economics Professional";
let index = 0;
const typingEl = document.querySelector(".typing");

function type() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

/* ================= SKILL ANIMATION ================= */
const skills = document.querySelectorAll(".progress div");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.progress + "%";
    }
  });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));

/* ================= FORM VALIDATION ================= */
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", e => {
  e.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = "Please fill out all fields correctly.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Message sent successfully!";
  message.style.color = "green";
  form.reset();
});

/* ================= DARK MODE ================= */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* ================= BACK TO TOP ================= */
const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ================= SCROLL PROGRESS ================= */
const progress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  progress.style.width = (scrollTop / height) * 100 + "%";
});