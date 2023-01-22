const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    'Please enter your GitHub username:',
    'Please enter your email address:',
    'What is the title of your project?:', 
    'Please write a brief description of your project:',
    'Please type in your table of content:',
    'Please write your installation guide/steps:',
    'What is your app used for?:',
    'Please choose your project license:',
    'What are your contribution guidelines?:',
    'Please tell us your test instructions:'
];

inquirer.prompt([
    {
        name: 'username',
        message: questions[0]
    },

    {
        name: 'emailAddress',
        message: questions[1]
    },

    {
        name: 'title',
        message: questions[2]
    },

    {
        name: 'description',
        message: questions[3]
    },

    {
        name: 'tableOfContent',
        message: questions[4]
    },

    {
        name: 'installation',
        message: questions[5]
    },

    {
        name: 'usage',
        message: questions[6]
    },

    {
        type: 'list',
        name: 'license',
        message: questions[7],
        choices: ['None', 'MIT License', 'Apache License 2.0', 'GNU - General Public License v3.0']
    },
    {
        name: 'contribution',
        message: questions[8]
    },

    {
        name: 'tests',
        message: questions[9]
    },

    {
        name: 'questions',

    }
]).then(data => {
    fs.writeFile(`${data.title}`, `${generateMarkdown}`, (error) => {
        if (error) {
            return console.log(err.message);
        }
    })
    //generateMarkdown(data)
    //console.log(data.title);
    
});

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    //writeToFile();

}

// function call to initialize program
init();
