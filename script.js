/*typing effect*/

const words = ["Web Developer", "Web Designer", "Freelancer", "UX Designer"];
let i = 0; // word index
let j = 0; // letter index
let deleting = false;
let speed = 150; // typing/deleting speed

const typingSpan = document.getElementById("typing");

function typeEffect() {
    let currentWord = words[i];
    
    if (!deleting) {
        typingSpan.textContent = currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length) {
            deleting = true;
            speed = 100; // pause before deleting
            setTimeout(typeEffect, 1000); // wait before erasing
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

typeEffect();


/*hamburger*/
const hamburger = document.getElementById("hamburger");
const navright = document.getElementById("navright");

hamburger.addEventListener("click",()=>{
    navright.classList.toggle("active");
});