// let timerdisplay = document.querySelectorAll(".timerdisplay")
let timerdisplay=document.getElementById("timerdisplay")
let startbtn = document.getElementById("startbtn")
let resetbtn = document.getElementById("resetbtn")
let stopbtn = document.getElementById("stopbtn")

let msec = 00;
let secs = 00;
let mins = 00;

let timerid = null;
startbtn.addEventListener("click", function () {

    if (timerid !== null) {
        clearInterval(timerid);


    }
    timerid = setInterval(starttimer, 10);

});
stopbtn.addEventListener("click", function(){ clearInterval(timerid)});

resetbtn.addEventListener("click", function(){
    clearInterval(timerid);
// timerdisplay.innerHTML = `00 : 00 : 00`;
let time=  `00 : 00 : 00`;
timerdisplay.innerText=time;
msec = secs = mins = 00 ;
});


function starttimer() {

    msec++;
   // console.log(msec)
   
    if (msec == 100) {

        msec = 0;
        secs++;
console.log(secs)
        if (secs == 60) {

            secs = 0;
            mins++;
        }


    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    // timerdisplay.innerHTML = `${minsString} : ${secsString} : ${msecString} `;
    let time= minsString+ " : " + secsString+ " : " +msecString;
timerdisplay.innerText=time;

}