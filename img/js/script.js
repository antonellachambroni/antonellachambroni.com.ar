let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

document.querySelector('#cerrar-navbar').onclick = () =>{
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
};

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
};

var swiper = new Swiper(".trabajos-slider", {
  loop: true,
  grabCursor : true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    850: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".trabajos-slider", {
  loop: true,
  grabCursor : true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    850: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});


let activeIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-slide');
const totalCards = testimonialCards.length;
const mainTrack = document.querySelector('.testimonial-slider');

function moveSlider() {
  // Movemos el riel basado en el ancho de las tarjetas
  mainTrack.style.transform = `translateX(-${activeIndex * 100}%)`;

  // Gestionamos la visibilidad de la tarjeta activa
  testimonialCards.forEach((card, index) => {
    card.classList.remove('active');
    if (index === activeIndex) {
      card.classList.add('active');
    }
  });
}

// Botón Siguiente
document.getElementById('next-btn').addEventListener('click', () => {
  activeIndex = (activeIndex < totalCards - 1) ? activeIndex + 1 : 0;
  moveSlider();
});

// Botón Anterior
document.getElementById('prev-btn').addEventListener('click', () => {
  activeIndex = (activeIndex > 0) ? activeIndex - 1 : totalCards - 1;
  moveSlider();
});