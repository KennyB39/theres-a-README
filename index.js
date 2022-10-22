// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");
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
        type: "list",
        choices: ["MIT", "GNU", "Eclipse", "Apache", "none"],
        

    
},{
    name: "contributors",
    message: "How will others be able to contribute to the project",
    type: "input",
    
},{
    name: "test",
    message: "how can users test?",
    type: "input",
   
   

},{
    name: "github",
    message: "Enter your Github username.",
    type: "input",
 
},{
    name: "email",
    message: "Enter your Email.",
    type: "input",
  
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
    inquirer.prompt(questions).then((userInput) => {
        const markDown = generateMarkdown(userInput);
        writeToFile(markDown);
    })
}

// Function call to initialize app
init();
