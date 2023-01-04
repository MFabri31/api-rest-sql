const roleModel = require("../models/role.model");

const roleController = {};

roleController.getRoles = async (req, res) => {
  const data = await roleModel.findAll();

  res.json({ status: 200, data });
};

roleController.getRole = async (req, res) => {
  const data = await roleModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json({ status: 200, data });
};

roleController.createRole = async (req, res) => {
  const data = await roleModel.create(req.body);

  res.json({ status: 201, data });
};

roleController.deleteRole = async (req, res) => {
  const user = roleModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ status: 200, user });
};

roleController.updateRole = async (req, res) => {
  const data = await roleModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  res.json({ status: 200, data });
};

module.exports = roleController;
