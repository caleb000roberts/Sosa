function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guessCount = 0;
  let guess = 0;

  while (guessCount < totalGuesses) {
    let promptMessage = "Enter a number between 1 and 100.";

    if (guessCount > 0) {
      if (guess < numToGuess) {
        promptMessage = `${guess} is too small. Guess a larger number.`;
      } else if (guess > numToGuess) {
        promptMessage = `${guess} is too large. Guess a smaller number.`;
      }
    }

    let input = prompt(promptMessage);
    if (input === null) {
      return 0;
    }

    if (input === "" || isNaN(input)) {
      promptMessage = "Please enter a number.";
      continue;
    }

    guess = Number(input);
    guessCount++;

    if (guess === numToGuess) {
      return guessCount;
    }
  }

  return 0;
}