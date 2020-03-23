'use strict';
var c, currentScrollTop = 0,
navbar = $('nav');
$(window).scroll(function () {
    var a = $(window).scrollTop();
    console.log(a);
    var b = navbar.height();
    currentScrollTop = a;
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
            "src":"images/logo.svg"
        }).removeAttr("style");
        $(".mod").css("top","54px");
    }
    if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
        $("#logo").attr({
            "src":"images/logoS.svg",
            "style": "max-width:48px"
        });
        $("#header").css({
            "margin-top":"0px",
            "padding": "15px 85px"
        });
        $(".search-icon-svg").css("top","0px");
        $(".mod").css("top","-130px");
        
    } else if (c > currentScrollTop && !(a <= b)) {
        $("nav").css({
            "background":"#29292d"
        });
        $(".mod").css("top","30px");
        navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
});