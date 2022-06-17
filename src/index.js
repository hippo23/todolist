import "./style.css";
import loadSidebar from "./js_files/UI/sidebar";
import loadMainbar from "./js_files/UI/mainbar";
import "./js_files/Logic/todoLogic";
import "./js_files/UI/todoUI";
import { loadTodoUI } from "./js_files/UI/todoUI";
import {
  addProjectEventListener,
  addTodoEventListener,
  confirmProjectEventListener,
} from "./js_files/UI/eventListeners";
import { loadProjectUI } from "./js_files/UI/projectUI";
import { renderTodo } from "./js_files/Logic/todoLogic";

loadSidebar();
loadMainbar();
loadTodoUI();
loadProjectUI();
addTodoEventListener();
addProjectEventListener();
confirmProjectEventListener();
