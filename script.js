document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('#slides-container > section');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    if(current > 0) {
      current--;
      showSlide(current);
    }
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    if(current < slides.length - 1) {
      current++;
      showSlide(current);
    }
  });

  showSlide(current);
});
