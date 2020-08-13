const right = document.getElementById('playing-now');
const left = document.getElementById('yt-link');
const mainLeft = document.getElementById('left');
const mainRight = document.getElementById('right');
const startButton = document.getElementById('start-game');
const levelArr = [];
for (let i = 0; i < levels.length; i++) { // This loop provides that only existing levels will be selected
    levelArr.push(i);
}
let currentLevel = selectLevel(0, levelArr.length);

let bestScore = 0;
const levelsPlayed = [];
const currentGameLives = [];

const score = document.createElement('div');
score.setAttribute('id', 'score');
score.innerHTML = `<span id="score-text">Score: ${bestScore}</span>`;

function updateGame(level) {
    right.appendChild(levels[level].thumb);
    right.appendChild(levels[level].currentSong);
    left.innerHTML = '<i class="fab fa-youtube fa-10x"></i>';
    left.appendChild(levels[level].currentLink);
    mainLeft.appendChild(levels[level].currentFile);
    mainRight.appendChild(score);
}

function clearUI() {
    right.innerHTML = '';
    left.innerHTML = '';
    mainLeft.innerHTML = '';
    mainRight.innerHTML = '';
}

function played() {
    levelsPlayed.push(currentLevel);
    currentLevel = selectLevel(0, levelArr.length);
    levelsPlayed.forEach(element => {
        do {
            currentLevel = selectLevel(0, levelArr.length);
        } while (currentLevel === element);
    });
}

function updateScore() {
    const scoreText = document.getElementById('score-text');
    scoreText.innerText = `Score: ${bestScore += 1}`;
}

function selectLevel(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function startGame() {
    updateGame(currentLevel);
    newGameLives();
    nextLives();
    writeAlts(currentLevel);
    played();
    
}

function newGame() {
    clearUI();
    startGame();
}


startButton.onclick = () => {
    startButton.parentNode.removeChild(startButton);
    newGame();
};