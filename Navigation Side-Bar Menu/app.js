const menuBtn = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");

//adding event lister intomenubtn//

menuBtn.addEventListener("click", ()=>{

    sidebar.classList.add("sidebaropen")
});

document.addEventListener("mouseup", (e)=>{
    if(!sidebar.contains(e.target)){
    sidebar.classList.remove("sidebaropen")
}
});