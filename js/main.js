const right = document.getElementById('playing-now');
const left = document.getElementById('yt-link');
const mainLeft = document.getElementById('left');
const mainRight = document.getElementById('right');
const startButton = document.getElementById('start-game');

function updateGame(level) {
    right.appendChild(levels[level].thumb);
    right.appendChild(levels[level].currentSong);
    left.appendChild(levels[level].currentLink);
    mainLeft.appendChild(levels[level].currentFile);
}

function clearUI() {
    right.innerHTML = '';
    left.innerHTML = '<i class="fab fa-youtube fa-10x"></i>';
    mainLeft.innerHTML = '';
    mainRight.innerHTML = '';
}

function selectLevel(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function startGame() {
    const levelArr = [];
    for (let i = 0; i < levels.length; i++) { // This loop provides that only existing levels will be selected
        levelArr.push(i);
    }
    updateGame(selectLevel(0, levelArr.length));
    newGameLives();

}

function newGame() {
    clearUI();
    startGame();

}


/* updateGame(2); // test invocation, just to see if everything is working fine
newGameLives(); */



