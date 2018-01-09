var Letter = require("./letter.js");

function Word(randomWord) {
    this.letters = randomWord;
    this.lettersArray = randomWord.split("");
    this.lettersArray.forEach(function(letter) {
        letter = new Letter(letter)
    })
    this.display = function() {
        var logString = "";
        this.lettersArray.forEach(function(letter) {
            logString += letter.displayLetter;
        });
        return logString;
    }

}

module.exports = Word;
