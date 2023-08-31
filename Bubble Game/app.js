let timer = 60;
let score = 0;
let hitrn = 0;

function addscore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function newhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runtimer() {
    let timerin = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }

        else {
            clearInterval(timerin);
            document.querySelector(".pbtm").innerHTML=`<div class="GAMEOVER">
            <h1>GAME OVER</h1>
            <P>Your Final Score:${score}</P>
            <div class="btn">
            <a href="index.html">Play Again</a>
       </div>
        </div>`
        }

    }, 1000);
};

function makebuuble() {
    let clutter = "";

    for (i = 0; i <= 125; i++) {

        let rn = Math.floor(Math.random() * 10);

        clutter += ` <div class="hit">${rn}</div>`;

        document.querySelector(".pbtm").innerHTML = `${clutter}`

    };
};

document.querySelector(".pbtm").addEventListener("click", function (bubbleclick) {
    let bubble = Number(bubbleclick.target.textContent);
    if (bubble === hitrn) {
        addscore();
        newhit();
        makebuuble();
    }

});






makebuuble();
runtimer();
newhit();