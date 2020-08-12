
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

function newGameLives() {
    const mainLeft = document.getElementById('left');
    const lives = document.createElement('div');
    lives.setAttribute('id', 'lives');
    const life = document.createElement('i');
    const life2 = document.createElement('i');
    const life3 = document.createElement('i');
    life.setAttribute('class', 'fas fa-heart fa-8x');
    life2.setAttribute('class', 'fas fa-heart fa-8x');
    life3.setAttribute('class', 'fas fa-heart fa-8x');
    lives.appendChild(life);
    lives.appendChild(life2);
    lives.appendChild(life3);
    mainLeft.appendChild(lives);
}

const levels = [
    {
        thumb: getThumb(1),
        currentSong: currentSong(1),
        currentLink: currentLink(1),
        currentFile: currentFile(1),
        answer: 'PLACEHOLDER',
    },
    {
        thumb: getThumb(2),
        currentSong: currentSong(2),
        currentLink: currentLink(2),
        currentFile: currentFile(2),
        answer: 'PLACEHOLDER',
    },
    {
        thumb: getThumb(3),
        currentSong: currentSong(3),
        currentLink: currentLink(3),
        currentFile: currentFile(3),
        answer: 'PLACEHOLDER',
    }
];
