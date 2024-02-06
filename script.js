let timer = setInterval(next, 5000);

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const carousel = document.querySelector(".carouselItems");
const items = document.querySelectorAll(".item");

let translateValue = 100 / Array.from(items).length;
let step = translateValue;

function next() {
  if (step === 100) {
    step = 0;
  }

  carousel.style.transform = `translateX(-${step}%)`;
  step += translateValue;

  updateElementBtns();

  clearInterval(timer);
  timer = setInterval(next, 5000);
}
nextBtn.addEventListener("click", next);

function prev() {
  if (step === translateValue) {
    step = 100 + translateValue;
  }

  step -= translateValue;
  carousel.style.transform = `translateX(-${step - translateValue}%)`;

  updateElementBtns();

  clearInterval(timer);
  timer = setInterval(next, 5000);
}
prevBtn.addEventListener("click", prev);

function updateElementBtns() {
  const elementBtns = Array.from(document.querySelectorAll(".elementBtns a"));

  elementBtns.forEach((element) => {
    element.classList.remove("active");
  });

  elementBtns[step / translateValue - 1].classList.add("active");
}
