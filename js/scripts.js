$(document).ready(function() {
  $(".item-label").click(function(event) {
    $("#info-" + this.id).fadeToggle(200);
    $("#x-toggle-" + this.id).toggleClass("item-x-rotated");
  });

  // $(".item-info").click(function() {
  //   $(this).slideToggle(400);
  //   $(".item-x-toggle").toggleClass("item-x-rotated");
  // });
});
//
// $("button").click(function(event) {
//     $("#text" + this.id).fadeToggle(2000);
//     $("#text" + this.id).siblings().hide();
