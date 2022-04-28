const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Developer32!",
  database: "employee_db",
});

const IntroQ = [
  {
    pageSize: 15,
    type: "list",
    message: "Please Pick One",
    name: "selection",
    choices: [
      "Engineering",
      "Intern",
      "Full-time",
      "Engineering",
      "Intern",
      "Full-time",
      "Engineering",
      "Intern",
      "Full-time",
    ],
  },
];

inquirer.prompt(IntroQ).then((response) => {
  console.log(response);
});
