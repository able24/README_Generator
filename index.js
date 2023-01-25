// Importing packages and other files
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = require("./utils/writeToFile");



// function to initialize program
function init() {
    writeToFile();

};

// function call to initialize program
init();
