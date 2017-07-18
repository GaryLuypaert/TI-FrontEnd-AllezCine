$(document).ready(function() {
/*
  $(window).on('load',function(){                 A REACTIVER APRES CORRECTION
      $('#myModalAge').modal('show');
  });
*/

  $(".categories-movie-series").mouseenter(function() {
    $(this).css("background-color", "#FF8D1B");
  });
  $(".categories-movie-series").mouseleave(function() {
    $(this).css("background-color", "#E9E9E9");
  });
  $(".categories-movie-series").click(function() {
    $(this).css("background-color", "#FF8D1B");
  });

  $("#actions-btn-movie").click(function() {
    $("#row-movie-delete").removeAttr("class");
  });

  $(".moreMoviesBtn").click(function() {
    $(".moreMoviesBox").slideToggle("slow");
    $(".moreMoviesBtn").hide();
  });

  $(".lessMoviesBtn").click(function() {
    $(".moreMoviesBox").slideToggle("slow");
    $(".moreMoviesBtn").show();
  });

  $(".moreSeriesBtn").click(function() {
    $(".moreSeriesBox").slideToggle("slow");
    $(".moreSeriesBtn").hide();
  });

  $(".lessSeriesBtn").click(function() {
    $(".moreSeriesBox").slideToggle("slow");
    $(".moreSeriesBtn").show();
  });

  $('.link-menu').on('click', function(evt){
   evt.preventDefault();
var target = $(this).attr('href');
$('html, body')
   .stop()
   .animate({scrollTop: $(target).offset().top}, 1000 );
});



});
