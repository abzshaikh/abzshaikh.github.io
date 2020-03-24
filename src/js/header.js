'use strict';
var c, currentScrollTop = 0,
navbar = $('nav');
$(window).scroll(function () {
    /*checks if scrolled and then shows the header or hides it with animation based on scroll */
    var a = $(window).scrollTop();
    var b = navbar.height();
    currentScrollTop = a;

    /*this is if scrolled less than 200px */
    if(a <= 200){
        $("nav").css({
            "background":"transparent",
        });
        $("#header").css({
            "margin-top":"40px",
            "padding": "0 85px"
        });
        $(".search-icon-svg").css("top","-17px");
        $("#logo").attr({
            "src":"src/images/logo.svg"
        }).removeAttr("style");
        $(".mod").css("top","54px");
    }

    /*This is if scrolled up after scrolling down */
    if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
        $("#logo").attr({
            "src":"src/images/logoS.svg",
            "style": "max-width:48px"
        });
        $("#header").css({
            "margin-top":"0px",
            "padding": "15px 85px"
        });
        $(".search-icon-svg").css("top","0px");
        $(".mod").css("top","-130px");
        
    }
    /*This is if scrolled down */ 
    else if (c > currentScrollTop && !(a <= b)) {
        $("nav").css({
            "background":"#29292d"
        });
        $(".mod").css("top","30px");
        navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
});