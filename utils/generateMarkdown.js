// Importing files   
const licenseBadges = require("./licenseBadges");
const licenseLinks = require("./licenseLinks");

// Function to add comment and link to chosen license
function licenseSection(license) {
  if(license) {
      return `Licensed under the ${licenseLinks(license)} license`
  } else {
      return '';
  }
};


// Function to generate markdown file
function generateMarkdown(data) {
  return `
# ${data.title}

${licenseBadges(data.license)}

## Table of Content
- [Project description](#description) 
- [Usage](#usage)
- [Contributing](#contributing)
- [Installation](#installation)
- [Test Instructions](#tests)
- [Questions](#questions)
- [License](#license)

## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## Contributing
${data.contributing}

## Questions
For questions and enquiries, please email ${data.email}. For more information, visit my github page at https://wwww.github.com/${data.github}

## Tests
${data.test}

## License
${licenseSection(data.license)}
`
};

// Making this file accessible to other files
module.exports = generateMarkdown;
