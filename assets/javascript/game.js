var allWords = ["wolverine", "spiderman", "beast", "gambit", "rogue", "thor", "hulk", "juggernaut", "ironman", "deadpool"];

var hint = ["Don't call me a badger", "The smartest kid in school", "I'm so blue", "I'm dangerous with cards", "I'm a good southern gal", "I was a god", "I have a split personality", "My helmet protects me", "I have a fragile heart", "My favorite color is red"];

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
var pickOneWord = "";
var rightLetterCount = 0;


function Reset()
{
	
	//reset values
	letter = 0;
	numberOfGueses = 9;
	gameLetters = [];
	guessLetters = [];
	
	document.querySelector("#letterGuess").innerHTML = guessLetters.join(" ");
	document.getElementById("guessRemaining").innerHTML = numberOfGueses;
	
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
	
	if(guessedCorrectly == false)
  	{
		
  	numberOfGueses = numberOfGueses - 1;
	document.getElementById("guessRemaining").innerHTML = numberOfGueses;	
  	
	}	
	
	if(numberOfGueses === 0)
    {
		alert("You Lost!!!");
		losses++;
		document.querySelector("#losses").innerHTML = losses;
		numberOfGueses = 9;
		doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];
	  	Reset();
    }
	  
    if(rightLetterCount === 0)
    {
  	  
		alert("You Win!!!");
		wins++;
		document.querySelector("#wins").innerHTML = wins;
		numberOfGueses = 9;
		doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];
		Reset();
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
	console.log('Keycode WORKING!');
	test = true;
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	for(var i = 0; i < doubleWord.length; i++)
	{	
		if(letter === doubleWord[i] && test === true)
		{
			var spliceDword = doubleWord.splice(i,1);
			//Test / Debug
			//console.log('Double word is = ' + doubleWord[i]);
			//console.log('Spliced Word is = ' + spliceDword);

			//console.log(doubleWord);
			CompareLetter(letter);
		}
	
	}
}
};
