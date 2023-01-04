const userModel = require("../models/user.model");

const userController = {};

userController.getUsers = async (req, res) => {
  const data = await userModel.findAll();

  res.json({ status: 200, data });
};

userController.getUser = async (req, res) => {
  const data = await userModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json({ status: 200, data });
};

userController.createUser = async (req, res) => {
  const data = await userModel.create(req.body);

  res.json({ status: 201, data });
};

userController.deleteUser = async (req, res) => {
  const user = userModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ status: 200, user });
};

userController.updateUser = async (req, res) => {
  const data = await userModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  res.json({ status: 200, data });
};

module.exports = userController;
