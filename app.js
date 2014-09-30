var start = setInterval(function() {myClock()}, 500);

function myClock(){
    var clock = new Date();
    var h = clock.getHours();
    var m = clock.getMinutes();
    var s = clock.getSeconds();

    document.getElementById("demo").innerHTML = h + ":" + m + ":" + s;
}


function myFunThanks(){
    alert(" Thanks & Your Welcome!");
}


function changeBg(color){
    document.body.style.backgroundColor = color;
}