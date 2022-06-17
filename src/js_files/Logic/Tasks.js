const createTask = (name, date) => {
  let task = { name: name, date: date };

  return task;
};

const getTaskName = (task) => {
  return task["name"];
};

const getTaskDate = (task) => {
  return task["date"];
};

const changeDate = (task, newDate) => {
  task["date"] = newDate;
  return;
};

const changeName = (task, newName) => {
  task["name"] = newName;
  return;
};

export { createTask, getTaskDate, getTaskName, changeDate, changeName };
