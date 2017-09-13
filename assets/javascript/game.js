$(document).ready(function(){
//Creating variables in global sope

// Creating random numbers that will be assigned to the crystals
// Numbers have to be between 1-12
function crystalValues() {
var crystalOne = Math.floor((Math.random() * 12) + 1);
var crystalTwo = Math.floor((Math.random() * 12) + 1);
var crystalThree = Math.floor((Math.random() * 12) + 1);
var crystalFour = Math.floor((Math.random() * 12) + 1); 
//Testing the variables above
console.log(crystalOne);
}

//Win and Loss column 
var wins = 0;
var losses = 0;
//Adding wins and losses to html 
//document.getElementById("keepScore").innerHTML = "Wins: " + wins + "<br> Loss: " + losses;
$('#triumph').text(wins);
$('#defeat').text(losses);

//Creating a random number that will appear in the random number box.
function maskedNum(){
var randomNum = Math.floor((Math.random() * 120) + 19);
//Creating a console.log to test the that randomNum works
console.log(randomNum); 
//Adding randomNum to html 
$('#ranNum').text(randomNum);
}

//Adding a variable for beginning total user score to html
//userScore will also serve as the counter
function playerScore() {
var userScore = 0; 
$('#totalScore').text(userScore);
}

// Reseting game 
function reset() {
	maskedNum();
	crystalValues();
	playerScore();
}

//Functions when player has won or lost 
function youWon () {
	wins++;
	$('#triumph').text(wins);
	reset();
}
function youLost () {
	losses++;
	$('#defeat').text(losses);
	reset();
}

//Setting up now the clicks for the images and win/loss condition
$('#crysOne').on('click', function(){
	userScore += crystalOne;
	$('#totalScore').text(userScore);
	if(userScore === randomNum) {
		youWon();
	} else if (userScore > randomNum) {
		youLost();
	}
})
$('#crysTwo').on('click', function(){
	userScore += crystalTwo;
	$('#totalScore').text(userScore);
	if(userScore === randomNum) {
		youWon();
	} else if (userScore > randomNum) {
		youLost();
	}
})
$('#crysThree').on('click', function(){
	userScore += crystalThree;
	$('#totalScore').text(userScore);
	if(userScore === randomNum) {
		youWon();
	} else if (userScore > randomNum) {
		youLost();
	}
})
$('#crysFour').on('click', function(){
	userScore += crystalFour;
	$('#totalScore').text(userScore);
	if(userScore === randomNum) {
		youWon();
	} else if (userScore > randomNum) {
		youLost();
	}
  });
//Closing tag for the function
});