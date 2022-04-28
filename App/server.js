const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const cTable = require('console.table');
const { json } = require('express');
const inquirer = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Developer32!',
        database: 'employee_db'
    },
    console.log(`Connected to the classlist_db database.`)
    );
    
    db.query('show tables;',function(err,results) {

        // cTable(results)
        console.table(results)
    })

const introQ =   [{
    type: "list",
    message: "Please pick one",
    name: "options",
    choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Done']
  }];

  const departmentQ = [
    {
        type: "input",
        message: "Please enter a Department Name",
        name: "department",
      },

  ];

  const roleQ = [
    {
        type: "input",
        message: "Please enter the Role's Name",
        name: "roleName",
      },

      {
        type: "input",
        message: "Please enter the Role's Salary",
        name: "roleSalary",
      },

      {
        type: "input",
        message: "Please enter the Roles Department",
        name: "roleDepartment",
      },

  ];

  const employeeAddQ = [
    {
        type: "input",
        message: "Please enter the Employee's First Name",
        name: "employeeFirst",
      },

      {
        type: "input",
        message: "Please enter the Employee's Last Name",
        name: "employeeLast",
      },

      {
        type: "input",
        message: "Please enter the Employee's Role",
        name: "employeeRole",
      },

      {
        type: "input",
        message: "Please enter the Employee's Manager",
        name: "employeeManager",
      },
  ];

  function init() {
      inquirer.prompt(introQ).then((response) => {
        if(response.options === 'View All Departments') {
            console.log(response)
        }

        if(response.options === 'View All Roles') {
            console.log(response)
        }

        if(response.options === 'View All Employees') {
            console.log(response)
        }

        if(response.options === 'Add a Department') {
            console.log(response)
        }

        if(response.options === 'Add a Role') {
            console.log(response)
        }

        if(response.options === 'Add an Employee') {
            console.log(response)
        }

        if(response.options === 'Udate an Employee') {
            console.log(response)
        }
      })
  }

  init()
    
// // Query database
// db.query('SELECT * FROM students', function (err, results) {
//   console.log(results);
// });