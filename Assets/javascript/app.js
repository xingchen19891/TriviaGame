// a timer

// when time is up



var timeleft = 20;
var downloadTimer = setInterval(function(){
  timer.innerHTML = "Time Remaining: "+timeleft + " seconds";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
  }
}, 2000);

// chech is any id with answer is clicked on, if so, var correct ++;