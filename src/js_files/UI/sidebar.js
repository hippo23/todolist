import {
  createButton,
  wipeContent,
  createParagraph,
  createListItem,
  createList,
} from "./misc";
import { changeProjectEventListener } from "./eventListeners";

const createTodoTabs = () => {
  const list = document.createElement("div");
  list.setAttribute("id", "todo-tabs");

  const inbox = createButton("Inbox");
  inbox.setAttribute("id", "inbox");

  const today = createButton("Today");
  today.setAttribute("id", "today");

  const upcoming = createButton("Upcoming");
  upcoming.setAttribute("id", "#");

  changeProjectEventListener(inbox);
  changeProjectEventListener(today);
  changeProjectEventListener(upcoming);

  list.appendChild(inbox);
  list.appendChild(today);
  list.appendChild(upcoming);

  return list;
};

const createProjectBar = () => {
  const projectContainer = document.createElement("div");
  projectContainer.setAttribute("id", "projects");

  const projectNavbar = document.createElement("div");
  projectNavbar.setAttribute("id", "project-navbar");

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = "Projects";
  projectTitle.setAttribute("id", "project-title");

  const addProject = createButton("+");
  addProject.setAttribute("id", "project-add");

  const projectList = document.createElement("div");
  projectList.setAttribute("id", "project-tabs");

  projectNavbar.appendChild(projectTitle);
  projectNavbar.appendChild(addProject);
  projectContainer.appendChild(projectNavbar);
  projectContainer.appendChild(projectList);

  return projectContainer;
};

const createSidebar = () => {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.setAttribute("id", "sidebar");

  const list = createTodoTabs();
  const projects = createProjectBar();

  sidebarContainer.appendChild(list);
  sidebarContainer.appendChild(projects);

  return sidebarContainer;
};

const loadSidebar = () => {
  const sidebar = createSidebar();
  const container = document.querySelector("#content");

  container.appendChild(sidebar);
};

export default loadSidebar;
