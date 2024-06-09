let currentLevel = 1;
let currentEquation = {};
let correctAnswers = 0;
let wrongAnswers = 0;
let startTime;
const totalQuestions = 10;

function startGame() {
    currentLevel = 1;
    correctAnswers = 0;
    wrongAnswers = 0;
    startTime = new Date();
    document.getElementById('message').textContent = '';
    document.getElementById('startGame').style.display = 'none';
    generateEquation();
}

function generateEquation() {
    let num1, num2, operator;

    if (currentLevel === 1) {
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        operator = '+';
    } else if (currentLevel === 2) {
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        operator = Math.random() > 0.5 ? '+' : '-';
    } else if (currentLevel === 3) {
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        operator = Math.random() > 0.5 ? '*' : '/';
        if (operator === '/' && num2 === 0) num2 = 1; // Avoid division by zero
    } else if (currentLevel >= 4) {
        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor(Math.random() * 100);
        operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
        if (operator === '/' && num2 === 0) num2 = 1; // Avoid division by zero
    }

    currentEquation = {
        num1,
        num2,
        operator,
        answer: eval(`${num1} ${operator} ${num2}`)
    };

    document.getElementById('equation').textContent = `${num1} ${operator} ${num2} = ?`;
    document.getElementById('answerInput').value = '';
}

function enterNumber(num) {
    const inputField = document.getElementById('answerInput');
    inputField.value += num;
    checkAnswer();
}

function checkAnswer() {
    const inputField = document.getElementById('answerInput');
    const userAnswer = parseFloat(inputField.value);

    if (userAnswer === currentEquation.answer) {
        correctAnswers++;
        document.getElementById('message').textContent = 'Correct!';
        if (correctAnswers === totalQuestions) {
            levelUp();
        } else {
            generateEquation();
        }
    } else if (inputField.value.length >= currentEquation.answer.toString().length) {
        wrongAnswers++;
        document.getElementById('message').textContent = 'Wrong!';
        if (wrongAnswers === 3) {
            levelDown();
        }
    }
}

function levelUp() {
    currentLevel++;
    correctAnswers = 0;
    wrongAnswers = 0;
    alert('Congratulations! You leveled up!');
    generateEquation();
}

function levelDown() {
    if (currentLevel > 1) {
        currentLevel--;
        correctAnswers = 0;
        wrongAnswers = 0;
        alert('You leveled down. Try again!');
        generateEquation();
    }
}
