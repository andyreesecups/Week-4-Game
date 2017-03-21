var wins = 0;
var losses = 0;
var score = 0;
var targetNumber;
var characterNumber;
// var guesses = []; 

// picks a random number between 19 and 120
targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// puts random number into the HTML 
document.getElementById("goal").innerHTML = "Target Number: " + targetNumber;

// creating a function to call when player wins and loses
function generateNumbers(){
// this empties the array so that we only end up with 4 new numbers(not add a bunch of random ones on top of the existing numbers)
	characterNumber=[];
	//for loop to generate random number for each character
	for(var i=0;i<4;i++){
		randomNumber = Math.floor(Math.random() * 12);
		//pushes random number to the characterNumber;
			characterNumber.push(randomNumber);
		console.log(characterNumber);
	};
}

generateNumbers();


//adds the results to the html
document.getElementById("results").innerHTML =
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>YourScore: " + score + "</p>";



// actions when you hover over, or click the characters
function gamePlay() {
document.getElementById("results").innerHTML = 
	"<p>Your Score: " + 0 + "</p>";
	$(".characters").hover(function() {
		$(this).addClass("characterClick");
		}, function () {
        	$(this).removeClass("characterClick");
        	});

//adds to the score depending on which character is clicked
	$("#jonsnow").click(function() {
	score = score + characterNumber[0];
	});

	$("#khaleesi").click(function() {
	score = score + characterNumber[1];
	});

	$("#sansa").click(function() {
	score = score + characterNumber[2];
	});

	$("#tyrion").click(function() {
	score = score + characterNumber[3];
	});


	$(".characters").click(function() {

	document.getElementById("yourScore").innerHTML = 
	"<p>Your Score: " + score + "</p>";


	if(targetNumber === score) {
	generateNumbers();
	wins++;
	alert("The throne is yours for the taking. Rule the realm like a boss");
	score = 0;
	document.getElementById("results").innerHTML = 
	"<p>Your Score: " + 0 + "</p>";
	targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	document.getElementById("goal").innerHTML = "Target Number: " + targetNumber;

	
	};
	// alert player they lost and adjust scores accordingly
	if(score > targetNumber) {
	generateNumbers()
	losses++;
	alert("Winter is coming. Try Again.");
	score = 0;
	document.getElementById("results").innerHTML = 
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>";
	document.getElementById("yourScore").innerHTML = 
	"<p>Your Score: " + 0 + "</p>";
	targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	document.getElementById("goal").innerHTML ="Target Number: " + targetNumber;
	};
});
};

$(document).ready(gamePlay);