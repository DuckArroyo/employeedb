//!From tutor we can delete this file

//Restarted from tutor's advice

//sql
const mysql = require("mysql2");

//inquirer
const inquirer = require("inquirer");

const consoleTable = require("console.table");

require(".env").config();

const connect = mysql.createConnection({
  database: "DB_NAME",
  host: "DB_HOST",
  user: "DB_USER",
  password: "DB_PW",
});

connect.connect((err) => {
  if (err) throw err;
  console.log("Connection stablished");
});

const prompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "What action would you like to perform?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((answers) => {
      //Switches code
    });
};

viewDepartments = () => {
  console.log("Viewing departments");
  const sql = `SELECT department.id AS id, department.name AS department FROM department`;
};
