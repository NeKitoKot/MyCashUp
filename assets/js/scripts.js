$( document ).ready(function () {
  $(".findgame >.btn").click( function(){
    $(this).siblings("form").addClass("visible");
    $(this).hide();
  });
  $('#registerLink').click(function(){
    $("#enterFormBlock").removeClass('perspectiveLeftReturn');
    $("#enterFormBlock").addClass('magictime perspectiveLeft');
    $('#backSideBlock').fadeIn(600);});

  $('#enterLink').click(function(){
    $("#enterFormBlock").removeClass('perspectiveLeft');
    $("#enterFormBlock").addClass('magictime perspectiveLeftReturn');
    $('#backSideBlock').fadeOut(600);});
})