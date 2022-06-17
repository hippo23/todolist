import { addProject, createTodoList } from "./TodoList";
import "./Tasks";
import "./Project";
import { compareAsc, format, parseISO } from "date-fns";
import { createTask } from "./Tasks";
import { addTask } from "./Project";
import { createButton, createTodoItem } from "../UI/misc";
import { changeProjectEventListener } from "../UI/eventListeners";

let todoList = createTodoList();


localStorage.clear();

let currentProject = "inbox";
localStorage.setItem("current-project", JSON.stringify(currentProject))

if (localStorage.getItem("todo-list") !== null) {
  console.log("getting from local storage");
  todoList = JSON.parse(localStorage.getItem("todo-list"));
  console.log(todoList);
} else {
  console.log("setting local storage");
  localStorage.setItem("todo-list", JSON.stringify(todoList));
  console.log(todoList);
}

export const addTodo = () => {
  todoList = JSON.parse(localStorage.getItem("todo-list"));
  const date_text = document.getElementById("todo-card-date").value;
  const date = new Date(document.getElementById("todo-card-date").value);
  const title = document.getElementById("todo-card-title").value;

  if (!date_text) {
    alert("Please enter a date.");
  } else if (!title) {
    alert("Please enter a title.");
  } else {
    const task = createTask(title, date);

    currentProject = JSON.parse(localStorage.getItem("current-project"));

    if (todoList['inbox'].some(node => node["name"].toLowerCase() === title.toLowerCase())) {
      alert('Please use a different title for the task');
    } else {
      const currentDate = new Date(1987, 1, 11);
      currentDate.setHours(date.getHours());
      currentDate.setMinutes(date.getMinutes());
      currentDate.setSeconds(date.getSeconds());
      currentDate.setMilliseconds(date.getMilliseconds());

      const category = compareAsc(date, currentDate);

      if (category == 1) {
        addTask(todoList["upcoming"], task);
        const todo_container = document.getElementById("todo-list");
        todo_container.replaceChildren();
      } else if (category == 0) {
        addTask(todoList["today"], task);
        const todo_container = document.getElementById("todo-list");
        todo_container.replaceChildren();
      }

      if (currentProject !== "inbox" && currentProject !== "today" && currentProject !== "upcoming") {
        addTask(todoList[currentProject], task);
        const todo_container = document.getElementById("todo-list");
        todo_container.replaceChildren();
      }

      addTask(todoList["inbox"], task);

      localStorage.setItem("todo-list", JSON.stringify(todoList));

      renderTodo(currentProject)
      console.log(todoList);
    }

  }

};

export const renderTodo = (projectName) => {
  todoList = JSON.parse(localStorage.getItem("todo-list"));
  todoList[projectName].forEach((element) => {
    const tempItem = createTodoItem(element["name"], element["date"]);
    const todoContainer = document.getElementById("todo-list");

    todoContainer.appendChild(tempItem);
  });
};

export const renderNewProject = () => {
  const projectName = document.getElementById("input-project-title").value;
  if (!(projectName.toLowerCase() in todoList)) {

    addProject(todoList, projectName);
    const projectButton = createButton(projectName);
    changeProjectEventListener(projectButton);

    const projectList = document.getElementById("project-tabs");

    projectList.appendChild(projectButton);

    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }
  console.log(todoList);
};
