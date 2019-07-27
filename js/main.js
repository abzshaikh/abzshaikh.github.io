$(document).ready(function(){
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    $("#movieSearchBox").keyup(function(){
        var searchKey = $(this).val();
        if (searchKey == ""){
            $(".search-box-list").hide();
        }
        else{
            setTimeout(function(){
                var searchSetting = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&query="+searchKey+"&api_key=6246cdb5166ba3a477f67ff322ad202a",
                    "method": "GET",
                    "headers": {},
                    "data": "{}"
                  }
                  $.ajax(searchSetting).done(function (response) {
                    $(".search-box-list").empty();
                    // console.log(response);
                    for(i=0;i<response.results.length;i++){
                        if(response.results[i].backdrop_path == null){
                            backdropPath = "./images/noimage.jpg";
                        }
                        else{
                            backdropPath = `http://image.tmdb.org/t/p/w92/`+response.results[i].backdrop_path;
                        }
                        var html = `<div class="movie-list-block showDetails fade-in-bottom" data-id="`+response.results[i].id+`">
                        <div class="movie-list-backdrop">
                            <img src="`+backdropPath+`">
                        </div>
                        <div class="movie-list-title-container">
                            <p class="movie-list-title"><span>Movie Title:</span>`+response.results[i].original_title+`</p>
                            <p class="movie-list-releasedate"><span>Release Date:</span>`+response.results[i].release_date+`</p>
                        </div>
                    </div>`;
                    $(".search-box-list").append(html);
                        // console.log(response.results[i]);
                    }
                      if(response.total_results == 0){
                        $(".search-box-list").hide();
                      }
                      else{
                        $(".search-box-list").show();
                      }
                  });
            },1500);
        }
    });
    var popularSetting = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=6246cdb5166ba3a477f67ff322ad202a",
        "method": "GET",
        "headers": {},
        "data": "{}"
      }
      
      $.ajax(popularSetting).done(function (response) {
        console.log(response);
        for(i=0;i<14;i++){
            var html = `<div>
                            <img class="showDetails" data-id="`+response.results[i].id+`" src="http://image.tmdb.org/t/p/w185/`+response.results[i].poster_path+`" alt=""/>
                        </div>`;
            $(".responsive").append(html);
        }
      });
      setTimeout(function(){
        $('.responsive').slick({
            dots: true,
              prevArrow: $('.prev'),
              nextArrow: $('.next'),
            infinite: true,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
                },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            ]
          });
      },1500);
      $("body").on("click",".showDetails",function(){
        clickedon = $(this).attr("data-id");
        console.log(clickedon);
        var detailSetting = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/movie/"+clickedon+"?language=en-US&api_key=6246cdb5166ba3a477f67ff322ad202a",
            "method": "GET",
            "headers": {},
            "data": "{}"
          }
          
          $.ajax(detailSetting).done(function (response) {
            console.log(response);
            // var listvalues = { "1": "value1", "2": "value2", "3": "value3" };
            localStorage.setItem('movieDetails', JSON.stringify(response));
            document.location.href = "detail.html";
            // window.open("detail.html", '_blank');
          });
          
        
      });
});