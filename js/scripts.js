$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    var className = $(this).text().toLowerCase();
    console.log(className);
    if(className === 'generic'){
      $(".generic").show();
      $(".html").hide();
      $(".css").hide();
    }
    else if(className === 'css'){
      $(".generic").hide();
      $(".html").hide();
      $(".css").show();
    }
    else if(className === 'html'){
      $(".generic").hide();
      $(".html").show();
      $(".css").hide();
    }
  });

  $(".card-title").click(function(){
    $(this).closest(".card-body").find(".card-text").toggle();
  });


});
