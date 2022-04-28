const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");


// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // MySQL password
  password: "Developer32!",
  database: "employee_db",
});



const introQ = 

    {
      pageSize:9,
      type: "list",
      message: "Please pick one",
      name: "options",
      choices: ["View All Departments","View All Roles","View All Employees","Add a Department","Add a Role","Add an Employee","Update an Employee Role","Done"]
    }
  ;



  


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

    if (response.options === "View All Departments") {
      viewDepartments();
    };

    if (response.options === "View All Roles") {
      viewRoles();
    };

    if (response.options === "View All Employees") {
      viewEmployees();
    };

    if (response.options === "Add a Department") {
      addDepartment();
    };

    if (response.options === "Add a Role") {
      addRole();
    };

    if (response.options === "Add an Employee") {
      addEmployee();
    };

    if (response.options === "Update an Employee") {
      updateEmployee();
    };

    if (response.options ==="Done") {
      db.end()
    }
  });
}

function viewDepartments() {

  console.log('works')
  db.query(
    "select id as IDs, Name as Departments from department;",
    function (err, results) {
      console.table(results);
      init()
    }
  );

}

function viewRoles() {
  db.query(
    "select role_1.title as Role, role_1.id as IDs, department.name as Departments from role_1 join department on role_1.department_id = department.id;",
    function (err, results) {
      console.table(results);
      init()
    }
  );
}

function viewEmployees() {
  db.query(" select first_name as 'First Name', role_1.title as 'Job Role', role_1.salary as Salary from Employee join role_1 on Employee.role_id = role_1.id;", function(err,results) {
    console.table(results);
    init()
  })
}

init()