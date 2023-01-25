// function to generate markdown for README

function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Content
- [Project description](#description)
- [Usage](#usage)
- [Contributing](#contributing)
- [Installation](#installation)
- [Test Instructions](#test instructions)
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
${data.email}
${data.github}

## Test Instructions
${data.test}

## License
${data.license}
`
};

module.exports = generateMarkdown;
