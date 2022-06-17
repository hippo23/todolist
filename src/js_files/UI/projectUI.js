import "./misc";
import { createButton } from "./misc";

export const loadProjectUI = () => {
  const projectCard = document.createElement("div");
  projectCard.setAttribute("id", "project-card");

  const titleForm = document.createElement("div");
  titleForm.classList.add("entry-form");

  const titleHeader = document.createElement("h3");
  titleHeader.textContent = "Project Title";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "input-project-title");
  titleInput.setAttribute("type", "text");

  const options = document.createElement("div");
  options.classList.add("card-options");

  const addProjectButton = createButton("Add");
  addProjectButton.setAttribute("id", "add-project-button");

  const cancelProjectButton = createButton("Cancel");

  titleForm.appendChild(titleHeader);
  titleForm.appendChild(titleInput);

  options.appendChild(addProjectButton);
  options.appendChild(cancelProjectButton);

  projectCard.appendChild(titleForm);
  projectCard.appendChild(options);

  const content = document.getElementById("content");

  content.appendChild(projectCard);

  unloadProjectUI();
};

export const showProjectUI = () => {
  console.log("hatdog");
  const projectCard = document.getElementById("project-card");

  projectCard.style.display = "flex";
};

export const unloadProjectUI = () => {
  const projectCard = document.getElementById("project-card");

  projectCard.style.display = "none";
};
