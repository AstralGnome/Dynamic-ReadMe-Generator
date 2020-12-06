// function to generate markdown for README
function generateMarkdown(data) {
  let licName
  let licKey
  let licBadge
  let licDesc

  return `# ${data.title}

  ${licBadge}
  ## Table of Contents
  [Description](#Description)
  [Installation](#Installation Instructions)
  [Usage](#Usage Information)
  [Contributing](#Contribution Guidelines)
  [Tests](#Test Instructions)
  [Questions](#Questions)
  [License](#License)

## ${data.description}

## ${data.installInst}

## ${data.usageInfo}

## ${data.license}

## ${data.contribGuide}

## ${data.testInst}

## ${data.questions}

## ${data.username}

## ${data.email}

`;
}

module.exports = generateMarkdown;
