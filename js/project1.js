$(document).ready(function(){
  $("#text1").hide(); //hide div #text1 first, before click
  $("#text2").hide(); //hide div #text2 first, before click
  $("#text3").hide(); //hide div #text3 first, before click
//bar 1
  $("#one").click(function(){
    $("#text1").slideToggle(500, "linear", showText1);
  });
  function showText1(){
    $("#text1").text("TEXT CONTENT 1");
  };
//bar 2
  $("#two").click(function(){
    $("#text2").slideToggle(500, "linear", showText2);
  });
  function showText2(){
    $("#text2").text("TEXT CONTENT 2");
  };
//bar 3
  $("#three").click(function(){
    $("#text3").slideToggle(500, "linear", showText3);
  });
  function showText3(){
    $("#text3").text("TEXT CONTENT 3");
  };
});
