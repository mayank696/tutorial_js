/* Function for clock functionality*/

var start = setInterval(function() {myClock()}, 500);

 function myClock(){
    var clock = new Date();
    var h = clock.getHours();
    var m = clock.getMinutes();
    var s = clock.getSeconds();
    document.getElementById("demo").innerHTML = h + ":" + m + ":" + s;
}

/* Function to pop up alert, when user enters his name */

function myFunThanks(){
    alert(" Thanks & Your Welcome!");
}

/* Function to change the background color of page whene a user hovers over the table's columns */

function changeBg(color){
    document.body.style.backgroundColor = color;
}