import { format, parseISO } from "date-fns";
import { deleteTodoEventListener } from "./eventListeners"

const wipeContent = () => {
  const container = document.getElementById("todo-list");
  container.innerHTML = "";
};

const createListItem = (text, link) => {
  const listItemParent = document.createElement("li");
  const listItem = document.createElement("a");
  listItem.textContent = text;
  listItem.href = link;
  listItemParent.appendChild(listItem);

  return listItemParent;
};

const createParagraph = (text) => {
  const paragraphItem = document.createElement("p");
  paragraphItem.textContent = text;
  return paragraphItem;
};

const createButton = (text) => {
  const button = document.createElement("button");
  button.textContent = text;

  return button;
};

const createList = (listItemsText, listItemLinks) => {
  const list = document.createElement("ul");
  listItemsText.map((x, i) => {
    const listItem = createListItem(x, listItemLinks[i]);
    list.appendChild(listItem);
  });

  return list;
};

const createListRaw = (listChild) => {
  const list = document.createElement("ul");
  listChild.forEach((element) => {
    list.appendChild(element);
  });

  return list;
};

export const createTodoItem = (title, date) => {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");

  const checkTodo = createButton("");

  deleteTodoEventListener(checkTodo);

  const todoInfo = document.createElement("div");
  todoInfo.classList.add("todo-info");

  const todoTitle = createParagraph(title);
  todoTitle.classList.add("todo-title");

  let todoDate;

  if (typeof date === 'string' || date instanceof String) {
    todoDate = createParagraph(format(parseISO(date), "MM/dd/yyyy"));
  }
  else {
    todoDate = createParagraph(format(date, "MM/dd/yyyy"));
  }
  todoDate.classList.add("todo-date");

  const separator = document.createElement("hr");

  todoInfo.appendChild(todoTitle);
  todoInfo.appendChild(todoDate);

  todoContainer.appendChild(checkTodo);
  todoContainer.appendChild(todoInfo);

  todoItem.appendChild(todoContainer);
  todoItem.appendChild(separator);

  return todoItem;
};

export {
  wipeContent,
  createListItem,
  createParagraph,
  createButton,
  createList,
  createListRaw,
};
