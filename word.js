var Letter = require("./letter.js");

function Word(word) {

    this.letterArray = word.split("");
    this.convertedArray = [];

    this.convert = function() {
        for (let i = 0; i < this.letterArray.length; i++) {
            this.convertedArray.push(new Letter(this.letterArray[i]));
        }
    };

    this.toString = function() {
        var logString = "";

        for (let k = 0; k < this.convertedArray.length; k++) {
            logString += this.convertedArray[k].displayed + " ";
        }
        return logString;
    }
    
    //check letter against word
    this.checkLetter = function(l) {
        var counter = 0;
        for (let i = 0; i < this.convertedArray.length; i++) {
            if (l == this.convertedArray[i].visible) {
                this.convertedArray[i].displayed = this.convertedArray[i].visible;    
                counter++;       
            }
        };
        if (counter++ > 0) {
            return true;
        } else {
            return false;
        }
    }
    this.checkForWin = function() {
        var counter = 0;
        for (let i = 0; i < this.convertedArray.length; i++) {
            if (this.convertedArray[i].displayed === this.convertedArray[i].visible) {
                counter++;
            }
        }
        if (counter++ == this.convertedArray.length) {
            return true;
        } else {
            return false;
        }
    }
    this.displayAll = function() {
        for (let i = 0; i < this.convertedArray.length; i++) {
            this.convertedArray[i].displayed = this.convertedArray[i].visible;
        }
    }
}

module.exports = Word;