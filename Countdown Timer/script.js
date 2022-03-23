let value = 1;
let time = 10;


setInterval(function() {
    document.getElementById("timer").innerHTML = time;
    time-= value;
    document.getElementById("timer").innerHTML = time;
    if (time == 0) {return;}
  },1000);

