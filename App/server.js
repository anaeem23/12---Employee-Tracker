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
      choices: ["View All Departments","View All Roles","View All Employees","Add a Department","Add a Role","Add an Employee","Update an Employee's Role","Done"]
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

const employeeUpdate = [
  {
    type:'input',
    message:'Please enter Employee ID',
    name:'employeeName'
  },
  {
    type:'input',
    message:'Please enter new role id',
    name:'employeeid'
  }
]

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

    if (response.options === "Update an Employee's Role") {
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
  db.query("select Employee.id as ID, first_name as 'First Name', last_name as 'Last Name', role_1.title as 'Job Role', role_1.salary as Salary from Employee join role_1 on Employee.role_id = role_1.id;", function(err,results) {
    console.table(results);
    init()
  })
}

function addDepartment() {

  inquirer.prompt(departmentQ).then((input) => {
  db.query(`insert into department (name) values(?)`,input.department,function(err,results) {
    console.log('ADDED!')
    init()
  })
})

}

function addRole() {

  inquirer.prompt(roleQ).then((input) => {
    db.query('insert into role_1 (title,salary,department_id) values(?,?,?);',[input.roleName,input.roleSalary,input.roleDepartment], function(err,results) {
      console.log('ADDED!')
      init()
    })
  })

}

function addEmployee() {
  inquirer.prompt(employeeAddQ).then((input) => {
    db.query('insert into Employee (first_name,last_name,role_id,manager_id) values(?,?,?,?);',[input.employeeFirst,input.employeeLast,input.employeeRole,input.employeeManager], function(err,results) {
      console.log('ADDED!')
      init()
    })
  })
}

function updateEmployee() {
  inquirer.prompt(employeeUpdate).then((input) => {
    db.query('update Employee set role_id=? where id=?;', [input.employeeid,input.employeeName], function(err, results) {
      console.log('ADDED!')
      init()
    })
  })
}

init()