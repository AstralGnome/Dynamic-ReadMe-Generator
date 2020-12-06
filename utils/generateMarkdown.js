// function to generate markdown for README
function generateMarkdown(data) {
  let licName
  let licKey
  let licBadge
  let licDesc

  return `# ${data.title} ${licBadge}

  ## Description
  ####${data.description}
  
  ## Table of Contents
  [Installation](#Installation)
  [Usage](#Usage Information)
  [Contributing](#Contributing)
  [Tests](#Tests)
  [Questions](#Questions)
  [License](#License)

## Installation 
${data.installInst}

## Usage
${data.usageInfo}

## Contributing
${data.contribGuide}

## Tests
${data.testInst}

## Questions
${data.username}
${data.email}

## License
${data.license}
`;
}

module.exports = generateMarkdown;
