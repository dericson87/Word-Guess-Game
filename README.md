# Word Guess Game: https://dericson87.github.io/Word-Guess-Game/.

Overview:

In this assignment, you'll create one of two possible computer games: Word Guess or Psychic. These apps will run in the browser, and feature dynamically updated HTML and CSS powered by your JavaScript code.

Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
Guess what letter I'm thinking of
Wins: (# of times the user has guessed the letter correctly)
Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
Guesses Left: (# of guesses left. This will update)
Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

Option Two: Word Guess Game (Challenge - Recommended)

Watch the demo.
Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
Use key events to listen for the letters that your players will type.
Display the following on the page:
Press any key to get started!
Wins: (# of times user guessed the word correctly).

If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
As the user guesses the correct letters, reveal them: m a d o _  _ a.

Number of Guesses Remaining: (# of guesses remaining for the user).
Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
After the user wins/loses the game should automatically choose another word and make the user play it.

Word Guess Game Bonuses:
-Play a sound or song when the user guesses their word correctly, like in our demo.
-Write some stylish CSS rules to make a design that fits your game's theme.

HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
Save your whole game and its properties in an object.
Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
Don't forget to place your global variables and functions above your object.
