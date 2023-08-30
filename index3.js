const form = document.querySelector(".form-todo");
const newLi = document.querySelector(".todo-list");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text1 = document.querySelector(".form-todo input[type='text']");
  const newList = document.createElement("li");
  newList.innerHTML = `<span class="text">${text1.value}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
  if (text1.value === "") {
    alert("Enter something");
  } else {
    newLi.prepend(newList);
    text1.value = "";
  }
});

newLi.addEventListener("click", (e)=>{
    if(e.target.classList.contains("done")){
        const node1= e.target.parentNode.previousElementSibling;
        node1.style.textDecoration = "line-through"
    }
    else if(e.target.classList.contains("remove")){
        const node2= e.target.parentNode.parentNode;
        node2.remove();
    }
})
