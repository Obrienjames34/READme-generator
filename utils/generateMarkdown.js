// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  return `![License Badge](https://img.shields.io/badge/License-${license}-blueviolet)`;
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }

  return '- [License](#license)';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  return `## License
  This project is licensed under the ${license} license.
  `;
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}

  ## Installation

  Some installation instructions here.

  ## Usage

  Some usage info here.
  ## Credits

  Credits go here.

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
