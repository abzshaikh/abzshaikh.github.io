$(document).ready(function(){
    var listvalues = localStorage.getItem('movieDetails');
    var finalvalue = JSON.parse(listvalues);
    $(".main-detail-banner").css({"background":"url(http://image.tmdb.org/t/p/original/"+finalvalue.backdrop_path,"background-repeat":"no-repeat","background-size":"cover"});
    $(".overview-content").html(finalvalue.overview);
    $("#overview-img").attr("src","http://image.tmdb.org/t/p/w185/"+finalvalue.poster_path);
    $(".movie-name").html(finalvalue.original_title);
    for(i=0;i<finalvalue.genres.length;i++){
        var htmlgenre = finalvalue.genres[i].name+", ";
        console.log(finalvalue.genres[i].name);
        $(".movie-genre").append(htmlgenre);
    }
    $(".movie-date").html("Release date: "+finalvalue.release_date);
    $(".runtime").html("Movie runtime: "+finalvalue.runtime+" mins");
    getRatingColor(".rating",finalvalue.vote_average);
    $(".trailer").click(function(){
        getVideos("#youtubeContent",finalvalue.id);
    });
});
function getVideos(selector,key){
    var videoSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/"+key+"/videos?language=en-US&api_key=6246cdb5166ba3a477f67ff322ad202a",
        "method": "GET",
        "headers": {},
        "data": "{}"
        }
        $.ajax(videoSettings).done(function (response) {
            for(i=0;i<response.results.length;i++){
                if( response.results[i].type == "Trailer"){
                trailer = response.results[i].key;
                break; 
                }
            }
        $(selector).attr("src","https://www.youtube.com/embed/"+trailer+"?autoplay=1&mute=1");
        });     
}
function getRatingColor(selector,rating){
    $(selector).html(rating);
    switch(rating){
        case "1":
        case "2":
            $(selector).css("background","#ff4545");
            break;
        case "3":
        case "4":
            $(selector).css("background","#ffa534");
            break;
        case "5":
        case "6":
            $(selector).css("background","#ffe234");
            break;
        case "7":
        case "8":
            $(selector).css("background","#b7dd29");
            break;
        case "9":
        case "10":
            $(selector).css("background","#57e32c");
            break;
    }
}