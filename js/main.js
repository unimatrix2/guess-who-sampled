function updateGame(level) {
    const right = document.getElementById('playing-now');
    const left = document.getElementById('yt-link');
    const mainLeft = document.getElementById('left');
    right.appendChild(levels[level].thumb);
    right.appendChild(levels[level].currentSong);
    left.appendChild(levels[level].currentLink);
    mainLeft.appendChild(levels[level].currentFile);
}

updateGame(1); // test invocation, just to see if everything is working fine
newGameLives();

const levelArr = [];
for (let i = 0; i < levels.length; i++) { // This loop provides that only existing levels will be selected
    levelArr.push(i);
}


