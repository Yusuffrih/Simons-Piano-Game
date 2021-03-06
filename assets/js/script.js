const startButtonRef = document.querySelector('.start-button');
const keyInstructionsRef = document.querySelector('#key-instructions');
const tallyRef = document.querySelector('#tally');
const pianoContainerRef = document.querySelector('#piano-container');
const keysWhiteRef = document.querySelectorAll('.white-key');
const keysBlackRef = document.querySelectorAll('.black-key');
const bodyRef = document.body;
const headingRef = document.querySelector('h1');
const footerRef = document.querySelector('footer');
const githubRef = document.querySelector('#github');
const colorThemeToggleRef = document.querySelector('#color-theme');
const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const whiteKeyLetters = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const blackKeyLetters = ['s', 'd', 'g', 'h', 'j'];
const elementsForColorChange = [bodyRef, headingRef, tallyRef, keyInstructionsRef, footerRef, githubRef, startButtonRef]

let keyPattern = [];
let playersPattern = [];
let level = 0; 

/**
 * moves the game onto the next stage/level
 */
const nextStage = () => {
    level += 1;
    
    pianoContainerRef.classList.add('unclickable');
    keyInstructionsRef.innerHTML = `
    <p>
        Prefer the keyboard?
        <br>
        White Keys = Z,X,C,V,B,N,M
        <br>
        Black Keys = S,D,G,H,J
    </p>`;

    tallyRef.innerHTML = `<p>Your turn - Level ${level} of 35</p>`; 

    const nextKeyPattern = [...keyPattern];
    nextKeyPattern.push(nextKey());
    playStage(nextKeyPattern);

    keyPattern = [...nextKeyPattern];
    setTimeout (() => {
        playersTurn(level);
    }, level * 600 + 1000);
}

/**
 * returns activated key & corresponding note audio
 * 
 * @param {string} note 
 */
const activateKey = (note) => {
    const key = document.querySelector(`[data-note='${note}']`);
    const noteSound = document.querySelector(`[data-sound='${note}']`);

    key.classList.add('active');
    noteSound.currentTime = 0;
    noteSound.play();

    setTimeout(() => {
        key.classList.remove('active'); 
    },300);
}

/**
 * returns the level to be played incl. next key 
 * @param {string} nextKeyPattern 
 */
const playStage = (nextKeyPattern) => {
    nextKeyPattern.forEach((note, index) => {
        setTimeout(() => {
            activateKey(note);
        }, (index + 1) * 600);
    });
}

/**
 * returns a randomly generated key
 * @returns {string} key
 */
const nextKey = () => {
    return keys[Math.floor(Math.random()*keys.length)];
}

/**
 * returns activated note & returns a message 
 * to the player depending on note input 
 * @param {string} note 
 * @returns {string}
 */
const dealWithClick = (note) => {
    const index = playersPattern.push(note) - 1;
    const key = document.querySelector(`[data-note='${note}']`);
    const noteSound = document.querySelector(`[data-sound='${note}']`);
    const remainingTaps = keyPattern.length - playersPattern.length;
    
    key.classList.add('active');
    noteSound.currentTime = 0; // This fixes the issue of no sound on double notes
    /* The above currentTime bug fix taken from WDS Youtube 
    - https://www.youtube.com/watch?v=vjco5yKZpU8 */
    noteSound.play();

    setTimeout(() => {
        key.classList.remove('active'); 
    },300);
    
    if (playersPattern[index] !== keyPattern[index]){
        restartGame(`Game over! You got to level ${level}`);
        return;
    }

    if (playersPattern.length === keyPattern.length) {
        if (playersPattern.length === 35) {
            restartGame("Well done, you've won the game!");
            return;
        }
    }

    if (playersPattern.length === keyPattern.length) {
        playersPattern = [];
        keyInstructionsRef.innerHTML = `<p>Fair Play Beethoven!</p>`;
        setTimeout(() => {
            nextStage();

        }, 1000);
        return;
    }

    tallyRef.innerHTML = `
    <p>Your turn - ${remainingTaps} Tap${remainingTaps > 1 ? 's' : '' }</p>`; 
}

/**
 * returns the game area ready for game to begin
 * triggers nextStage()
 */
const beginGame = () => {
    startButtonRef.classList.add('hidden');
    tallyRef.classList.remove('hidden');
    keyInstructionsRef.classList.remove('hidden');
    keyInstructionsRef.innerHTML = `
    <p>
        Prefer the keyboard?
        <br>
        White Keys = Z,X,C,V,B,N,M
        <br>
        Black Keys = S,D,G,H,J
    </p>`
    nextStage();
}

/**
 * Listens for click on start button &
 * triggers beginGame
 */
startButtonRef.addEventListener('click', beginGame)

/**
 * Listens for keyup ev. & passes 
 * corresponding note to dealWithClick
 */
document.addEventListener('keyup', e => {
    /**
     * Index trick taken from WDS 
     * (https://www.youtube.com/watch?v=vjco5yKZpU8)
     * and adapted for my code
     */
    const key = e.key
    const indexOfWhite = whiteKeyLetters.indexOf(key);
    const indexOfBlack = blackKeyLetters.indexOf(key);

    if (indexOfWhite > -1) {
        let {note} = keysWhiteRef[indexOfWhite].dataset;
        dealWithClick(note);
    }    

    if (indexOfBlack > -1){
        let {note} = keysBlackRef[indexOfBlack].dataset;
        dealWithClick(note);
    } 
})

/**
 * Listens for mouse click on piano key
 * passes corresponding note to dealWithClick
 */
pianoContainerRef.addEventListener('click', e => {
    const { note } = e.target.dataset;

    if (note) dealWithClick(note);
}); 

/**
 * returns game to its original state
 * @param {string} message 
 */
const restartGame = (message) => {
    alert(message); 
    keyPattern = [];
    playersPattern = [];
    level = 0; 
    startButtonRef.classList.remove('hidden');
    tallyRef.classList.add('hidden');
    keyInstructionsRef.classList.add('hidden');
    pianoContainerRef.classList.add('unclickable');
}

/**
 * returns game area ready to play for player
 * @param {number} level 
 * @returns {string} tally message
 */
const playersTurn = (level) => {
    pianoContainerRef.classList.remove('unclickable');
    tallyRef.innerHTML = `
    <p>Your turn - ${level} Tap${level > 1 ? 's' : ''}</p>` 
}

/**
 * Listens for click on color theme toggle button &
 * changes relevant elements to correct colors
 */
colorThemeToggleRef.addEventListener('click', () => {
    let i = 0;
    for (i; i<elementsForColorChange.length; i++) {
        elementsForColorChange[i].classList.toggle('color-theme-change')
    }
})