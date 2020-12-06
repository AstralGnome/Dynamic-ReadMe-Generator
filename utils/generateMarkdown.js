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
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contributing](#Contributing)
  [Tests](#Tests)
  [Questions](#Questions)

## ${data.description}

## ${data.tableCont}

## ${data.installInst}

## ${data.usageInfo}

## ${data.license}

## ${data.contribGuide}

## ${data.testInst}

## ${data.questions}

## ${data.favColor}

`;
}

module.exports = generateMarkdown;
