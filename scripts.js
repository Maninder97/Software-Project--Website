//script for navigation bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//script for images
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";  // IE10
        elements[i].style.flex = "100%";
    }
}

// Two images side by side
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "50%";  // IE10
        elements[i].style.flex = "50%";
    }
}

// Four images side by side
function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";  // IE10
        elements[i].style.flex = "25%";
    }
}


// form validation
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

// script for home page timer
type="text/babel"
// Set date and time to countdown
var countDownDate = new Date("nov 25, 2018 21:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get method for todays date and time
    var now = new Date().getTime();
    
    // Difference between today and countdown date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Specials expire (output)
    document.getElementById("Specials timer").innerHTML =" Specials valid for "+ days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds   "  + "( Expires on 30 November 2018 )   ";
    
    // If the count down is over
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Specials timer").innerHTML = "EXPIRED";
    }
}, 1000);


//script for book a table page timer
type="text/babel"
// Set date and time to countdown
var countDownDate = new Date("nov 30, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get method for todays date and time
    var now = new Date().getTime();
    
    // Difference between today and countdown date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Session expire output
    document.getElementById("timer").innerHTML =" Session expires in "  + minutes + "m " + seconds + "s ";
    
    // If the count down is over
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// form validation
var attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "MK" && password == "solutions"){
alert ("Login successfully");
window.location = "OurTeam.html"; // Redirecting to other page.
return false;
}
else if( username == "john" && password == "john123"){
alert ("Login successfully");
window.location = "OurTeam.html"; // Redirecting to other page.
return false;
}
else if( username == "arry" && password == "arry123"){
alert ("Login successfully");
window.location = "OurTeam.html"; // Redirecting to other page.
return false;
}
else if( username == "gyna" && password == "gyna123"){
alert ("Login successfully");
window.location = "OurTeam.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}