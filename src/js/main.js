$(document).ready(function(){

    /* The variables store the position of the respective div selected using the class
       It is used for showing the div with animation when the scroll reaches that particular div*/
    var offsetTop = $(".img-row-one").offset().top-500;
    var offsetTop1 = $(".img-row-two").offset().top-500;
    var offsetTop2 = $(".concept-row-one").offset().top-500;
    var offsetTop3 = $(".concept-row-two").offset().top-500;
    var offsetTop4 = $(".concept-row-three").offset().top-500;
    var offsetTop5 = $(".online-store-one").offset().top-500;
    var offsetTop6 = $(".online-store-two").offset().top-500;
    var offsetTop7 = $(".news-container-row").offset().top-500;
    var offsetTop8 = $(".footer-row").offset().top-700;


    /* The variables store the particular element selected using the class,
       The startPosition stores the starting position of that element
       It is used to move the element horizontally on scroll.
       speed is used to control the movement of the element*/
    var $horizontal = $('.moving-text-container');
    var $lefthorizontal = $('.moving-text-container-left');
    var startPosition = $horizontal.position().left;
    var speed = 8;

    $(window).scroll(function() {

        /*Here it checks if the scroll has reached the element and applies the animation class*/
        var scrollTop = $(window).scrollTop();
        if (scrollTop > offsetTop) {
            $(".img-row-one").css("opacity","1").fadeIn(200).addClass("scale-in-hor-left");
        }
        if (scrollTop > offsetTop1) {
            $(".img-row-two").css("opacity","1").fadeIn(200).addClass("scale-in-hor-left");
        }
        if (scrollTop > offsetTop2) {
            $(".concept-row-one").css("opacity","1").fadeIn(200).addClass("scale-in-hor-left");
        }
        if (scrollTop > offsetTop3) {
            $(".concept-row-two").css("opacity","1").fadeIn(200).addClass("scale-in-hor-right");
        }
        if (scrollTop > offsetTop4) {
            $(".concept-row-three").css("opacity","1").fadeIn(200).addClass("scale-in-hor-right");
        }
        if (scrollTop > offsetTop5) {
            $(".online-store-one").css("opacity","1").fadeIn(200).addClass("fade-in-bottom");
        }
        if (scrollTop > offsetTop6) {
            $(".online-store-two").css("opacity","1").fadeIn(200).addClass("fade-in-bottom");
        }
        if (scrollTop > offsetTop7) {
            $(".news-container-row").css("opacity","1").fadeIn(200).addClass("fade-in-bottom");
        }
        if (scrollTop > offsetTop8) {
            $(".footer-row").css("opacity","1").fadeIn(200).addClass("fade-in-bottom");
        }

        /*Here the element is moved horizontally on scroll */
        var st = $(this).scrollTop();
        var newPos = (st * (speed/100)) + startPosition;
        $horizontal.css({'left': newPos});
        $lefthorizontal.css({"left":newPos-1000});
    });
   
    /*Applying the animation class on hover of dash*/
    $( ".dash-reduce-container" )
        .mouseover(function() {
        $(this ).find(".dash-line").addClass("scale-out-hor-right");
        })
        .mouseout(function() {
        $(this ).find(".dash-line").removeClass("scale-out-hor-right").addClass("scale-in-hor-right");
    });

    /*Applying the animation class on hover of dash*/
    $( ".img-shade-container, .img-text" )
        .mouseover(function() {
        $(this ).siblings(".dash-reduce-container").find(".dash-line").addClass("scale-out-hor-right");
        })
        .mouseout(function() {
        $(this ).siblings(".dash-reduce-container").find(".dash-line").removeClass("scale-out-hor-right").addClass("scale-in-hor-right");
    });


    /*Moving the text vertically on hover of element*/
    $( ".img-text" )
        .mouseover(function() {
        $(this).find("span:nth-child(1)").css("top","-43px");
        $(this).find("span:nth-child(2)").css("top","60px");
        $(this).find("span:nth-child(3)").css("top","-70px");
        $(this).find("span:nth-child(4)").css("top","75px");
        $(this).find("span:nth-child(5)").css("top","-60px");
        $(this).find("span:nth-child(6)").css("top","50px");
        $(this).find("span:nth-child(7)").css("top","-50px");
        $(this).find("span:nth-child(8)").css("top","110px");
        $(this).find("span:nth-child(9)").css("top","-50px");
        $(this).find("span:nth-child(10)").css("top","33px");
        })
        .mouseout(function() {
        $(this).find("span:nth-child(1)").css("top","0px");
        $(this).find("span:nth-child(2)").css("top","0px");
        $(this).find("span:nth-child(3)").css("top","0px");
        $(this).find("span:nth-child(4)").css("top","0px");
        $(this).find("span:nth-child(5)").css("top","0px");
        $(this).find("span:nth-child(6)").css("top","0px");
        $(this).find("span:nth-child(7)").css("top","0px");
        $(this).find("span:nth-child(8)").css("top","0px");
        $(this).find("span:nth-child(9)").css("top","0px");
        $(this).find("span:nth-child(10)").css("top","0px");
    });

    /*Moving the text vertically on hover of element*/
    $( ".img-shade-container")
        .mouseover(function() {
        $(this).siblings(".img-text").find("span:nth-child(1)").css("top","-43px");
        $(this).siblings(".img-text").find("span:nth-child(2)").css("top","60px");
        $(this).siblings(".img-text").find("span:nth-child(3)").css("top","-70px");
        $(this).siblings(".img-text").find("span:nth-child(4)").css("top","75px");
        $(this).siblings(".img-text").find("span:nth-child(5)").css("top","-60px");
        $(this).siblings(".img-text").find("span:nth-child(6)").css("top","50px");
        $(this).siblings(".img-text").find("span:nth-child(7)").css("top","-50px");
        $(this).siblings(".img-text").find("span:nth-child(8)").css("top","110px");
        $(this).siblings(".img-text").find("span:nth-child(9)").css("top","-50px");
        $(this).siblings(".img-text").find("span:nth-child(10)").css("top","33px");
        })
        .mouseout(function() {
        $(this).siblings(".img-text").find("span:nth-child(1)").css("top","0px");
        $(this).siblings(".img-text").find("span:nth-child(2)").css("top","0px");
        $(this).siblings(".img-text").find("span:nth-child(3)").css("top","0px");
        $(this).siblings(".img-text").find("span:nth-child(4)").css("top","0px");
        $(this).siblings(".img-text").find("span:nth-child(5)").css("top","0px");
        $(this).siblings(".img-text").find("span:nth-child(6)").css("top","0px");
        $(this).siblings(".img-text").find("span:nth-child(7)").css("top","0px");
        $(this).siblings(".img-text").find("span:nth-child(8)").css("top","0px");
        $(this).siblings(".img-text").find("span:nth-child(9)").css("top","0px");
        $(this).siblings(".img-text").find("span:nth-child(10)").css("top","0px");
    });

    /*Moving the text vertically on hover of element and changing background color of body*/
    $( ".concept-block")
        .mouseover(function() {
            $("body").css("background","#9e8c7f");
        $(this).siblings("div").find("span:nth-child(1)").css("top","-53px");
        $(this).siblings("div").find("span:nth-child(2)").css("top","60px");
        $(this).siblings("div").find("span:nth-child(3)").css("top","-70px");
        $(this).siblings("div").find("span:nth-child(4)").css("top","75px");
        $(this).siblings("div").find("span:nth-child(5)").css("top","-60px");
        $(this).siblings("div").find("span:nth-child(6)").css("top","50px");
        $(this).siblings("div").find("span:nth-child(7)").css("top","-50px");
        $(this).siblings("div").find("span:nth-child(8)").css("top","70px");
        $(this).siblings("div").find("span:nth-child(9)").css("top","-30px");
        $(this).siblings("div").find("span:nth-child(10)").css("top","20px");
        })
        .mouseout(function() {
        $(this).siblings("div").find("span:nth-child(1)").css("top","0px");
        $(this).siblings("div").find("span:nth-child(2)").css("top","0px");
        $(this).siblings("div").find("span:nth-child(3)").css("top","0px");
        $(this).siblings("div").find("span:nth-child(4)").css("top","0px");
        $(this).siblings("div").find("span:nth-child(5)").css("top","0px");
        $(this).siblings("div").find("span:nth-child(6)").css("top","0px");
        $(this).siblings("div").find("span:nth-child(7)").css("top","0px");
        $(this).siblings("div").find("span:nth-child(8)").css("top","0px");
        $(this).siblings("div").find("span:nth-child(9)").css("top","0px");
        $(this).siblings("div").find("span:nth-child(10)").css("top","0px");
        $("body").css("background","#1A1A1C");
    });

    /*Moving the text vertically on hover of element and changing background color of body*/
    $( ".concept-brand")
        .mouseover(function() {
            $("body").css("background","#9e8c7f");
        $(this).find("span:nth-child(1)").css("top","-53px");
        $(this).find("span:nth-child(2)").css("top","60px");
        $(this).find("span:nth-child(3)").css("top","-70px");
        $(this).find("span:nth-child(4)").css("top","75px");
        $(this).find("span:nth-child(5)").css("top","-60px");
        $(this).find("span:nth-child(6)").css("top","50px");
        $(this).find("span:nth-child(7)").css("top","-50px");
        $(this).find("span:nth-child(8)").css("top","70px");
        $(this).find("span:nth-child(9)").css("top","-30px");
        $(this).find("span:nth-child(10)").css("top","65px");
        $(this).find("span:nth-child(11)").css("top","-40px");
        $(this).find("span:nth-child(12)").css("top","61px");
        $(this).find("span:nth-child(13)").css("top","-45px");
        $(this).find("span:nth-child(14)").css("top","85px");
        })
        .mouseout(function() {
        $(this).find("span:nth-child(1)").css("top","0px");
        $(this).find("span:nth-child(2)").css("top","0px");
        $(this).find("span:nth-child(3)").css("top","0px");
        $(this).find("span:nth-child(4)").css("top","0px");
        $(this).find("span:nth-child(5)").css("top","0px");
        $(this).find("span:nth-child(6)").css("top","0px");
        $(this).find("span:nth-child(7)").css("top","0px");
        $(this).find("span:nth-child(8)").css("top","0px");
        $(this).find("span:nth-child(9)").css("top","0px");
        $(this).find("span:nth-child(10)").css("top","0px");
        $(this).find("span:nth-child(11)").css("top","0px");
        $(this).find("span:nth-child(12)").css("top","0px");
        $(this).find("span:nth-child(13)").css("top","0px");
        $(this).find("span:nth-child(14)").css("top","0px");
        $("body").css("background","#1A1A1C");
    });

    /*Applying the animation class on hover of dash and darkening the image background of online stores images*/
    $( ".online-store-img .shade" )
        .mouseover(function() {
        $(this ).css("background","rgba(0, 0, 0, 0.5)");
        $(this ).siblings(".dash-reduce-container").find(".dash-line").addClass("scale-out-hor-right");
        })
        .mouseout(function() {
        $(this ).css("background","rgba(0, 0, 0, 0.25)");
        $(this ).siblings(".dash-reduce-container").find(".dash-line").removeClass("scale-out-hor-right").addClass("scale-in-hor-right");
    });

});