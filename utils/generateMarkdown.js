// function to generate markdown for README
function generateMarkdown(data) {
  let licName;
  let licKey;
  let licBadge;
  let licDesc;

  switch (data.license) {
    case 'MIT':
      licBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case 'Apache':
      licBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'BSD':
      licBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    default:
      licBadge = "";
  }

  return `# ${data.title}
  ${licBadge}

## Description
${data.description}
  
## Table of Contents
* [Installation](#Installation)
* [Usage Information](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)

## Installation 
${data.installInst}

## Usage
${data.usageInfo}

## Contributing
${data.contribGuide}

## Tests
${data.testInst}

## Questions
Username: ${data.username}
Email: ${data.email}

## License
${data.license}
`;
}

module.exports = generateMarkdown;
