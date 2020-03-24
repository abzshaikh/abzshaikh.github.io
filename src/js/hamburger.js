/*This function is called when the hambuger curtain starts opening*/
function moveSlideCurtain(){
    $("#slide-curtain").animate({left: '0px'});
    $(".menu, .menu-text").attr("data-status","open");
    $(".bar").css("background","#1A1A1C");
    $(".menu-text").css("color","#1A1A1C");
    
    setTimeout(function(){
        $("body").css("overflow","visible");
    },100);
    
}

/*This function is called when the hamburger curtain is closed */
function resetSlideCurtain(){
    $("#slide-curtain").animate({left: '400px'});
    $(".menu, .menu-text").attr("data-status","close");
    $(".bar").css("background","#FFF");
    $(".menu-text").css("color","#FFF");

}

/*This function is called when the hamburger curtain starts to close */
function closeSlideCurtain (){
    $(".topbar").css("top","20px");
    $(".bottombar").css("top","0px");
    setTimeout(function(){
        $(".bar:nth-child(1)").removeClass("topbar").addClass("first");
        $(".bar:nth-child(2)").removeClass("middlebar").addClass("second");
        $(".bar:nth-child(3)").removeClass("bottombar").addClass("third");
        $(".first").css("top","0px");
        $(".third").css("top","20px");
        $("#menu-overlay").hide();
    },600);
}

/*Obj of hamburger menu with various peoperties */
var obj = {
    edge: 'right',
    inDuration: 500,
    outDuration: 500,
    onOpenStart: moveSlideCurtain,
    onCloseEnd: resetSlideCurtain,
    onCloseStart: closeSlideCurtain,
}

/*The hamburger menu is initialised using the object passed */
$('.sidenav').sidenav(obj);

/*This in the click handler of the hamburger menu button*/
$(".menu, .menu-text").on("click",function(){

    /*Applies overlay */
    $("#menu-overlay").show();
    
    status = $(this).attr("data-status");

    /*checks the status of the hambuger menu and then executes code based on the status */
    if( status == "close"){
        $(".first").css("top","10px");
        $(".third").css("top","10px");
        $(".bar:nth-child(1)").addClass("topbar").removeClass("first");
        $(".bar:nth-child(2)").addClass("middlebar").removeClass("second");
        $(".bar:nth-child(3)").addClass("bottombar").removeClass("third");
        $('.sidenav').sidenav("open");
        
    }
    else{
        
        $(".topbar").css("top","20px");
        $(".bottombar").css("top","0px");
        setTimeout(function(){
            $(".bar:nth-child(1)").removeClass("topbar").addClass("first");
            $(".bar:nth-child(2)").removeClass("middlebar").addClass("second");
            $(".bar:nth-child(3)").removeClass("bottombar").addClass("third");
            $(".first").css("top","0px");
            $(".third").css("top","20px");
            $('.sidenav').sidenav("close");
            $("#menu-overlay").hide();
        },600);   
    }
});

/*Closes the hamburger menu on click of overlay */
$("#menu-overlay").on("click",function(){
    $('.sidenav').sidenav("close");
});

/*dash animation on hover of dash inside hamburger menu */
$( ".list-content" )
    .mouseover(function() {
    $(this ).find(".dash").addClass("stretch");
    $(this).css("color","#AFB478");
    })
    .mouseout(function() {
    $(this ).find(".dash").removeClass("stretch");
    $(this).css("color","#1A1A1C");
    });