var inquirer = require("inquirer");

console.log("Welcome to Command Line Hangman!");

inquirer.prompt([
    {
        type: "confirm",
        name: "confirm",
        message: "Would you like to play?"
    }
]).then(function(res) {
    if (res.confirm) {
        console.log("Let's Play!");
        game();
    } else {
        console.log("Thanks for playing!");
    }
});

var game = function() {
    console.log("Game Start!");
};