var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 4.3,
      spaceBetween: 10,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  },
});
