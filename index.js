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
    }, {
        name: "license",
        message: "choose a which licesne you'd like to use.",
        type: "checkbox",
        choices: ["MIT license", "GNU General Public License v3.0", "Eclipse Public License 2.0", "Apache License 2.0", "none"],
        validate: your_license => {
            if (your_license) {
                return true;
            } else {
                console.log("choose a license for your project?");
                return false;
            }
        }

    
},{
    name: "contributors",
    message: "How will others be able to contribute to the project",
    type: "input",
    validate: your = your_contribution => {
        if (your_contribution) {
            return true;
        } else {
            console.log("Provide information on how to contribute to the project.");
            return false;
        }
    }
},{
    name: "Test",
    message: "how can users test?",
    type: "input",
    validate: your = your_test => {
        if (your_test) {
            return true;
        } else {
            console.log("choose a license for your project?");
            return false;
        }
    }
   

},{
    name: "github",
    message: "Enter your Github username.",
    type: "input",
    validate: your = github_input => {
        if (github_input) {
            return true;
        } else {
            console.log("enter your github username.");
            return false;
        }
    }
},{
    name: "Email",
    message: "Enter your Email.",
    type: "input"
}

];

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
