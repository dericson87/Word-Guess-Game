

var words = ["maggie", "tommy", "jackjack", "stewie", "honeybooboo", "theodorelindseytempleton"]


var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];


var wins = 0;
var losses = 0;
var guessesRemaining = 9;


function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];

    lettersOfWord = randomWord.split("");

    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

var maggie = document.getElementById("maggie");
var rugrats = document.getElementById("rugrats");
var coolWhip = document.getElementById("coolWhip");
var jackjack = document.getElementById("jackjack");
var honeybooboo = document.getElementById("honeybooboo");


function aud() {

    //Maggie
    if (randomWord === words[0]) {
        coolWhip.pause();
        honeybooboo.pause();
        jackjack.pause();
        rugrats.pause();
        maggie.play();
        document.getElementById("image").src = "./assets/images/maggieusuck.png";
    }
   
    //Tommy
    else if (randomWord === words[1]) {
        coolWhip.pause();
        honeybooboo.pause();
        jackjack.pause();
        maggie.pause();
        rugrats.play();
        document.getElementById("image").src = "./assets/images/tommypickles.jpg";
    }
    //Jackjack 
    else if (randomWord === words[2]) {
        coolWhip.pause();
        honeybooboo.pause();
        rugrats.pause();
        maggie.pause();
        jackjack.play();
        document.getElementById("image").src = "./assets/images/jackjacklaughing.gif";
    }

    //Stewie 
    else if (randomWord === words[3]) {
        honeybooboo.pause();
        jackjack.pause();
        rugrats.pause();
        maggie.pause();
        coolWhip.play();
        document.getElementById("image").src = "./assets/images/stewie.jpg";
    }

    //honeybooboo 
    else if (randomWord === words[4]) {
        jackjack.pause();
        rugrats.pause();
        maggie.pause();
        coolWhip.pause();
        honeybooboo.play();
        document.getElementById("image").src = "./assets/images/mamaJuneDance.gif";
    }
    
    //Boss Baby 
    else if (randomWord === words[5]) {
        honeybooboo.pause();
        rugrats.pause();
        maggie.pause();
        coolWhip.pause();
        jackjack.pause();
        document.getElementById("image").src = "./assets/images/cookies.gif";
    } 
};

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;
 
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
     
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        guessesRemaining--;
        uhOhBaby.play();
    }
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

 
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
    
        document.getElementById("winstracker").innerHTML = " " + wins;

       
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/maggie.gif";
        babycry.play();
        document.getElementById("losstracker").innerHTML = " " + losses;
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(guesses);
   
    complete();
 
    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}