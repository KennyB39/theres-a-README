// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require(generateMarkdown);
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "what is the name of your project?",
        type: "input"
    }, {
        name: "description",
        message: "what process did you use?",
        type: "input"

    }, {
        name: "installation",
        message: "How would you install this project?",
        type: "input"
    }, {
        name: "usage",
        message: "how would you use this project?",
        type: "input"
    },{
        name: "license",
        message: "choose a which licesne you'd like to use.",
        type: "checkbox",
        choices: ["MIT license", "GNU General Public License v3.0", "Eclipse Public License 2.0", "Apache License 2.0", "none"],
        validate: your - license => {
    if (your - license) {
        return true;
    } else {
        console.log("choose a license for your project>");
        return false;
    }
 
}];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("filename.md", data, (err) => {
        (err) ? console.log(err) : console.log(`success`);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((result) => {
        const markDown = generateMarkdown(result);
        writeToFile(markDown);
    })
}

// Function call to initialize app
init();
