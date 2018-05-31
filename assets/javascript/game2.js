var words = ["Wolverine", "Spiderman", "Luke Cage", "Gambit", "Rogue", "Thor", "Hulk", "Juggernaut"];

var alphabet = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h',
        'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's',
        'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];

var chosenWord = words[Math.floor(Math.random() * words.length)];
var underScore = [];
var lettersInWord = [];
var blanks = 0;
var correctWord = [];
var wrongWord = [];
var correctGuess = 0;
var guessesLeft = 9;
var myguesses = "";

var docUnderScore = document.getElementsByClassName("underscore");
var myGuess = document.getElementById("letterGuess");
var remainingGuess = document.getElementById("guessRemaining");

function generateUnderscore(){
	
	for (var i = 0; i < chosenWord.length; i++){
		
		underScore.push("_");
	}
	return underScore;
}

console.log(chosenWord);

lettersInWord = chosenWord.split('');
blanks = lettersInWord.length;

document.onkeypress = function(event){
	
	var userguess = event.key;
	
	for (var x = 0; x < alphabet.length; x++){
		
		if (userguess === alphabet[x]) {
			
			myguesses = myguesses + "," + event.key;
			
			for(var y = 0; y< blanks; y++)
			{
				underScore.push('_');
				document.getElementsByClassName('underscore').innerHTML = underScore;
			}	
			
			if (chosenWord.indexOf(userguess) > -1) {
				
				for(var z = 0; z < blanks; z++)
					{
						//Fills in right index with user key
						if(lettersInWord[z] === userguess)
						{
							correctGuess++;
							underScore[z] = userguess;
							document.getElementsByClassName('underscore').innerHTML = underScore.join(' ');
						}
					}
		
//				correctWord.push(userguess);
//				underScore[chosenWord.indexOf(userguess)] = userguess;
//				docUnderScore[0].innerHTML = underScore.join(" ");
//				//docCorrectGuess[0].innerHTML = correctWord;
//				correctGuess++;
				
				if (correctGuess === blanks) {

					alert("You Win!!!");
					guessesLeft = 9;
					myguesses  = "";
				}
	
//				else {
//
//					//wrongWord.push(userguess);
//					//docWrongGuess[0].innerHTML = wrongWord;
//					guessesLeft = guessesLeft - 1;
//				}
				
			}  else
				{
					wrongWord.push(userguess);
					guessesLeft--;
					
				}
	
			if (guessesLeft === 0)
			{
				alert("You Lost!!!");
				//losses = losses + 1;
				//resets
				guessesLeft = 9;
				myguesses  = "";
			}
			
		} 
	}
	
	
	
	
	myGuess.innerHTML = myguesses;
	remainingGuess.innerHTML = guessesLeft;
};

docUnderScore[0].innerHTML = generateUnderscore().join(" ");