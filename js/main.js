$(document).ready(function(){


// var scroolAmount = $(window).scrollTop();

// console.log(scroolAmount)

$(window).scroll(function(){
    var scroolAmount = $(window).scrollTop();
    if (scroolAmount > 600 ){
        $("#menubar").addClass("fixed-menu");
        $('.top-btn').slideDown();
    }
    else{
        $('.top-btn').slideUp();
    }

});


$(".top-btn").click(function(){
    $('html').animate({ scrollTop: 0 }, 'slow');
})

});