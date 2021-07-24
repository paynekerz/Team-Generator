const fs = require("fs");
const inquirer = require("inquirer");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");
const manager = require("./lib/manager.js");
const engineerQuestions = require("./src/engineerQuestions");
const internQuestions = require("./src/internQuestions");
const managerQuestions = require("./src/managerQuestions");
const mainMenu = require("./src/mainMenu");
const boilerHTML =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/dist/style.css">
    <title>The Dream Team</title>
</head>
<body>
    <h1 class= "header" >The Dream Team</h1>
    <div class = "row">`;
const closingHTML =`
    </div>
</body>
</html>`

    
profileBuilder = () => {
    //resets card_etc
    let card_etc;
    inquirer
    .prompt(mainMenu)
    .then((employee) => {
        //checks to what the role is and assigns the role accordingly 
        if(employee.role === "ENGINEER") {
            inquirer.prompt(engineerQuestions)
            .then((role) => {
                const newEngineer = new engineer(employee.name, employee.id, employee.email, role.username)
                card_etc = "Github Username:"
                if(role.restart) {
                    fs.appendFile("./dist/index.html", cardBuilder(newEngineer, card_etc), (err) =>{})
                    profileBuilder();
                }
                else{
                    fs.appendFile("./dist/index.html", cardBuilder(newEngineer, card_etc, closingHTML), (err) =>{})
                }
            })
        }
        else if (employee.role === "INTERN") {
            inquirer.prompt(internQuestions)
            .then((role) => {
                const newIntern = new intern(employee.name, employee.id, employee.email, role.username)
                card_etc = "School:"
                if(role.restart) {
                    fs.appendFile("./dist/index.html", cardBuilder(newIntern, card_etc), (err) =>{})
                    profileBuilder();
                }
                else{
                    fs.appendFile("./dist/index.html", cardBuilder(newIntern, card_etc, closingHTML), (err) =>{})
                }
            })
        }
        else {
            inquirer.prompt(managerQuestions)
            .then((role) => {
                const newManager = new manager(employee.name, employee.id, employee.email, role.username)
                card_etc = "Office Number:"
                if(role.restart) {
                    fs.appendFile("./dist/index.html", cardBuilder(newManager, card_etc), (err) =>{})
                    profileBuilder();
                }
                else{
                    fs.appendFile("./dist/index.html", cardBuilder(newManager, card_etc, closingHTML), (err) =>{})
                }
            })
        }
    })
}

cardBuilder = (employee, card_etc, closeHTML) => {
    let profile = `
    <section class = "card-holder">
        <div class = "card-title">
            <div>
                <p class = "card-name">${employee.getName()}</p>
            </div>
            <div>
                <p class = "card-role">${employee.getRole()}</p>
            </div>
        </div>
        <div class= "card-body">
            <div>
                <p class= "card-ID">ID: ${employee.getId()}</p>
            </div>
            <div>
                <p class = "card-email">${employee.getEmail()}</p>
            </div>
            <div>
                <p class = "card-etc">${card_etc}${employee.getSpecial()}</p>
            </div>
        </div>
    </section>
        `
        if (closeHTML){
            return profile + closingHTML
        }
        else {
            return profile;
        }
}

start = () => {
    fs.writeFile("./dist/index.html", boilerHTML, (err) =>{});
    profileBuilder(inquirer)
}

start();