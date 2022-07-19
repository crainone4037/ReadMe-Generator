// TODO: Include packages needed for this application


const inquirer = require("inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = 
    inquirer.prompt([
    {
    type: 'input',
    message: 'what is the title of your project?',
    name:'Title'

},
{  
    type: 'input',
    message: 'give a description about your project', 
    name: 'Description',

},
{
    type: "input",
    name: "installation",
    message: "Describe the installation process: ",

},
{
    type: "list", 
    message: "choose a license:",
    name: "license",
    choices: [
        "MIT",
        "apache",
        "Mozilla",
        "GNU"

    ]

},
{
    type: "input",
    message: "enter your Github username:",
    name: "username"
},

{
    type: "input",
    message: "enter your email address",
    name: "email"
}


]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName , data, err => {
        if(err) {
            return console.log(err); 

        }else {
            console.log ("you have successfully generated a README.md file");

        }
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
