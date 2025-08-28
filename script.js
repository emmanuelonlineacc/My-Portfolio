// Typing effect
const words = ["Web Developer", "Web Designer", "UX Designer"];
let i = 0; // word index
let j = 0; // letter index
let deleting = false;
let speed = 150; // typing/deleting speed

const typingSpan = document.getElementById("typing");

function typeEffect() {
  if (!typingSpan) return;
  let currentWord = words[i];

  if (!deleting) {
    typingSpan.textContent = currentWord.substring(0, j + 1);
    j++;
    if (j === currentWord.length) {
      deleting = true;
      speed = 100;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingSpan.textContent = currentWord.substring(0, j - 1);
    j--;
    if (j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(typeEffect, speed);
}
if (typingSpan) typeEffect();

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navright = document.getElementById("navright");

if (hamburger && navright) {
  hamburger.addEventListener("click", () => {
    navright.classList.toggle("active");
  });
}

// Back to Top button functionality
const backToTop = document.getElementById("backToTop");
window.onscroll = function () {
  if (backToTop) {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  }
};
if (backToTop) {
  backToTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-right li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Popup for More Info button
/*

const moreInfoBtn = document.getElementById("moreInfoBtn");
const aboutExtra = document.getElementById("aboutExtra");
const minimizeBtn = document.getElementById("minimizeBtn");

if (moreInfoBtn && aboutExtra && minimizeBtn) {
  moreInfoBtn.addEventListener("click", () => {
    aboutExtra.style.display = "block";
    moreInfoBtn.style.display = "none";
  });
  minimizeBtn.addEventListener("click", () => {
    aboutExtra.style.display = "none";
    moreInfoBtn.style.display = "inline-block";
  });
}
*/
