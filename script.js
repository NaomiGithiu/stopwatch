window.onload = function(){
    var seconds = 00;
    var milliseconds = 00;
    var appendMilliseconds = document.getElementById("milliseconds");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");

    var Interval;
    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 100);

    }

    buttonStop.onclick = function(){
        clearInterval(Interval);

    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        milliseconds = "00";
        seconds = "00";
        appendMilliseconds.innerHTML = milliseconds;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer (){
        milliseconds++;

        if(milliseconds <= 9){
            appendMilliseconds.innerHTML = "0" + milliseconds;
        }
        if(milliseconds > 9){
            appendMilliseconds.innerHTML = milliseconds;
        }
        if(milliseconds > 99){
            console.log("seconds");
            // alert("seconds")
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            milliseconds = 0;
            appendMilliseconds.innerHTML = "0" + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}