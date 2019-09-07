$(document).ready(function(){
  $("#placeImg2").hide(); //hide 2nd image upon loading
  $("#placeImg3").hide(); //hide 3rd image upon loading
//button 1
  $("#img1").click(function(){
    $("#placeImg2").hide();
    $("#placeImg3").hide();
    $("#placeImg1").fadeIn("fast");
    $("#img1").fadeTo("fast", 0.5);
    $("#img2").fadeTo("fast", 1);
    $("#img3").fadeTo("fast", 1);
  });
//button 2
  $("#img2").click(function(){
    $("#placeImg1").hide();
    $("#placeImg3").hide();
    $("#placeImg2").fadeIn("fast");
    $("#img1").fadeTo("fast", 1);
    $("#img2").fadeTo("fast", 0.5);
    $("#img3").fadeTo("fast", 1);
  });
//button 3
  $("#img3").click(function(){
    $("#placeImg1").hide();
    $("#placeImg2").hide();
    $("#placeImg3").fadeIn("fast");
    $("#img1").fadeTo("fast", 1);
    $("#img2").fadeTo("fast", 1);
    $("#img3").fadeTo("fast", 0.5);
  });
});
