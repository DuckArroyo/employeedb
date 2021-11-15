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

  console.log("Start the employee roster");
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
          "exit",
        ],
      },
    ])
    .then(res => {
      let choice = res.choice;
      // Call the appropriate function depending on what the user chose
      switch (choice) {
        case "view all departments":
          viewDepartments();
            break;

        case "view all roles":
          viewRoles()
            break;

        case "view all employees":
          viewEmployees()
            break;

        case "add a department":
          addDepartment()
            break;

        case "add a role":
          addRole();
            break;
            
        case "add an employee":
          addEmployee();
            break;
            
        case "update an employee role":
          updateRole();
            break;
        
        case "exit":
            quit();
            break;
            
          default:
            quit();
      }
    }
  }
  // viewDepartments = () => {
  //   console.log("Viewing departments");
  //   const sqlCall = `SELECT department.id AS id, department.name AS department FROM department`;
  //   db.findAllDepartments()
  //     .then(([rows]) => {
  //       let departments = rows;
  //       console.log("\n");
  //       console.table(departments);
  //     })
  //     .then(() => loadMainPrompts());
  // };

  // function viewDepartments() {
  //   console.log("Viewing departments");
  //   const sqlCall = `SELECT department.id AS id, department.name AS department FROM department`;
  //   db.findAllDepartments()
  //     .then(([rows]) => {
  //       let departments = rows;
  //       console.log("\n");
  //       console.table(departments);
  //     })
  //     .then(() => loadMainPrompts());
  // };

  function viewRoles() {
    db.findAllRoles()
      .then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
      })
      .then(() => loadMainPrompts());
  }

  function viewEmployees() {
    db.findAllEmployees()
      .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
      })
      .then(() => loadMainPrompts());
  }

  function addDepartment() {}
        
  function addRole() {}

  function addEmployee() {}

  function updateRole() {}

  function quit() {
    console.log("Goodbye!");
    process.exit();
  }
};

prompt();


