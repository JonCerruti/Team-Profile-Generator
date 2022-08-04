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


const teamMembers = [];

function init() {
    initHTML()
    addTeamMember();
}

function addTeamMember(){
    //prompt common Employee questions
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
//set role specific questions
.then(function({name, role, id, email}){
    let tMInfo = "";
    if (role === "Manager"){
        tMInfo = "officeNumber?";
    }else if (role === "Engineer"){
        tMInfo = "Github"
    }else {
        tMInfo = "School?"
    }

    inquirer.prompt([
        {
        message: `Please enter in team member's ${tMInfo}`,
        name: "tMInfo",
        },
        {
        type: "list",
        message: "Would you like to add another team member?",
        choices:[
            "Yes",
            "No"
        ],
        name: "addTM"
        }
    ])
    .then(function({tMInfo, addTM}){
        let addNewTM;
        if (role === "Manager"){
            addNewTM = new Manager(name, id, email, tMInfo);
        }else if (role === "Engineer"){
            addNewTM = new Engineer(name, id, email, tMInfo);
        }else {
            addNewTM = new Intern(name, id, email, tMInfo);
        }
        teamMembers.push(addNewTM);
        addToContainer(addNewTM)
        .then(function(){
            if(addTM === "Yes"){
                addTeamMember();
            }else{
                completeFile();
            }
        });

    });
});
}

function initHTML(){
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Example Html </title>
    </head>
    <body>
         <nav class="flex justify-center mx-auto py-10 bg-red-600 text-white text-5xl ">My Team </nav>
        
        
         <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         `;
         fs.writeFile("./dist/project_team_profile.html", html, function(err){
            if (err){
                console.log(err);
            }
         });

}

function addToContainer(teamMember){
    return new Promise(function(resolve, reject){
        const name = teamMember.employeeName();
        const role = teamMember.employeeRole();
        const id = teamMember.employeeId();
        const email = teamMember.employeeEmail();
        let data = "";
        if (role === "Manager"){
            const officeNumber = teamMember.officeNum();
            data =  `
            <div class="justify-evenly">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-xl text-center leading-tight font-medium mb-2 bg-blue-600 bg-cover px-19 text-white rounded-lg">${name}<br/>
            ${role}</h5>
                    <ul class="text-gray-700 text-base mb-4">
                    <li>ID # ${id}</li>
                    <li>Email: ${email}</li>
                    <li>Office Number: ${officeNumber}</li>
                    </ul>
            
                </div>
            </div>`
        }else if (role === "Engineer"){
            const gitHub = teamMember.gitHubUserName();
            data = `
            <div class="justify-evenly">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 class="text-xl text-center leading-tight font-medium mb-2 bg-blue-600 bg-cover px-19 text-white rounded-lg">${name}<br/>
        ${role}</h5>
                <ul class="text-gray-700 text-base mb-4">
                <li>ID # ${id}</li>
                <li>Email: ${email}</li>
                <li>GitHub: ${gitHub}</li>
                </ul>
        
            </div>
        </div>`
        }else{
            const school = teamMember.schoolName();
            data = `
            <div class="justify-evenly">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 class="text-xl text-center leading-tight font-medium mb-2 bg-blue-600 bg-cover px-19 text-white rounded-lg">${name}<br/>
        ${role}</h5>
                <ul class="text-gray-700 text-base mb-4">
                <li>ID # ${id}</li>
                <li>Email: ${email}</li>
                <li>School: ${school}</li>
                </ul>
        
            </div>
        </div>`
        }
        console.log("your team member was added!!");
        fs.appendFile("./dist/project_team_profile.html", data, function(err){
            if (err){
                return reject(err);
            };
            return resolve();
        });
    });
};

function completeFile(){
const finish = ` </div>
</body>
</html>`;

fs.appendFile("./dist/project_team_profile.html", finish, function(err){
    if (err){
        console.log(err);
    }
});

}
init();