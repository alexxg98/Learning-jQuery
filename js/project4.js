$(document).ready(function(){
  $("#pickImg2").hide(); //hide 2nd image upon loading
  $("#pickImg3").hide(); //hide 3rd image upon loading
  $("#pickImg4").hide(); //hide 3rd image upon loading
//first image
  $("#thing1").click(function(){
    $("#pickImg2").hide(); //hide all other images
    $("#pickImg3").hide();
    $("#pickImg4").hide();
    $("#pickImg1").fadeIn("fast", showText1); //show first image and call for function showText1
    $("#thing1").fadeTo("fast", 0.5); //when clicked, opacity is 0.5
    $("#thing2").fadeTo("fast", 1); //when clicked, opacity is 1
    $("#thing3").fadeTo("fast", 1); //when clicked, opacity is 1
    $("#thing4").fadeTo("fast", 1); //when clicked, opacity is 1
    });
    function showText1(){
      $("#text").text("PURPLE MACARON!"); //replace text in #text with this
    };
//second image
  $("#thing2").click(function(){
    $("#pickImg1").hide(); //hide all other images
    $("#pickImg3").hide();
    $("#pickImg4").hide();
    $("#pickImg2").fadeIn("fast", showText2); //show second image and call for showText2
    $("#thing2").fadeTo("fast", 0.5); //when clicked, opacity is 0.5
    $("#thing1").fadeTo("fast", 1); //when clicked, opacity is 1
    $("#thing3").fadeTo("fast", 1); //when clicked, opacity is 1
    $("#thing4").fadeTo("fast", 1); //when clicked, opacity is 1
    });
    function showText2(){
      $("#text").text("PINK MACARON!"); //replace text in #text with this
    };
//third image
  $("#thing3").click(function(){
    $("#pickImg2").hide(); //hide all other images
    $("#pickImg1").hide();
    $("#pickImg4").hide();
    $("#pickImg3").fadeIn("fast", showText3); //show third image and call for showText3
    $("#thing3").fadeTo("fast", 0.5); //when clicked, opacity is 0.5
    $("#thing2").fadeTo("fast", 1); //when clicked, opacity is 1
    $("#thing1").fadeTo("fast", 1); //when clicked, opacity is 1
    $("#thing4").fadeTo("fast", 1); //when clicked, opacity is 1
    });
    function showText3(){
      $("#text").text("BLUE MACARON!"); //replace text in #text with this
    };
//fourth image
  $("#thing4").click(function(){
    $("#pickImg2").hide(); //hide all other images
    $("#pickImg3").hide();
    $("#pickImg1").hide();
    $("#pickImg4").fadeIn("fast", showText4); //show first image and call for showText4
    $("#thing4").fadeTo("fast", 0.5); //when clicked, opacity is 0.5
    $("#thing2").fadeTo("fast", 1); //when clicked, opacity is 1
    $("#thing3").fadeTo("fast", 1); //when clicked, opacity is 1
    $("#thing1").fadeTo("fast", 1); //when clicked, opacity is 1
    });
    function showText4(){
      $("#text").text("WHITE MACARON!"); //replace text in #text with this
    };
});


//slideshow
var slideIndex = 1;
showSlides(slideIndex); // showSlides will display first image
function goTo(n){ //n=variable empty. depending on which arrow is clicked, the n will be either -1 or +1
  showSlides(slideIndex += n);
}

function currentSlide(n){ //onclick function when image is clicked
  showSlides(slideIndex=n) //shows image of the index
}

function showSlides(n){
  var i;
  var slide = document.getElementsByClassName("bigImg"); //store all images in array
  var thumbnail = document.getElementsByClassName("thing");
  if (n > slide.length) {
    slideIndex = 1 //if got to end of images, go back to first
  };
  if (n < 1) {
    slideIndex = slide.length
  };
  for (var i = 0; i < slide.length; i++) {
    slide[i].style.display = "none"; //hides all elements in the class "bigImg"
  }
  for (var i = 0; i < thumbnail.length; i++) {
    thumbnail[i].className = thumbnail[i].className.replace(" active", ""); //replace class name
  }
  slide[slideIndex-1].style.display = "block"; //displays the element in slide with the given index
  thumbnail[slideIndex-1].className += " active";
}
