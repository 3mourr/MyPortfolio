
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const phrases = ["Frontend Developer", "Bug Bounty Hunter"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 60;
let newPhraseDelay = 2000;



document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.getElementById("read-more-btn");
  const moreText = document.getElementById("more-text");

  if (readMoreBtn && moreText) {
    // Set initial state: hide the extra text
    moreText.style.display = "none";

    readMoreBtn.addEventListener("click", function () {
      if (moreText.style.display === "none") {
        moreText.style.display = "block";
        readMoreBtn.textContent = "Read Less";
      } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
      }
    });
  }
});




















if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
}

// Cursor blinking using JS only
let cursorBlinkInterval;

function startCursorBlinking() {
  if (cursorBlinkInterval) return; // prevent multiple intervals
  cursor.style.opacity = 1;
  cursorBlinkInterval = setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '1' ? '0' : '1';
  }, 500); // blink every 500ms
}

function stopCursorBlinking() {
  clearInterval(cursorBlinkInterval);
  cursorBlinkInterval = null;
  cursor.style.opacity = 1; // keep cursor visible while typing
}

function typeEffect() {
  if (!typedText || !cursor) return;

  const currentPhrase = phrases[phraseIndex];

  stopCursorBlinking(); // stop blinking when typing/erasing

  if (isDeleting) {
    typedText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    setTimeout(() => {
      isDeleting = true;
      typeEffect();
    }, newPhraseDelay);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, typingDelay);
  } else {
    setTimeout(typeEffect, isDeleting ? erasingDelay : typingDelay);
  }

  // Restart blinking when done typing or deleting
  if ((!isDeleting && charIndex === currentPhrase.length) || (isDeleting && charIndex === 0)) {
    startCursorBlinking();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (phrases.length) {
    startCursorBlinking();
    setTimeout(typeEffect, newPhraseDelay);
  }
});
const form = document.querySelector('form'); // Adjust selector if needed

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the page from reloading or jumping to top
  
  // Your code to handle the form submission goes here
  // e.g. get form data, send via AJAX, display message, etc.
});



