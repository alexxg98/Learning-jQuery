document.getElementById('myModal1').style.display = 'none'; //hide popup1 upon loading
document.getElementById('myModal2').style.display = 'none'; //hide popup2 upon loading
document.getElementById('myModal3').style.display = 'none'; //hide popup3 upon loading
document.getElementById('myModal4').style.display = 'none'; //hide popup4 upon loading



var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn1 = document.getElementById("thing1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}



var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("thing2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}



var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn3 = document.getElementById("thing3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}



var modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
var btn4 = document.getElementById("thing4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal
btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
}
