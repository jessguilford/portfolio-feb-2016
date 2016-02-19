$(document).ready(function() {
  $(".item-label").click(function(event) {
    $("#info-" + this.id).slideToggle(400);
  });

  $(".item-info").click(function() {
    $(this).slideToggle(400);
  });
});
//
// $("button").click(function(event) {
//     $("#text" + this.id).fadeToggle(2000);
//     $("#text" + this.id).siblings().hide();
