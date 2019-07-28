$(document).ready(function(){
    var listvalues = localStorage.getItem('movieDetails');
    var finalvalue = JSON.parse(listvalues);
    console.log(finalvalue);
    console.log("http://image.tmdb.org/t/p/original/"+finalvalue.poster_path);
    $(".main-detail-banner").css({"background":"url(http://image.tmdb.org/t/p/original/"+finalvalue.backdrop_path,"background-repeat":"no-repeat","background-size":"cover"});
    $(".overview-content").html(finalvalue.overview);
    $("#overview-img").attr("src","http://image.tmdb.org/t/p/w185/"+finalvalue.poster_path);
    $(".movie-name").html(finalvalue.original_title);
    for(i=0;i<finalvalue.genres.length;i++){
        var htmlgenre = finalvalue.genres[i].name;
        console.log(finalvalue.genres[i].name);
        $(".movie-genre").append(htmlgenre);
    }
    $(".movie-date").html("Release date: "+finalvalue.release_date);
    $(".runtime").html("Movie runtime: "+finalvalue.runtime+" mins");
    $(".rating").html(finalvalue.vote_average);
    // $("#youtubeContent").attr("src","https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1");

    
      $(".trailer").click(function(){
        var videoSettings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/movie/"+finalvalue.id+"/videos?language=en-US&api_key=6246cdb5166ba3a477f67ff322ad202a",
            "method": "GET",
            "headers": {},
            "data": "{}"
          }
          
          $.ajax(videoSettings).done(function (response) {
              for(i=0;i<response.results.length;i++){
                  if( response.results.type == "Trailer"){
                      trailer = response.results.key;
                      break;
                  }
              }
            console.log(response.results);
            console.log(trailer);
          });
      });
});