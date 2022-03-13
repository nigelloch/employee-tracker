const inquirer = require("inquirer");
const queries = require("./queries");



const questions = function() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "option",
            choices: ["get all employees","create new employee",
            "delete employee","get all departments","create new department",
            "delete department","get all roles","create employee role","update employee role","delete employee role"]
        }
    ]).then(function(data) {
        // employee=============================================
        // get all employees
        if (data.option === "get all employees") {
            queries.selectAllemployees(questions)
        
        // create new employee
        } else if (data.option === "create new employee") {
            inquirer.prompt(
                [
                    {
                    name: "first_name",
                    message: "What is the employees first name?"
                    },
                    {
                    name: "last_name",
                    message: "what is the employees last name?"
                    }      
                ]
            ).then(function(data){
                queries.createNewemployee(data,questions)
            })
        } else if (data.option === "delete employee") {
            inquirer.prompt(
                [
                    {
                    name: "id",
                    message: "What is the employees ID?"
                    }
                ]
            ) .then(function(data){
                queries.deleteEmployee(data,questions)
            })
        // department============================================
        // get all departments
        } else if (data.option === "get all departments") {
                queries.selectAlldepartments()
                .then((departments) => {
                    console.log(departments[0]);
                })
                .then(() => {
                    questions();
                })
        // create new department
        } else if (data.option === "create new department") {
            inquirer.prompt(
                    {
                    name: "name",
                    message: "What is the new departments name?"
                    }
            ) .then(function(data){
                queries.createNewdepartment(data,questions)
            })
        } else if (data.option === "delete department") {
            const departmentQuery = "SELECT departments.id, departments.name FROM departments"
            let departments  = []
            queries.selectAlldepartments()
               .then((result) => {
                   departments = result[0];
                   const departmentChoices = departments.map(({id,name}) => ({
                       name: name,
                       value: id
                   }));
               })
               .then(() => {
                   console.log(departments)
                inquirer.prompt(
                    {
                        name: "id",
                        type: "list",
                        message: "What department would you like to delete?",
                        choices: departments
                    }
                ) .then(function(data){
                        console.log(data)
                    queries.deleteDepartment(data,questions)
                })
                .then(() => {
                    questions()
                })
               })
                // console.log(departments)
            // inquirer.prompt(
            //     {
            //         name: "id",
            //         type: "list",
            //         message: "What department would you like to delete?",
            //         choices: departments
            //     }
            // ) .then(function(data){
            //     queries.deleteDepartment(data,questions)
            // })
        // role===================================================
        // get all roles
        } else if (data.option === "get all roles") {
                queries.getRoles(questions)
        // create new role
        } else if (data.option === "create employee role") {
            inquirer.prompt(
            [
                {
                    name: "title",
                    message: "What is the new roles title?"
                },
                {
                    name: "salary",
                    message: "What is the new departments salary?"
                }
            ]
            ) .then(function(data){
                queries.createNewrole(data,questions)
            })
        } else if (data.option === "update employee role") {
            inquirer.prompt(
                [
                    {
                        name: "id",
                        message: "What is the ID of the role you'd like to update?"
                    },
                    {
                        name: "title",
                        message: "What is the roles new title?"
                    },
                    {
                        name: "salary",
                        message: "What is the roles new salary?"
                    }
                ]
            ) .then(function(data){
                queries.updateRole(data,questions)
            })
        } else if (data.option === "delete employee role") {
            
            let roles  = []
            queries.getRoles()
               .then((result) => {
                   roles = result[0];
                   const roleChoices = roles.map(({id,title}) => ({
                       name: title,
                       value: id
                   }));
               })
               .then(() => {
                   console.log(roles)
                inquirer.prompt(
                    {
                        name: "id",
                        type: "list",
                        message: "What role would you like to delete?",
                        choices: roles
                    }
                ) .then(function(data){
                        console.log(data)
                    queries.deleteRole(data,questions)
                })
            })
        }

    })
}

questions();

