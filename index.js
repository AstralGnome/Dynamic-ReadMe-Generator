const inquirer = require("inquirer");
inquirer.registerPrompt('selectLine', require('inquirer-select-line'));

const fs = require("fs");

const licensing = require("./licensing/licenses")
const genMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a compelling description of you project.",
      },
      {
        type: "input",
        name: "installInst",
        message: "Enter the installation instructions.",
      },
      {
        type: "input",
        name: "usageInfo",
        message: "Define Usage guidelines.",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Choose a license.",
        choices: ["MIT", "Apache", "BSD",]
      },
      {
        type: "input",
        name: "contribGuide",
        message: "List contributors.",
      },
      {
        type: "input",
        name: "testInst",
        message: "Define testing instructions.",
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is you email address?",
      },
      //I would like to use the checkbox and selectline in the future to make a more awesomely dynamic program
      // {
      //   type: "checkbox",
      //   name: "Layout",
      //   message: "Choose your headings.",
      //   choices: ["Table of Contents", "Installation Instructions",
      //   "Usage Information", "License", "Contributors", "Testing Instructions"],
      // },

      //Should the table of contents be an autogenerated list?
      //message: Would you like to add a customized heading?
      //   {
      //     type: "selectLine",
      //     name: "tableCont",
      //     message: "Insert your heading",
      //     choices: ["Table of Contents", "Installation Instructions",
      //     "Usage Information", "License", "Contributors", "Testing Instructions"],
      //     placeholder: "Customized Heading",
      // },
    ]).then((answers) => {
      // Use user feedback for... whatever!!
      fs.writeFileSync("README3.md", genMarkdown(answers));
      console.log(genMarkdown(answers));
    });
}

// function call to initialize program
init();
