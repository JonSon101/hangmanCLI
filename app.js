var inquirer = require("inquirer");
var Word = require("./word.js");
var wordLibrary = require("./wordLibrary.js");

//initialize app
var init = function() {
    console.log("\nWelcome to Command Line Hangman!\n");

    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to play?",
            name: "confirm"
        }
    ]).then(function(res) {
        if (res.confirm) {
            console.log("\nOkay! Let's Play!\n");
            game();
        } else {
            console.log("\nMaybe some other time then. Have a nice day!\n");
        }
    });
}

//reset app at end
var reset = function() {
    console.log("\nThanks for playing!\n");

    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to play again?",
            name: "confirm"
        }
    ]).then(function(res) {
        if (res.confirm) {
            console.log("\nOkay! Here we go again!\n");
            game();
        } else {
            console.log("\nThanks for playing! Have a great day!\n");
        }
    })
}

//game logic
var game = function() {
    
    var randomWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
    var gameWord = new Word(randomWord);
    var guessCount = 9;
    
    console.log(guessCount + " guesses remaining.\n");

    userGuess(gameWord, guessCount);
}

//recursive function for guessing
var userGuess = function(gameWord, guessCount) {
    console.log(gameWord.display() + "\n");

    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "letterGuessed"
        }
    ]).then(function(res) {

        if (gameWord.lettersArray.indexOf(res.letterGuessed) > -1) {
            console.log("\nCorrect!\n");

            userGuess(gameWord, guessCount);
        } else {
            console.log("\nSorry...\n");
            console.log(--guessCount + " guess remaining.\n");

            if (guessCount > 0) {
                userGuess(gameWord, guessCount);
            } else {
                console.log("\nSorry, you ran out of guesses. \n\nGame Over.");
                reset();
            }
        }
    });
}

//start app
init();