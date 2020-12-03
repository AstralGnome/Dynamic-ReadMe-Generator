const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown");
const fs = require("fs")

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
        message: "Title your project.",
      },

      {
        type: "list",
        name: "favColor",
        message: "What is your favorite color?",
        choices: ["blue", "green", "red"],
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      fs.writeFileSync("README2.md", genMarkdown(answers))
      console.log(genMarkdown(answers));
    })
}

// function call to initialize program
init();
