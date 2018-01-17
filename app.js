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
    gameWord.convert();
    
    var guessCount = 9;
    
    console.log(guessCount + " guesses remaining.\n");

    userGuess(gameWord, guessCount);
}

//recursive function for guessing
var userGuess = function(gameWord, guessCount) {
    console.log(gameWord.toString() + "\n");

    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "letterGuessed"
        }
    ]).then(function(res) {

        if (gameWord.checkLetter(res.letterGuessed)) {
            console.log("\nCorrect!\n");
            if (gameWord.checkForWin()) {
                console.log("Congratulations! The word was: ", gameWord.toString());
                reset();
            } else {
                userGuess(gameWord, guessCount);
            }
        } else {
            console.log("\nSorry...\n");
            console.log(--guessCount + " guesses remaining.\n");

            if (guessCount > 0) {
                userGuess(gameWord, guessCount);
            } else {
                gameWord.displayAll();
                console.log("Sorry, you ran out of guesses. The word was: " + gameWord.toString() + "\n\nGame Over.");
                reset();
            }
        }
    });
}

//start app
init();