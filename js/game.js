// Data structure functions

function getThumb(level) {
    const thumb = new Image();
    thumb.src = `thumbs/level-${level}.jpg`;
    thumb.setAttribute('id', 'thumbnail');
    return thumb;
}

function currentSong(level) {   
    const current = document.createElement('span');
    current.setAttribute('id', 'current-song');
    switch(level) {
        case 1:
            current.innerText = 'Black Eyed Peas - Yesterday';
            break;
        case 2:
            current.innerText = 'Lil Wayne - Secret Weapon';
            break;
        case 3:
            current.innerText = 'Blu and Exile - Blue as I Can Be';
            break;
    }
    return current;
}

function currentLink(level) {
    const text = document.createElement('a');
    text.setAttribute('id', 'yt-link-text');
    text.setAttribute('target', '_blank');
    text.innerText = 'Listen to the full track on YouTube!';
    switch(level) {
        case 1:
            text.setAttribute('href', 'https://www.youtube.com/watch?v=ulxG4AdWRQE');
            break;
        case 2:
            text.setAttribute('href', 'https://www.youtube.com/watch?v=tCpMwEdZFiI');
            break;
        case 3:
            text.setAttribute('href', 'https://www.youtube.com/watch?v=N40NewlFY5I');
            break;
    }
    return text;
}

function currentFile(level) {
    const audio = document.createElement('audio');
    audio.setAttribute('id', 'song');
    const button = document.createElement('i');
    button.setAttribute('class', 'fas fa-play fa-10x');
    button.setAttribute('id', 'play');
    button.setAttribute('onclick', 'document.getElementById("song").play()');
    switch(level) {
        case 1:
            audio.src = 'songs/yesterday.mp3';
            break;
        case 2:
            audio.src = 'songs/secretweapon.mp3';
            break;
        case 3:
            audio.src = 'songs/blueasicanget.mp3';
            break;

    }
    button.appendChild(audio);
    return button;

}

function getAlternatives() {
    const alt1 = document.createElement('button');
    const alt2 = document.createElement('button');
    const alt3 = document.createElement('button');
    alt1.setAttribute('id', 'alt');
    alt2.setAttribute('id', 'alt');
    alt3.setAttribute('id', 'alt');
    while (alt1.innerText === alt2.innerText ||
        alt1.innerText === alt3.innerText ||
        alt2.innerText === alt3.innerText) {
            alt1.innerText = alternatives[Math.floor(Math.random() * (alternatives.length - 1) ) + 1];
            alt2.innerText = alternatives[Math.floor(Math.random() * (alternatives.length - 1) ) + 1];
            alt3.innerText = alternatives[Math.floor(Math.random() * (alternatives.length - 1) ) + 1];
        }
    return [alt1, alt2, alt3];
}

function currentAnswer(level) {
    const answer = document.createElement('button');
    answer.setAttribute('id', 'alt');
    switch(level) {
        case 1:
            answer.innerText =  'Cypress Hill - Insane in the Brain';
            break;
        case 2:
            answer.innerText = 'Journey - Separate Ways';
            break;
        case 3:
            answer.innerText = 'Eminem - White America';
            break;
    }
    return answer;
}

// Life functions

function newGameLives() {
    const life = document.createElement('i');
    const life2 = document.createElement('i');
    const life3 = document.createElement('i');
    life.setAttribute('class', 'fas fa-heart fa-8x');
    life2.setAttribute('class', 'fas fa-heart fa-8x');
    life3.setAttribute('class', 'fas fa-heart fa-8x');
    currentGameLives.push(life, life2, life3);
}

function nextLives() {
    const lives = document.createElement('div');
    lives.setAttribute('id', 'lives');
    currentGameLives.forEach(element => {
        lives.appendChild(element);
    });
    mainLeft.appendChild(lives);

}

// Game UI functions

function writeAlts() {
    const alt1 = levels[currentLevel].alternatives[0];
    const alt2 = levels[currentLevel].alternatives[1];
    const alt3 = levels[currentLevel].alternatives[2];
    const alt4 = levels[currentLevel].answer;
    alt1.setAttribute('onclick', 'removeLife()');
    alt2.setAttribute('onclick', 'removeLife()');
    alt3.setAttribute('onclick', 'removeLife()');
    alt4.setAttribute('onclick', 'nextLevel()');
    alt1.setAttribute('class', 'wrong');
    alt2.setAttribute('class', 'wrong');
    alt3.setAttribute('class', 'wrong');
    alt4.setAttribute('class', 'correct');
    alt1.style.order = 0;
    alt2.style.order = 0;
    alt3.style.order = 0;
    alt4.style.order = 0;
    if (alt1.style.order === alt2.style.order ||
        alt1.style.order === alt3.style.order ||
        alt1.style.order === alt4.style.order ||
        alt2.style.order === alt3.style.order ||
        alt2.style.order === alt4.style.order ||
        alt3.style.order === alt4.style.order) {
            alt1.style.order = Math.floor(Math.random() * (5 - 1) ) + 1;
            alt2.style.order = Math.floor(Math.random() * (5 - 1) ) + 1;
            alt3.style.order = Math.floor(Math.random() * (5 - 1) ) + 1;
            alt4.style.order = Math.floor(Math.random() * (5 - 1) ) + 1;
        }
    mainRight.appendChild(alt1);
    mainRight.appendChild(alt2);
    mainRight.appendChild(alt3);
    mainRight.appendChild(alt4);
}

