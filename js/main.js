$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//mixitup plugin
const buttonContainer= document.querySelector('.filter-image-container');
var mixer = mixitup(buttonContainer, {
    selectors: {
        control: '[data-ref="mix"]'
    }
});