function smoothScroll(target, duration) {
  let sections = document.querySelector(target);
  let sectionPosition = sections.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = sectionPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  function ease(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  }
  requestAnimationFrame(animation);
}

let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");

section1.addEventListener("click", function () {
  smoothScroll(".section2", 3000);
});
section2.addEventListener("click", function () {
  smoothScroll(".section1", 3000);
});
