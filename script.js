$(document).ready(function(){
    
    $(".carousel-control-next-icon").on("click", function(){
        
    });

    $(".fa-bars").on("click", function(){
        $(this).hide();
        $("nav .mobile-nav-2").show();
        $(".fa-xmark").show();
    });

    $(".fa-xmark").on("click", function(){
        $(this).hide();
        $("nav .mobile-nav-2").hide();
        $(".fa-bars").show();
    });

    // owl slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

})


