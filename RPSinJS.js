/*
GlobalRPS
RPSinJS.js
This is the JavaScript version of "Rock Paper Scissors". I'm s
*/
var playOn = true;

while (playOn === true) {

var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} 

else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} 

else {
	computerChoice = "scissors";
} 

console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }
var askToPlay = prompt("Do you want to play again? (Y/N)");

asktoPlay = askToPlay.toUpperCase();

if (askToPlay == "Y") {
	playOn = true;
}
else {
playOn = false;
}	

}

console.log(compare(userChoice, computerChoice));
}