function removeLife() {
    currentGameLives.pop();
    const left = document.getElementById('playing-now'); // had to redeclare bc scope issues
    const right = document.getElementById('yt-link'); // had to redeclare bc scope issues
    if (currentGameLives.length === 0) {
        setTimeout(() => {
            clearUI();
            left.style.backgroundColor = 'lightcoral';
            right.style.backgroundColor = 'lightcoral';
            mainLeft.style.backgroundColor = 'lightcoral';
            mainRight.style.backgroundColor = 'lightcoral';
            left.innerHTML = `<h1 id="lost-text">YOU<br>LOST!</h1>`;
            mainLeft.innerHTML = `<button id="start-game" onclick="clearUI();rebuildLevels();newGame();">Play Again?</button>`;
        }, 2000);
    } else {
        setTimeout(() => {
            clearUI();
            writeAlts();
            updateGame();
            nextLives();
        }, 2000);
    }
}

function nextLevel() {
    const left = document.getElementById('playing-now'); // had to redeclare bc scope issues
    const right = document.getElementById('yt-link'); // had to redeclare bc scope issues
    if (levels.length === 0 && currentGameLives.length > 0) {
        setTimeout(() => {
            clearUI();
            left.style.backgroundColor = 'lightgreen';
            right.style.backgroundColor = 'lightgreen';
            mainLeft.style.backgroundColor = 'lightgreen';
            mainRight.style.backgroundColor = 'lightgreen';
            left.innerHTML = `<h1 id="won-text">YOU<br>WON!</h1>`;
            mainLeft.innerHTML = `<button id="start-game" onclick="clearUI();rebuildLevels();newGame();">Play Again?</button>`;
            currentGameLives = [];
            bestScore = 0;
        }, 2000);
    } else {
        setTimeout(() => {
            clearUI();
            writeAlts();
            updateGame();
            updateScore();
            nextLives();
    
        }, 2000);
    }
}

function updateGame() {
    right.appendChild(levels[currentLevel].thumb);
    right.appendChild(levels[currentLevel].currentSong);
    left.innerHTML = '<i class="fab fa-youtube fa-10x"></i>';
    left.appendChild(levels[currentLevel].currentLink);
    mainLeft.appendChild(levels[currentLevel].currentFile);
    mainRight.appendChild(score);
    levels.splice(currentLevel, 1);
    updateCurrentLevel();
}



const alternatives = ['Lady Gaga - Poker Face', 'Marilyn Manson - Mechanical Animals', 'Pink Floyd - Money', 'The Who - Who Are You',
'Black Sabbath - Iron Man', 'Beyoncé - Run the World', 'Rihanna - S&M', 'Murderdolls - White Wedding', 'Black Eyed Peas - Meet me Halfway',
'Alice Cooper - Million Dollar Babies', 'Benny Benassi - Satisfaction', 'Wu Tang Clan - C.R.E.A.M.', 'Blind Guardian - Mirror Mirror', 
'Bob Marley - Jamming', 'Bon Jovi - Living on a Prayer', 'Skrillex - Bangarang', 'Bonetrips - Yallah', 'Matstubs - Spirits', 'Com Truise - VHS Sex', 
'Criolo - Vasilhame', 'Datsik - Bonafide Hustler', 'deadmau5 - Some Chords', 'Dio - Holy Diver', 'Doctor P - Big Boss', 'Flux Pavilion - Bass Canon', 
'Eminem - Lose Yourself', 'Everlast - Saving Grace', 'Focus - Hocus Pocus'];

let levels = [
    {
        thumb: getThumb(1),
        currentSong: currentSong(1),
        currentLink: currentLink(1),
        currentFile: currentFile(1),
        answer: currentAnswer(1),
        alternatives: getAlternatives(),
    },
    {
        thumb: getThumb(2),
        currentSong: currentSong(2),
        currentLink: currentLink(2),
        currentFile: currentFile(2),
        answer: currentAnswer(2),
        alternatives: getAlternatives(),
    },
    {
        thumb: getThumb(3),
        currentSong: currentSong(3),
        currentLink: currentLink(3),
        currentFile: currentFile(3),
        answer: currentAnswer(3),
        alternatives: getAlternatives(),
    }
];

function rebuildLevels() {
    levels = [
        {
            thumb: getThumb(1),
            currentSong: currentSong(1),
            currentLink: currentLink(1),
            currentFile: currentFile(1),
            answer: currentAnswer(1),
            alternatives: getAlternatives(),
        },
        {
            thumb: getThumb(2),
            currentSong: currentSong(2),
            currentLink: currentLink(2),
            currentFile: currentFile(2),
            answer: currentAnswer(2),
            alternatives: getAlternatives(),
        },
        {
            thumb: getThumb(3),
            currentSong: currentSong(3),
            currentLink: currentLink(3),
            currentFile: currentFile(3),
            answer: currentAnswer(3),
            alternatives: getAlternatives(),
        }
    ];
}