var allWords = ["wolverine", "spiderman", "beast", "gambit", "rogue", "thor", "hulk", "juggernaut", "ironman", "deadpool"];

var hint = ["Don't call me a badger", "The smartest kid in school", "I'm so blue", "I'm dangerous with cards", "I'm a good southern gal", "I was a god", "I have a split personality", "My helmet protects me", "I have a fragile heart", "My favorite color is red"];

var imageArray = ["assets/images/hangman0.png", "assets/images/hangman1.png", "assets/images/hangman2.png", "assets/images/hangman3.png", "assets/images/hangman4.png", "assets/images/hangman5.png", "assets/images/hangman6.png", "assets/images/hangman7.png", "assets/images/hangman8.png", "assets/images/hangman9.png"];

var doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];

var wins = 0;
var losses = 0;
var guessLetters = [];
var gameLetters = [];
var numberOfGueses = 9;
var image = 0;
var pickOneWord = "";
var rightLetterCount = 0;


function Reset()
{
	
	//reset values
	letter = 0;
	numberOfGueses = 9;
	image = 0;
	gameLetters = [];
	guessLetters = [];
	
	document.querySelector("#letterGuess").innerHTML = guessLetters.join(" ");
	document.getElementById("guessRemaining").innerHTML = numberOfGueses;
	document.getElementById("hangmanImage").src = imageArray[image];
	
	test = false;
	StartGame();
}



function StartGame()
{

	var num = Math.floor(Math.random() * allWords.length)
	pickOneWord = allWords[num];
	rightLetterCount = pickOneWord.length;
	//reset values
	numberOfGueses = 9;
	gameLetters = [];
	guessLetters = [];
	
	var doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];
	
	//console.log(pickOneWord);

	//manipulate the HTML
	
	document.getElementById("hints").innerHTML = hint[num];
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = losses;
	document.getElementById("guessRemaining").innerHTML = numberOfGueses;
	document.getElementById("hangmanImage").src = imageArray[image];

	for(var i =0; i < pickOneWord.length; i++)
	{
		gameLetters.push("_");
	}

	document.querySelector(".words").innerHTML = gameLetters.join(" ");


}

function CompareLetter(val)
{

  	console.log('WORKING!');
	document.getElementById("guessRemaining").innerHTML = numberOfGueses;
  	guessLetters.push(val);
  	document.querySelector("#letterGuess").innerHTML = guessLetters.join(" ");
  	var guessedCorrectly = false;
  	
  	

  for(var i=0;i<pickOneWord.length; i++)
  {
  	if(val === pickOneWord[i])
  	{
  		guessedCorrectly = true;
  		gameLetters[i] = val;
  		document.querySelector(".words").innerHTML = gameLetters.join(" ");
  		rightLetterCount--;
  		
  	} 	  
  }
	
	if(guessedCorrectly === false)
  	{
		
  		image++;
		numberOfGueses = numberOfGueses - 1;
		document.getElementById("guessRemaining").innerHTML = numberOfGueses;
		document.getElementById("hangmanImage").src = imageArray[image];	
  	
	}	
} 
	
	function winlose()
	{
	
	if(numberOfGueses === 0)
    {
		alert("You Lost!!!");
		losses++;
		document.querySelector("#losses").innerHTML = losses;
		//numberOfGueses = 0;
		doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];
	  	setTimeout(Reset, 1000);
    }
	  
    if(rightLetterCount === 0)
    {
  	  
		alert("You Win!!!");
		wins++;
		document.querySelector("#wins").innerHTML = wins;
		//numberOfGueses = 9;
		doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];
		setTimeout(Reset, 1000);
    }


//  if(guessedCorrectly == false)
//  {
//  	numberOfGueses--;
//  }

  
//  	losses++;
  	
  

  
//	  wins++;
  	
  
}

StartGame();


document.onkeyup = function(event){




if(event.keyCode >= 65 && event.keyCode <= 90)
{
	if(numberOfGueses >= 1){
		console.log('Keycode WORKING!');
		test = true;
		var letter = String.fromCharCode(event.keyCode).toLowerCase();
		for(var i = 0; i < doubleWord.length; i++)
		{	
			if(letter === doubleWord[i] && test === true)
			{
				var spliceDword = doubleWord.splice(i,1);
				//Test / Debug
				console.log('Double word is = ' + doubleWord[i]);
				console.log('Spliced Word is = ' + spliceDword);

			
				CompareLetter(letter);
				
			}
	
		}
	}
}	winlose();
};