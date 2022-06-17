const createMainbar = () => {
  const mainbar = document.createElement("div");
  mainbar.setAttribute("id", "main");

  const mainTitle = document.createElement("div");
  mainTitle.setAttribute("id", "main-title");

  const mainTitleHeader = document.createElement("h3");
  mainTitleHeader.textContent = "Inbox";

  const todoList = document.createElement("ul");
  todoList.setAttribute("id", "todo-list");

  const addTaskBar = document.createElement("div");
  addTaskBar.setAttribute("id", "add-task-bar");

  const addTaskButton = document.createElement("button");
  addTaskButton.setAttribute("id", "add-task-button");
  addTaskButton.textContent = "+";

  addTaskBar.appendChild(addTaskButton);

  mainTitle.appendChild(mainTitleHeader);
  mainbar.appendChild(mainTitle);
  mainbar.appendChild(todoList);
  mainbar.appendChild(addTaskBar);
  return mainbar;
};

const loadMainbar = () => {
  const mainbar = createMainbar();
  const container = document.getElementById("content");

  container.appendChild(mainbar);
};

export default loadMainbar;
