const inquirer = require("inquirer");
const queries = require("./queries");


const questions = function() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "option",
            choices: ["get all employees","get single employee","create new employee",
            "delete employee","get all departments","get single department","create new department",
            "delete department","get all roles","get single role","create new role","delete role"]
        }
    ]).then(function(data) {
        // employee=============================================
        if (data.option === "get all employees") {
            queries.selectAllemployees(questions)
        // not needed
        } else if (data.option === "get single employee") {
            console.log('singleEmployee')
            questions();
        } else if (data.option === "create new employee") {
            inquirer.prompt() .then(function(data){
                queries.createNewemployee(data,questions)
            })
        } else if (data.option === "delete employee") {
            inquirer.prompt() .then(function(data){
                queries.deleteEmployee(data,questions)
            })
        // department============================================
        } else if (data.option === "get all departments") {
            inquirer.prompt() .then(function(data){
                queries.selectAlldepartments(data,questions)
            })
        // not needed
        } else if (data.option === "get single department") {
            console.log('singleDepartment')
            questions();
        } else if (data.option === "create new department") {
            inquirer.prompt() .then(function(data){
                queries.createNewdepartment(data,questions)
            })
        } else if (data.option === "delete department") {
            inquirer.prompt() .then(function(data){
                queries.deleteDepartment(data,questions)
            })
        // role===================================================
        } else if (data.option === "get all roles") {
            inquirer.prompt() .then(function(data){
                queries.getRoles(data,questions)
            })
        } else if (data.option === "create new role") {
            inquirer.prompt() .then(function(data){
                queries.createNewrole(data,questions)
            })
        } else if (data.option === "create new role") {
            inquirer.prompt() .then(function(data){
                queries.createNewrole(data,questions)
            })
        }
    })
}


