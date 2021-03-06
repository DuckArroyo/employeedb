//sql
const mysql = require("mysql2");

//inquirer
const inquirer = require("inquirer");

//consoleTable
const consoleTable = require("console.table");

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
  console.log("+ =          =  +");
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
          "test",
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
        case "test":
          test();
          break;

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

  function test() {
    console.log("testing queries");
    const question = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`;

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

  function addDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the deparment you would like to add?",
        },
      ])
      // RESPONSE
      .then((answer) => {
        console.log("CL answer: ", answer);
        let department = answer;
        console.log("CL department: ", department);
      });
    connect
      .promise()
      .query("Insert into department set ?", department)

      //destructuing shows the row without having to invoke [0]
      .then((res) => {
        // if (error) throw error;
        console.log("CL department: ", department);
        console.table(res);
        mainPrompt();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function addRole() {}

  // function addEmployee() {
  //   prompt([
  //     {
  //       name: "first_name",
  //       message: "What is the employee's first name?"
  //     },
  //     {
  //       name: "last_name",
  //       message: "What is the employee's last name?"
  //     }
  //   ])
  //     .then(res => {
  //       let firstName = res.first_name;
  //       let lastName = res.last_name;
  //     }
  // };

  // function updateRole() {}

  function quit() {
    console.log("Goodbye!");
    process.exit();
  }
};

mainPrompt();
