// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `#${data.title}
##License

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

##Table of contents
-[Description]
-[Installation]
-[Usage]
-[Contribution]
-[Testing]
-[Eamil and Github]



##Description

${data.description}

##Install

${data.installation}

##Usage

${data.usage}

##Contribution

${data.contribution}

##Testing

${data.test}

##Contact information

- Github: [${data.github}](https://github.com/${data.username})<br />

- Email: [${data.email}]









`

}

module.exports = generateMarkdown;
