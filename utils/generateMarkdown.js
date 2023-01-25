// function to generate markdown for README.   
function generateMarkdown(data) {
  return `
# ${data.title}

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
${data.license}
`
};

// Making this file accessible to other files
module.exports = generateMarkdown;
