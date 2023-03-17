$(document).ready(function(){
    var container = document.querySelector('.filter-container');
    var mixer = mixitup(container, {
        selectors: {
            control: '[data-mixitup-control]'
        }   
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 3000,
        nav:true,
        navText: ['<ion-icon name="arrow-back"></ion-icon>','<ion-icon name="arrow-forward"></ion-icon>'],
        stagePadding:0,
        margin:0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
})



