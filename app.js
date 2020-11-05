const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamList = [];



function createTeam() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What type of team member are you?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "No more employees"
                ]
            }

        ]).then(userChoice => {
            // pass in the variable
            switch (userChoice.memberChoice) {
                // in case userChoice
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                case "No more employees":
                    var htmlContent = render(teamList);
                    console.log({htmlContent});
                    break;
            }
        })
function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your first name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is your employee ID?",
                name: "managerID"
            },  
            {
                type: "input",
                message: "What is your email?",
                name: "managerEmail"
            }, 
            {
                type: "input",
                message: "What is your office number?",
                name: "managerOfficeNumber"
            }
        ]).then(userChoice => {
            console.log(userChoice);

    const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)
    teamList.push(manager)

    createTeam();
    
})
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your first name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is your employee ID?",
                name: "engineerID"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "engineerEmail"
            },
            {
            type: "input",
                    message: "What is your GitHub username?",
                    name: "gitHubUsername"
                }
        ]).then(userChoice => {
                console.log(userChoice);
    const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername)
    
    teamList.push(engineer)

    createTeam();

})

}

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your first name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is your employee ID?",
                name: "internID"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is your school?",
                name: "internSchool"
            }

    ]).then(userChoice => {
        console.log(userChoice);

        const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)

        teamList.push(intern)

        createTeam();

    })
}
}
// const fs = require('fs');

// fs.writeFile(outputPath, teamHTML, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("Team.html file was generated!");
// }); 

// Or
fs.writeFileSync(OUTPUT_DIR, outputPath);

createTeam();

module.exports = teamList
