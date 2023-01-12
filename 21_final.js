const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todolist = document.querySelector(".todo-list");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `<span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHTML;
    todolist.append(newLi);
    todoInput.value="";
});

todolist.addEventListener("click", (e) =>{
    // check if user clicked on done button
    if(e.target.classList.contains("remove")){
        const targetLi = e.target.parentNode.parentNode;
        targetLi.remove();
    }
    if(e.target.classList.contains("done")){
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration="line-through";
    }
});