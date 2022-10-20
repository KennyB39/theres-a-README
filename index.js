// TODO: Include packages needed for this application
const inquirer =require('inquirer')
const fs = require('fs');
const generateMarkdown = require(generateMarkdown);
// TODO: Create an array of questions for user input
const questions = [
    {name:"title",
    message: "project title?",
    type: "input"
},{
    name: "description",
    message: "what did you do?",
    type: "input"
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("filename.md",data,(err)=>{
        
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
