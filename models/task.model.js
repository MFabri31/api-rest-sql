const { DataTypes } = require("sequelize");
const db = require("../dbConnection/dbConnection");

const taskModel = db.define("task", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
});

module.exports = taskModel;
