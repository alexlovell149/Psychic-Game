var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var lettersGuessed = "";
var guesses = 9;
var gameOver = false;
var letterToGuess = [];




var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Computer chose: " + computerGuess);

document.onkeypress = function() {
    var userguess = String.fromCharCode(event.keyCode).
    toLowerCase();

    if (gameOver) {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("User won, new computer choice is: " + computerGuess);
        guesses = 9;
        gameOver = false;
    }
    console.log("User typed: " + userguess)
        //console.log("" + computerGuess)

    //if we win mark a win and immediately skip to output
    if (userguess === computerGuess) {
        //mark up win
        wins++;
        //set gameOver so we can reset with logic at top of loop and print
        gameOver = true;
        //if they win, make sure to reset lettersGuesses string
        lettersGuessed = "";
        // 
    } else {
        //If the user has not guessed correctly decrement guesses global
        guesses--;
        //concatenate to string for previous guesses to show user what they have already guessed. 
        lettersGuessed += "<br />Users guess was: " + userguess;
        
        if (guesses === 0) {
            //mark as a loss because they dont have guesses left!
            losses++;
            //reset guesses for next game
            guesses = 9
                //User Lost
            lettersGuessed = "";
        }
    }
    // inserting html using javascript once keys are pressed
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Number of Guesses Left: " + guesses + "</p>" +
        "<p>Letters Guessed: " + lettersGuessed + "</p>";

    if (gameOver) {
        alert("You won! Press another letter to keep playing");
        
    } else {
            if(guesses===9){
            html = "<br /><p>Past guesses: " + lettersGuessed + "</p>";

            alert("You lost! " + "Here is the computer's guess " + computerGuess);
        }

    }
    document.querySelector('#Psychic').innerHTML = html;
}
