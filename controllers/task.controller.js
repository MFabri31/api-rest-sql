const taskModel = require("../models/task.model");

const taskController = {};

taskController.getTasks = async (req, res) => {
  const data = await taskModel.findAll();

  res.json({ status: 200, data });
};

taskController.getTask = async (req, res) => {
  const data = await taskModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json({ status: 200, data });
};

taskController.createTask = async (req, res) => {
  const data = await taskModel.create(req.body);

  res.json({ status: 201, data });
};

taskController.deleteTask = async (req, res) => {
  const user = taskModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ status: 200, user });
};

taskController.updateTask = async (req, res) => {
  const data = await taskModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  res.json({ status: 200, data });
};

module.exports = taskController;
