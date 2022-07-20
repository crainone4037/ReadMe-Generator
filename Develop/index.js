// TODO: Include packages needed for this application


const inquirer = require("inquirer");
const fs = require('fs');
const utils = require ('utils');
const generateMarkdown = require ('./Develop/utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = 
    inquirer.prompt([
    {
    type: 'input',
    message: 'what is the title of your project?',
    name:'Title',
    validate:  function (answer) {
        if(answer){
            return true;
        }else{
            return console.log ("please submit an answer");
        }
    }

},
{  
    type: 'input',
    message: 'give a description about your project', 
    name: 'Description',
    validate:  function (answer) {
        if(answer){
            return true;
        }else{
            return console.log ("please submit an answer");
        }
    }

},
{
    type: "input",
    name: "installation",
    message: "Describe the installation process: ",
    validate:  function (answer) {
        if(answer){
            return true;
        }else{
            return console.log ("please submit an answer");
        }
    }

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

    ],
    validate:  function (answer) {
        if(answer){
            return true;
        }else{
            return console.log ("please submit an answer");
        }
    }

},
{
    type: "input",
    message: "enter your Github username:",
    name: "username",
    validate:  function (answer) {
        if(answer){
            return true;
        }else{
            return console.log ("please submit an answer");
        }
    }
},

{
    type: "input",
    message: "enter your email address",
    name: "email",
    validate:  function (answer) {
        if(answer){
            return true;
        }else{
            return console.log ("please submit an answer");
        }
    }
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
function init() {

try {
    const response = await inquirer.prompt(questions);
    console.log (response);

    

    
        
}
} 



// Function call to initialize app
init();
