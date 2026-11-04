function slider() {
  const slides = document.querySelectorAll(".offer__slide");
  const prev = document.querySelector(".offer__slider-prev");
  const next = document.querySelector(".offer__slider-next");
  const current = document.querySelector("#current");
  const total = document.querySelector("#total");

  let slideIndex = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showSlides(index) {
    if (index >= slides.length) {
      slideIndex = 0;
    }
    if (index < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";

    if (slides.length < 10) {
      current.textContent = `0${slideIndex + 1}`;
    } else {
      current.textContent = slideIndex + 1;
    }
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
  }

  next.addEventListener("click", () => {
    plusSlides(1);
  });

  prev.addEventListener("click", () => {
    plusSlides(-1);
  });
}

export default slider;
