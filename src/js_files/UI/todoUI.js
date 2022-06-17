import { submitTodoEventListener } from "./eventListeners";

export const addTodoUI = () => {
  const todoCard = document.createElement("div");
  todoCard.setAttribute("id", "todo-card");

  const todoAttri = document.createElement("div");
  todoAttri.classList.add("todo-attributes");

  const dateInput = document.createElement("input");
  dateInput.setAttribute("id", "todo-card-date");
  dateInput.setAttribute("type", "date");
  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("id", "priority");

  const lowOption = createSelectOption("Low", "low");
  const mediumOption = createSelectOption("Medium", "medium");
  const highOption = createSelectOption("High", "high");

  const titleForm = document.createElement("div");
  titleForm.classList.add("entry-form");

  const titleHeader = document.createElement("h3");
  titleHeader.textContent = "Title";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "todo-card-title");
  titleInput.setAttribute("type", "text");

  const detailsForm = document.createElement("div");
  detailsForm.classList.add("entry-form");

  const detailsHeader = document.createElement("h3");
  detailsHeader.textContent = "Details";

  const detailsInput = document.createElement("input");
  detailsInput.setAttribute("type", "email");

  const addTodo = document.createElement("button");
  addTodo.setAttribute("id", "submit-todo-button");
  addTodo.textContent = "Add";

  prioritySelect.appendChild(lowOption);
  prioritySelect.appendChild(mediumOption);
  prioritySelect.appendChild(highOption);

  todoAttri.appendChild(dateInput);
  todoAttri.appendChild(prioritySelect);

  titleForm.appendChild(titleHeader);
  titleForm.appendChild(titleInput);

  detailsForm.appendChild(detailsHeader);
  detailsForm.appendChild(detailsInput);

  todoCard.appendChild(todoAttri);
  todoCard.appendChild(titleForm);
  todoCard.appendChild(detailsForm);
  todoCard.appendChild(addTodo);

  return todoCard;
};

export const loadTodoUI = () => {
  const todoCard = addTodoUI();
  const content = document.getElementById("content");

  content.appendChild(todoCard);

  unloadTodoUI();
};

export const showTodoUI = () => {
  const todoCard = document.getElementById("todo-card");
  todoCard.style.display = "flex";
};

export const unloadTodoUI = () => {
  const todoCard = document.getElementById("todo-card");
  todoCard.style.display = "none";
};

const createSelectOption = (text, value) => {
  const option = document.createElement("option");
  option.textContent = text;
  option.setAttribute("value", value);

  return option;
};
