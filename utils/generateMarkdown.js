// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
