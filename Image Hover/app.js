let box = document.querySelectorAll(".box");
let image = document.querySelector(".box img");

box.forEach(function(val){

     val.addEventListener("mouseenter",function(){
          console.log("hello");
          val.childNodes[3].style.opacity = 1
    
     });

     val.addEventListener("mouseleave",function(){
          console.log("hello");
          val.childNodes[3].style.opacity = 0

     });
     val.addEventListener("mousemove",function(dets) {
          val.childNodes[3].style.left = dets.x+"px"     
     
     })

});

