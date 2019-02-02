$( document ).ready(function () {
  $(".findgame >.btn").click( function(){
    $(this).siblings("form").addClass("visible");
    $(this).hide();
  });
})