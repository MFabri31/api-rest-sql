const { DataTypes } = require("sequelize");
const db = require("../dbConnection/dbConnection");

const userModel = db.define("User", {
  name: DataTypes.STRING,
  lastName: DataTypes.STRING,
  age: DataTypes.STRING,
  address: DataTypes.STRING,
});

module.exports = userModel;
