$(document).ready(function(){
  $("#text").html("<em> SOME TEXT FOR TAB 1 </em>");
//tab1
  $("#tab1").click(clickOne);
  function clickOne(){
    $("#text").html("<em> SOME TEXT FOR TAB 1 </em>");
    $("#tab2").removeClass('clicked'); //remove css class clicked
    $("#tab3").removeClass('clicked');
    $(this).addClass('clicked'); //call for the css class clicked
  }
  $("#tab2").click(clickTwo);
  function clickTwo(){
    $("#text").html("<em> SOME TEXT FOR TAB 2 </em>");
    $("#tab1").removeClass('clicked');
    $("#tab3").removeClass('clicked');
    $(this).addClass('clicked'); //call for the css class clicked
  }
  $("#tab3").click(clickThree);
  function clickThree(){
    $("#text").html("<em> SOME TEXT FOR TAB 3 </em>");
    $("#tab2").removeClass('clicked');
    $("#tab1").removeClass('clicked');
    $(this).addClass('clicked'); //call for the css class clicked
  }
});
