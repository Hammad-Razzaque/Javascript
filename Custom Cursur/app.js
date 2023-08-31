let main = document.getElementById("main");
let cursur=document.getElementById("cursur");

main.addEventListener("mousemove",function(mover){
  cursur.style.left= mover.pageX+"px"
  cursur.style.top= mover.pageY+"px"

  console.log(mover.x)

});