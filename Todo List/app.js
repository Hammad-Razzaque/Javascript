let item = document.querySelector("#item");
let list = document.querySelector(".ul");


item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addTodo(this.value);
    this.value = ""
  }
});

const addTodo = (item) => {
  const listitem = document.createElement("li");
  listitem.innerHTML = `${item} <i>X</i>`;

  list.appendChild(listitem);

    listitem.addEventListener("click", () => {
    listitem.classList.toggle("done");
 
     listitem.querySelector("i").addEventListener("click",()=>{
     listitem.remove()
    })
    
  });
};
