import "./Tasks";
import { createProject } from "./Project";
import { renderNewProject } from "./todoLogic";

export const createTodoList = () => {
  let todoList = {
    inbox: createProject(),
    today: createProject(),
    upcoming: createProject(),
  };

  return todoList;
};

export const addProject = (todoList, projectName) => {
  if (!(projectName.toLowerCase() in todoList)) {
    return (todoList[projectName.toLowerCase()] = createProject());
  }
};

export const deleteProject = (todoList, projectName) => {
  if (projectName in todoList) {
    delete todoList[projectName];
  }
  return;
};
