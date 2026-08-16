const tasks = [];


function getAllTasks(req,res){
  if (tasks.length > 0) {
    res.json(tasks);
  } else {
    res.status(404).json({ status: "Not Found" });
  }
};

function createTask(req, res) {
  const { taskTitle, taskDesc, assignedEmployee, priority, status } = req.body;
  if (!taskTitle || priority === undefined) {
    return res.status(400).json({ status: "Missing fields" });
  }
  const newId = tasks.length;
  const newTask = { id:newId, taskTitle, taskDesc, assignedEmployee, priority,status };
  tasks.push(newTask);
  return res.status(201).json({ status: "Successful",task:newTask });
};


function getTaskById(req, res) {
  const id = req.params.id;
  if (tasks[id] != null) {
    return res.json(tasks[id]);
  } else {
    return res.status(404).json("Not Found");
  }
};


function patchTask(req, res) {
  const id = req.params.id;
  const { newPriority,newStatus } = req.body;
  if (tasks[id] == null) {
    return res.status(404).json({ status: "Not Found" })
  }
  if (newPriority == null) {
    return res.status(400).json({status:"Missing fields"})
  }
  tasks[id] = {
    ...tasks[id],priority:newPriority,status:newStatus
  }
  return res.status(200).json({status:"Successful",task:tasks[id]})
};

function updateTask(req, res) {
  const id = req.params.id;
  const { newTitle, newDesc, newEmployee, newPriority } = req.body;

  if (tasks[id] == null) {
    return res.status(404).json({ status: "Not Found" });
  }

  if (newTitle != null) tasks[id].taskTitle = newTitle;
  if (newDesc != null) tasks[id].taskDesc = newDesc;
  if (newEmployee != null) tasks[id].assignedEmployee = newEmployee;
  if (newPriority != null) tasks[id].priority = newPriority;

  return res.status(200).json({ status: "Successful", task: tasks[id] });
};

function deleteTask(req, res){
  const id = req.params.id;
  if (tasks[id] != null) {
    tasks[id] = null
    return res.status(204).send();
  } else {
    return res.status(404).json("Not Found");
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  patchTask,
  updateTask,
  deleteTask,
};
