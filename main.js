const moreBtn = document.getElementById('more-btn');
const stepsTop = document.getElementById('steps-top').position().top;
const body = document.querySelector('body');


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});