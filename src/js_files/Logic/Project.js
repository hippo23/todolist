import "./Tasks";

export const createProject = () => {
  let project = [];

  return project;
};

export const addTask = (project, newTask) => {
  return project.push(newTask);
};

export const deleteTask = (project, deletedTask) => {
  return (project = project.filter(
    (Task) => Task["name"] !== deletedTask["name"]
  ));
};
