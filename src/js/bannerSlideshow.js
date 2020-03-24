$(document).ready(function(){

    /*using image slider for the main banner slider and applying various properties which are needed */
    var imgSlider = simpleslider.getSlider({
        container: document.getElementById('myslider'),
        prop: 'left',
        init: 759,
        show: 0,
        end: -759,
        unit: 'px',
        delay: 5,
        duration: 1
    });
});