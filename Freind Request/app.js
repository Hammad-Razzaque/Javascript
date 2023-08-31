let h4 =document.querySelector("h4")
let btn =document.querySelector("#btn")
let click=0;
let i =document.querySelector("i")
let img=document.querySelector(".img")
let like =0;

img.addEventListener("dblclick",()=>{
     if(like == 0){
          i.style.opacity="0.9"
          i.style.transform="transform: translate(-50% -50%) scale(1)"
          like = 1;
     }
     else{
          like = 0;
          i.style.opacity="0.9"
          i.style.transform="transform: translate(-50% -50%) scale(1)"
     }
  
     setTimeout(()=>{
          i.style.transform="transform: translate(-50% -50%) scale(3)"
          i.style.opacity="0.5"
     },800)

     setTimeout(()=>{
          i.style.transform="transform: translate(-50% -50%) scale(1)"
          i.style.opacity="0"
          
     },900)
})




btn.addEventListener("click",()=>{
if(click == 0){
     h4.style.color="#1f657d";
     btn.style.transform="rotate(360deg)"
     h4.innerHTML="Friend";
     btn.innerHTML="Remove"
     click = 1;
}
else{
     h4.style.color="#911c5b";
     btn.style.transform="rotate(-360deg)"
     h4.innerHTML="Stranger";
     btn.innerHTML="Friend"
     click = 0;
}
})