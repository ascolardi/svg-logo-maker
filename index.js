const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

inquirer.prompt([
  {
    type: "text",
    message: "What are your initials? (maximum 3 characters)",
    name: "initials",
  },
  {
    type: "text",
    message: "What color would you like your logo to be?",
    name: "color",
  },
  {
    type: "list",
    message: "What shape would you like your logo to be?",
    name: "shape",
    choices: ["circle", "square", "triangle"],
  },
])


.then (response => {

  const circle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${response.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${response.initials}</text>

  </svg>`

  const square = `<svg version="1.1" width="400" height="110">

  <rect width="200" height="200" fill="${response.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${response.initials}</text>

  </svg>`

  const triangle = `<svg height="500" width="500">

  <polygon points="250,60 100,400 400,400" fill="${response.color}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${response.initials}</text>

  </svg>`

  if (response.shape == "circle"){
    fs.writeFile("circle.svg", circle, err =>
    err ? console.log("error") : console.log("success")
    )
  }

  if (response.shape == "square"){
    fs.writeFile("square.svg", square, err =>
    err ? console.log("error") : console.log("success")
    )
  }

  if (response.shape == "triangle"){
    fs.writeFile("triangle.svg", triangle, err =>
    err ? console.log("error") : console.log("success")
    )
  }

})


