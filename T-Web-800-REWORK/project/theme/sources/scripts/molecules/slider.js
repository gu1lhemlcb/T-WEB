/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/layout/menu
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
;('use strict')

import Glightbox from 'glightbox'

const Slider = {
  init: () => {
    const lightbox = Glightbox({ 
      autoplayVideos: false,
      moreLength: 0,
    });
    
    const slickSlides = Array.from(document.querySelectorAll(".mySwiper .slick-slide"))
    
    lightbox.on('slide_changed', (event) => {
      // const slide = slickSlides[event.current.index]
      // slide.classList.add("read-slide")
      $('.slider-nav').slick("slickGoTo", event.current.index)

    });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      infinite: false,
      asNavFor: '.slider-nav',
      adaptiveHeight: true,
    })
    
    $('.slider-nav').on("init", function(event, slick, currentSlide) {
      // console.log(slick, $(slick.$slides[0]))
      $(slick.$slides[0])[0].classList.add("read-slide")
    })

    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.slider-for',
      centerMode: false,
      focusOnSelect: true,
      infinite: false,
      prevArrow:
        '<div class="slick-prev"><svg class="icon"><use xlink:href="#icon-fleche-gauche" /></svg><span class="sr-only">Précédent</span></div>',
      nextArrow:
        '<div class="slick-next"><svg class="icon"><use xlink:href="#icon-fleche-droite" /></svg><span class="sr-only">Suivant</span></div>',
    })

    $('.slider-nav').on("afterChange", function(event, slick, currentSlide) {
      $(slick.$slides[currentSlide])[0].classList.add("read-slide")
    })
    $('.slider-nav').on("beforeChange", function(event, slick, currentSlide, nextSlide) {
      $(slick.$slides[nextSlide])[0].classList.add("read-slide")
      $(slick.$slides[currentSlide])[0].classList.remove("read-slide")
      $(slick.$slides[currentSlide])[0].classList.add("validated-slide")
    })
  },
}

export default Slider
