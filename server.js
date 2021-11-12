//sql
const mysql = require("mysql2");

//inquirer
const inquirer = require("inquirer");

//consoleTable
const consoleTable = require("console.table");

require(".env").config();

//server setup
const connect = mysql.createConnection({
  database: "DB_NAME",
  host: "DB_HOST",
  user: "DB_USER",
  password: "DB_PW",
});

//error catcher and confirmation of connection
connect.connect((err) => {
  if (err) throw err;
  console.log("Connection stablished");
});

const prompt = () => {
  console.log("+===============+");
  console.log("|   Company X   |");
  console.log("+ = Text Art =  +");
  console.log("|  Employee db  |");
  console.log("+===============+");

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
    .then(res => {
    let choice = res.choice;
    // Call the appropriate function depending on what the user chose
    switch (choice) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
        
};

prompt();

viewDepartments = () => {
  console.log("Viewing departments");
  const sqlCall = `SELECT department.id AS id, department.name AS department FROM department`;
};

// View all employees
function viewEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => loadMainPrompts());
}

// View all roles
function viewRoles() {
  db.findAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => loadMainPrompts());
}

// View all deparments
function viewDepartments() {
  db.findAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => loadMainPrompts());
}

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}
