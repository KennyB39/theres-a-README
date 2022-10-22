// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "Apache":
            license= "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
            break;
            case "GNU":
            license= "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
            break;
            case "Eclipse":
            license= "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
            break;
            case "MIT":
            license= "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
            break;
                default:
                    license="";

    }
    return license;    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const license = renderLicenseLink (data.license)
return `# ${data.title}
## License

${license}

## Table of contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)




## Description

${data.description}

## Install

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Testing

${data.test}

## Questions

[Github](https://github.com/${data.github})

Contact me by email ${data.email}
`

}

module.exports = generateMarkdown;
