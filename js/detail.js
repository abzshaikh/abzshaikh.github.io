$(document).ready(function(){
    var listvalues = localStorage.getItem('movieDetails');
    //pase the value 
    var finalvalue = JSON.parse(listvalues);
    console.log(finalvalue);
    console.log("http://image.tmdb.org/t/p/original/"+finalvalue.poster_path);
    // $(".main-detail-banner").css({"background":"linear-gradient(to right,#000000,#929292),url(http://image.tmdb.org/t/p/original/"+finalvalue.backdrop_path,"background-repeat":"no-repeat","background-size":"cover","background-blend-mode":"hard-light"});
    $(".main-detail-banner").css({"background":"linear-gradient(to right,#000000,#929292),url(http://image.tmdb.org/t/p/w185/"+finalvalue.backdrop_path,"background-repeat":"no-repeat","background-size":"cover","background-blend-mode":"hard-light"});
    $(".overview-content").html(finalvalue.overview);
    $("#overview-img").attr("src","http://image.tmdb.org/t/p/w185/"+finalvalue.poster_path);
    $(".movie-name").html(finalvalue.original_title);
    for(i=0;i<finalvalue.genres.length;i++){
        var htmlgenre = finalvalue.genres[i].name+", ";
        console.log(finalvalue.genres[i].name);
        $(".movie-genre").append(htmlgenre);
    }
    $(".movie-date").html(finalvalue.release_date);
});