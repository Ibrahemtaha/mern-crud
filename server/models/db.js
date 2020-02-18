const { Sequelize } = require("sequelize");
const mysql = require("mysql2");
sequelize.import("./models/Users");
//const db = {};
const sequelize = new Sequelize("mern-crud", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//Check connection
sequelize

  .authenticate()
  .then(() => {
    console.log(" connection has been esblished successfuly");
  })
  .catch(err => {
    console.log(" unable to connect");
  });

//db.sequelize = sequelize;
//db.Sequelize = Sequelize;

module.exports = sequelize;
