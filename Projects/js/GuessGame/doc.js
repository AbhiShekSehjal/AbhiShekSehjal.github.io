// script.js
let randomNumber = 0;
let maxNumber = 0;
let attempts = 0;

// Set up max number and enable game
document.getElementById("setMaxNumber").addEventListener("click", function () {
    maxNumber = parseInt(document.getElementById("maxNumberInput").value);
    const maxNumberFeedback = document.getElementById("maxNumberFeedback");
    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");

    if (isNaN(maxNumber) || maxNumber <= 0) {
        maxNumberFeedback.textContent = "Please enter a valid number greater than 0.";
        maxNumberFeedback.style.color = "red";
        return;
    }

    randomNumber = Math.floor(Math.random() * maxNumber) + 1; // Generate random number between 1 and maxNumber
    maxNumberFeedback.textContent = `Game started! Guess a number between 1 and ${maxNumber}.`;
    maxNumberFeedback.style.color = "green";

    // Enable input and button for guessing
    guessInput.disabled = false;
    guessButton.disabled = false;
});

// Handle guessing
document.getElementById("guessButton").addEventListener("click", function () {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > maxNumber) {
        feedback.textContent = `Please enter a number between 1 and ${maxNumber}.`;
        feedback.style.color = "red";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
        feedback.style.color = "green";
    } else if (userGuess < randomNumber) {
        feedback.textContent = `The number is greater than ${userGuess}.`;
        feedback.style.color = "blue";
    } else {
        feedback.textContent = `The number is less than ${userGuess}.`;
        feedback.style.color = "blue";
    }
});