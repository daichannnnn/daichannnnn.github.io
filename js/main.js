"use strict"

{
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const photo = document.getElementById("photo");
  const slides = photo.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove("hidden");
    next.classList.remove("hidden");

    if (currentIndex === 0) {
      prev.classList.add("hidden");
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add("hidden");
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    photo.style.transform = `translateX(${-100 * currentIndex}%)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => {
        currentIndex = i;
        updateDots();
        dots[currentIndex].classList.add("current");
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector("nav").appendChild(button);
    }

    dots[0].classList.add("current");
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove("current");
    });
    dots[currentIndex].classList.add("current");
  }

  updateButtons();
  setupDots();

  next.addEventListener("click", () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener("click", () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });
}