$(document).ready(function(){
  
$('.slider-active').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    smartSpeed:1500,
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
});
    
    
    $('.test-active').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed:1500,
    items:1,
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
});
    
});