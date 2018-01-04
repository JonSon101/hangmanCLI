var inquirer = require("inquirer");

var init = function() {
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
};

var reset = function() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "confirm",
            message: "Would you like to play again?"
        }
    ]).then(function(res) {
        if (res.confirm) {
            console.log("Let's Play Again!");
            game();
        } else {
            console.log("Thanks for playing!");
        }
    });
};

var game = function() {
    console.log("Game Start!");

    var word = require("./word.js");

    //render word w/blanks

    //prompt for user guess
    
    reset();
};

init();

