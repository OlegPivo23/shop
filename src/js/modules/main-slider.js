import vars from "../vars/vars"


const bannerSlide = new Swiper(vars.$bannerSlider,{
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

