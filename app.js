//sql
const mysql = require("mysql2");

//inquirer
const inquirer = require("inquirer");

//consoleTable
const consoleTable = require("console.table");

//!Commenting out becasue it is not finding the file
//!app.js starts otherwise

//require(".env").config();
//server setup
// const connect = mysql.createConnection({
//   database: process.env.DB_NAME,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
// });

const connect = mysql.createConnection({
  database: "companyX",
  host: "localhost",
  user: "root",
  password: "Omega!519",
});

//error catcher and confirmation of connection
connect.connect((err) => {
  if (err) throw err;
  console.log("Connection stablished");
});

const mainPrompt = () => {
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
          "Create the database - currently not working",
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
    .then((res) => {
      let choice = res.choices;
      console.log(choice);
      // Call the appropriate function depending on what the user chose
      switch (choice) {
        case "create the database":
          createDb();
        case "view all departments":
          viewDepartments();
          break;

        case "view all roles":
          viewRoles();
          break;

        case "view all employees":
          viewEmployees();
          break;

        case "add a department":
          addDepartment();
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
    });

  function viewDepartments() {
    console.log("Viewing all departments");
    const question = `SELECT * FROM department`;

    connect
      .promise()
      .query(question)
      //destructuing shows the row without having to invoke [0]
      .then(([rows]) => {
        // if (error) throw error;
        console.table(rows);
        mainPrompt();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function viewRoles() {
    console.log("Viewing all roles");
    const question = `SELECT * FROM role`;

    connect
      .promise()
      .query(question)
      //destructuing shows the row without having to invoke [0]
      .then(([rows]) => {
        // if (error) throw error;
        console.table(rows);
        mainPrompt();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function viewEmployees() {
    console.log("Viewing all employees");
    const question = `SELECT * FROM employee`;

    connect
      .promise()
      .query(question)
      .then(([rows]) => {
        //if (error) throw error;
        console.table(rows);
        mainPrompt();
      });
  }

  // function addDepartment() {}

  // function addRole() {}

  // function addEmployee() {}

  // function updateRole() {}

  function quit() {
    console.log("Goodbye!");
    process.exit();
  }
};

mainPrompt();
