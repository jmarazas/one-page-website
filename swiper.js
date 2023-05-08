const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
            autoplay: false,
            loop: false
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
            autoplay: false

        },
    }
});