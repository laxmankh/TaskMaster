const todoform =document.querySelector(".form-todo")
const todoinput=document.querySelector(".form-todo input[type='text']")
const todolist =document.querySelector(".to-do-box")


todoform.addEventListener("submit",(event)=>{
    event.preventDefault();
    const newTodoText=todoinput.value;
    const newli=document.createElement("li");
    const newhtml=` <span class="text" ></span>${newTodoText}</span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>`
    newli.innerHTML=newhtml;
    todolist.append(newli);
    todoinput.value="";
})


todolist.addEventListener("click",(event)=>{
    if(event.target.classList.contains("remove"))
    {
        const select=event.target.parentNode.parentNode;
        select.remove();
    }
    
    if(event.target.classList.contains("done"))
    {
        const list=event.target.parentNode.parentNode;
        list.style.textDecoration="line-through";
        list.style.background="green";
    }
})