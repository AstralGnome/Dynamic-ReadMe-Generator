// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# ${data.favColor}

`;
}

module.exports = generateMarkdown;