let dino =document.getElementById("dino")
let block =document.getElementById("block")
let score =document.getElementById("score")
let game =document.getElementById("game")
let result=document.getElementById("result")
let block3 =document.getElementById("block3")
let count=0;
let sound=document.getElementById("sound")



function jump(){
     dino.style.top="150px";
     sound.play();

     setTimeout(() => {
      dino.style.top="260px";    
     },500);
     count++;
}


function jump2(){
     dino.style.top="60px";
     sound.play();
     setTimeout(() => {
      dino.style.top="260px";    
     },400);
     count++;
}

window.addEventListener("keydown",jump)
window.addEventListener("click",jump2)


// setInterval( function gameover() {
 
//      let blockleft =parseInt(Window.getcomputedstyle(block).getpropertyValue("left"));     
//      let dinoval =parseInt(Window.getcomputedstyle(dino).getpropertyValue("top"));     
//       if ((blockleft < 72) && (dinoval > 200)) {

//           result.style.display = "block";
//           game.style.display = "none";
//           score.innerHTML = `score : ${count}`;
  


//       }
// },10);




setInterval(function gameOver(){
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockertop = parseInt(window.getComputedStyle(block3).getPropertyValue("top"));
    let characterleft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));

    let characterTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let blocker = parseInt(window.getComputedStyle(block3).getPropertyValue("left"));

    if((blockleft < 40) && (characterTop >200)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score : ${count}`;
    }

    if((blocker  < 70 ) && (characterTop < 90)){
     result.style.display = "block";
     game.style.display = "none";
     score.innerHTML = `score : ${count}`;

    }
},10);
