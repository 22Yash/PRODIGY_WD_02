let timerDiplay = document.querySelector("#display");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let msec = 0 ;
let sec = 0 ;
let mins = 0 ;

let timerId = null ;

startBtn.addEventListener('click' , function(){
    if (timerId !== null  ){
        clearInterval(timerId);
    }
    timerId = setInterval(start,10);
});

stopBtn.addEventListener('click' , function(){
       clearInterval(timerId);
});

resetBtn.addEventListener('click' , function(){
    clearInterval(timerId);
    display.innerHTML = "00 : 00 : 00" ;
});

function start (){
    msec ++ ;
    if(msec == 100 ){
        msec = 0;
        sec++ ;
        if (sec == 60 ){
            sec = 0 ;
            mins ++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec ;
    let secString = sec < 10 ? `0${sec}` : sec ;
    let minsString = mins < 10 ? `0${mins}` : mins;
    
    display.innerHTML = `${minsString} : ${secString}  : ${msecString} `;

};