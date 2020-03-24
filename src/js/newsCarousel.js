$(document).ready(function(){

    /*Used flickity carousal for news carousal */

    /*Initialised the carousal on the element with various properties */
    var $carousel = $('.carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        freeScroll: false,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        pageDots: false,
    });

    //click handler for previous arrow button for previous slide
    $('.slider-arrow-left').on( 'click', function() {
        $carousel.flickity('previous');
    });

    //click handler for next arrow button for next slide
    $('.slider-arrow-right').on( 'click', function() {
        $carousel.flickity('next');
    });

    //checks if the slide has reached first or last slide and changes the arrow color to show it as disabled
    $carousel.on( 'change.flickity', function( event, index ) {
        switch (index) {
            case 0:
                $(".slider-arrow-left").css("color","#5b5b5b");
            break;
            case 13:
                $(".slider-arrow-right").css("color","#5b5b5b");
            break;
        
            default:
                $(".slider-arrow-left").css("color","#ffffff");
                $(".slider-arrow-right").css("color","#ffffff");
                break;
        }
    });

    /*animation on hover of the news slides and changing the border color of slides*/
    $( ".news-container" )
        .mouseover(function() {
            $(this).css("border-color","#AFB478");
            $(this).find(".news-hover-shade").css({"background":"rgba(0, 0, 0, 0.5)","opacity":"1"});
            $(this ).find(".news-text").removeClass("scale-up-center").addClass("scale-down-center");
        })
        .mouseout(function() {
            $(this).css("border-color","#313133");
            $(this).find(".news-hover-shade").css({"background":"transparent","opacity":"0"});
            $(this ).find(".news-text").removeClass("scale-down-center").addClass("scale-up-center");
    });
});