let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const message = document.getElementById('message');

    if (userGuess == randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
        message.style.color = 'green';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
}
