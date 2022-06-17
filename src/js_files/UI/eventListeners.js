import { addTodo, renderNewProject, renderTodo } from "../Logic/todoLogic";
import { showTodoUI, unloadTodoUI } from "./todoUI";
import { showProjectUI, unloadProjectUI } from "./projectUI";

export const addTodoEventListener = () => {
  const addTodoButton = document.getElementById("add-task-button");

  addTodoButton.addEventListener("click", showTodoUI);

  submitTodoEventListener();
};

export const submitTodoEventListener = () => {
  const submitTodoButton = document.getElementById("submit-todo-button");
  submitTodoButton.addEventListener("click", function() {
    addTodo();
    unloadTodoUI();
  });
};

export const addProjectEventListener = () => {
  const addProjectButton = document.getElementById("project-add");

  addProjectButton.addEventListener("click", showProjectUI);
};

export const confirmProjectEventListener = () => {
  const confirmProjectButton = document.getElementById("add-project-button");

  confirmProjectButton.addEventListener("click", function() {
    renderNewProject();
    unloadProjectUI();
  });
};

export const changeProjectEventListener = (node) => {
  node.addEventListener("click", function() {
    const title = document.getElementById('main-title').firstChild;
    let projectName = node.innerHTML.toLowerCase();
    title.innerHTML = projectName.toUpperCase();
    localStorage.setItem("current-project", JSON.stringify(projectName));
    // let currentProject = JSON.parse(localStorage.getItem("current-project"));
    const todo_container = document.getElementById("todo-list");
    todo_container.replaceChildren();
    renderTodo(projectName)
  })
}

export const deleteTodoEventListener = (node) => {
  node.addEventListener("click", function() {
    const todo_container = node.parentElement.parentElement;
    const title = node.parentElement.querySelector('.todo-title').innerHTML.toLowerCase();

    let todoList = JSON.parse(localStorage.getItem("todo-list"));

    for (var key of Object.keys(todoList)) {
      todoList[key] = todoList[key].filter(node => node["name"].toLowerCase() !== title);
    }

    localStorage.setItem("todo-list", JSON.stringify(todoList));

    console.log(todoList);

    todo_container.remove();
  })
}
