function moveSlideCurtain(){
    $("#slide-curtain").animate({left: '0px'});
    $(".menu, .menu-text").attr("data-status","open");
    $(".bar").css("background","#1A1A1C");
    $(".menu-text").css("color","#1A1A1C");
    
    setTimeout(function(){
        $("body").css("overflow","visible");
    },100);
    
}
function resetSlideCurtain(){
    $("#slide-curtain").animate({left: '400px'});
    $(".menu, .menu-text").attr("data-status","close");
    $(".bar").css("background","#FFF");
    $(".menu-text").css("color","#FFF");

}
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
var obj = {
    edge: 'right',
    inDuration: 500,
    outDuration: 500,
    onOpenStart: moveSlideCurtain,
    onCloseEnd: resetSlideCurtain,
    onCloseStart: closeSlideCurtain,
}
$('.sidenav').sidenav(obj);

$(".menu, .menu-text").on("click",function(){
    $("#menu-overlay").show();
    
    status = $(this).attr("data-status");
    console.log(status);
    if( status == "close"){
        $(".first").css("top","10px");
        $(".third").css("top","10px");
        $(".bar:nth-child(1)").addClass("topbar").removeClass("first");
        $(".bar:nth-child(2)").addClass("middlebar").removeClass("second");
        $(".bar:nth-child(3)").addClass("bottombar").removeClass("third");
        // $(".menu, .menu-text").attr("data-status","open");
        $('.sidenav').sidenav("open");
        // $(".bar").css("background","#1A1A1C");
        // $(".menu-text").css("color","#1A1A1C");
        
    }
    else{
        console.log("hello");
        
        $(".topbar").css("top","20px");
        $(".bottombar").css("top","0px");
        setTimeout(function(){
            $(".bar:nth-child(1)").removeClass("topbar").addClass("first");
            $(".bar:nth-child(2)").removeClass("middlebar").addClass("second");
            $(".bar:nth-child(3)").removeClass("bottombar").addClass("third");
            $(".first").css("top","0px");
            $(".third").css("top","20px");
            $('.sidenav').sidenav("close");
            // $(".bar").css("background","#FFF");
            // $(".menu-text").css("color","#FFF");
            $("#menu-overlay").hide();
        },600);
        
        // $(".menu, .menu-text").attr("data-status","close");   
    }
});
$("#menu-overlay").on("click",function(){
    $('.sidenav').sidenav("close");
});

$( ".list-content" )
    .mouseover(function() {
        console.log("inside hover");
    $(this ).find(".dash").addClass("stretch");
    $(this).css("color","#AFB478");
    })
    .mouseout(function() {
    $(this ).find(".dash").removeClass("stretch");
    $(this).css("color","#1A1A1C");
    });