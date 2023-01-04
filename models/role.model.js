const { DataTypes } = require("sequelize");
const db = require("../dbConnection/dbConnection");

const roleModel = db.define("role", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
});

module.exports = roleModel;
