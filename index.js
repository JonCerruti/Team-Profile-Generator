// inquirer
// fs
// require job rols js
// function to initialize app
// function to add team member 
// inquire prompt questions 
// function that adds in html
// function that adds team members to html card
// function that writes html file
const inquirer = require("inquirer");
const  fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const { tmpdir } = require("os");

const teamMembers = [];

function init() {
function addTeamMember();
}

function addTeamMember(){
    inquirer.prompt([
    {
        message: "Team member name?",
        name: "name",

    },
    {
        type: "list",
        message: "What is this team members role",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    {
        message: "What is this team members ID?",
        name: "id"
    },
    {
        message: "What is the team member's email?",
        name: "email"
    }
])

.then(function({name, role, id, email}){
    let tMInfo = "";
    if (role === "Manager"){
        tMInfo = "office number";
    }else if (role === "Engineer"){
        tMInfo = "Github Username"
    }else {
        tMInfo = "school name"
    }

    inquirer.prompt([
        {
        message: `Please enter in team member's ${roleTitle}`,
        name: "roleTitle",
        },
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices:[
                "Yes",
                "No"
            ],
            name: "additionalTM"
        }
    ])
    .then
})
}
init();