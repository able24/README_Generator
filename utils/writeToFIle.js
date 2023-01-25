const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./generateMarkdown");


// array of questions for user
const questions = [
    {
        name: 'github',
        message: 'Please enter your GitHub username:'
    },

    {
        name: 'email',
        message: 'Please enter your email address:'
    },

    {
        name: 'title',
        message: 'What is the title of your project?:'
    },

    {
        name: 'description',
        message: 'Please write a brief description of your project:'
    },

    {
        name: 'installation',
        message: 'Please write your installation guide/steps:'
    },

    {
        name: 'usage',
        message: 'What is your app used for?:'
    },

    {
        name: 'contribution',
        message: 'What are your contribution guidelines?:'
    },

    {
        name: 'test',
        message: 'Please tell us your test instructions:'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please choose your project license:',
        choices: ['None', 'MIT License', 'ISC', 'Apache License 2.0', 'GNU - General Public License v3.0']

    }

];



// function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
        .then((data) => {
            fileName = `${data.title}`;
            data = markDown(data);

            fs.writeFile(`${fileName}.md`, data, (err) => {
                if (err) {
                    console.log(err + ':' + 'Something went wrong. Could not create readme file')
                } else {
                    console.log('Success! Readme File created')
                }
            });

        })
        .catch((err) => {
            console.log(err)
        });
};

module.exports = writeToFile;