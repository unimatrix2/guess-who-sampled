const right = document.getElementById('playing-now');
const left = document.getElementById('yt-link');
const mainLeft = document.getElementById('left');
const mainRight = document.getElementById('right');
const startButton = document.getElementById('start-game');

let currentLevel = selectLevel(0, levels.length);
let lastLevel = JSON.parse(JSON.stringify(currentLevel));

let bestScore = 0;
let currentGameLives = [];

const score = document.createElement('div');
score.setAttribute('id', 'score');
score.innerHTML = `<span id="score-text">Score: ${bestScore}</span>`;

function clearUI() {
    right.innerHTML = '';
    left.innerHTML = '';
    mainLeft.innerHTML = '';
    mainRight.innerHTML = '';
}

function updateCurrentLevel() {
    lastLevel = JSON.parse(JSON.stringify(currentLevel));
    if (levels.length > 1) {
        do {
            currentLevel = selectLevel(0, levels.length);
        } while (currentLevel === lastLevel);
    }
    currentLevel = 0;
}

function updateScore() {
    const scoreText = document.getElementById('score-text');
    scoreText.innerText = `Score: ${bestScore += 1}`;
}

function selectLevel(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function startGame() {
    writeAlts();
    updateGame();
    newGameLives();
    nextLives();
}

function newGame() {
    clearUI();
    startGame();
    const scoreText = document.getElementById('score-text');
    scoreText.innerText = `Score: ${0}`;
    left.removeAttribute('style');
    right.removeAttribute('style');
    mainLeft.removeAttribute('style');
    mainRight.removeAttribute('style');
}


startButton.onclick = () => {
    clearUI();
    newGame();
};