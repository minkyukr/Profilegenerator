const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
return inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is your name?"
    },
    {
    type: "input",
    name: "location",
    message: "Where are you from?"
    },
    {
    type: "input",
    name: "publicrepos",
    message: "How many public repos do you have?"
    },
    {
    type: "input",
    name: "followers",
    message: "How many followers do you have?"
    },
    {
    type: "input",
    name: "githubstars",
    message: "How many GitHub Stars do you have?"
    },
    {
    type: "input",
    name: "following",
    message: "How many followings do you have?"
    },
    {
    type: "input",
    name: "githublink",
    message: "What is your github link?"
    }
]);
}

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid blue">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3><span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">Public Repos: ${answers.publicrepos}</li>
      <li class="list-group-item">Followers: ${answers.followers}</li>
      <li class="list-group-item">GitHub Stars ${answers.githubstars}</li>
      <li class="list-group-item">Following: ${answers.following}</li>
      <li class="list-group-item">GitHub Link: ${answers.githublink}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });