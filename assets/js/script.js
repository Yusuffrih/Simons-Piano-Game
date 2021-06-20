const startButtonRef = document.querySelector('.start-button');
const keyInstructionsRef = document.querySelector('.key-instructions');
const tallyRef = document.querySelector('.tally');
const pianoContainerRef = document.querySelector('.piano-container');
const keysWhite = document.querySelectorAll('.white-key');
const keysBlack = document.querySelectorAll('.black-key');
const colorThemeToggleRef = document.querySelector('#color-theme');
const whiteKeyLetters = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const blackKeyLetters = ['s', 'd', 'g', 'h', 'j'];

let keyPattern = [];
let playersPattern = [];
let level = 0; 

function nextStage(){
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

function activateKey(note){
    const key = document.querySelector(`[data-note='${note}']`);
    const noteSound = document.querySelector(`[data-sound='${note}']`);

    key.classList.add('active');
    noteSound.currentTime = 0;
    noteSound.play();

    setTimeout(() => {
        key.classList.remove('active'); 
    },300);
}

function playStage(nextKeyPattern){
    nextKeyPattern.forEach((note, index) => {
        setTimeout(() => {
            activateKey(note);
        }, (index + 1) * 600);
    });
}

function nextKey(){
    const keys = [
         'C', 'Db', 'D', 'Eb', 
         'E', 'F', 'Gb', 'G', 
         'Ab', 'A', 'Bb', 'B'];
    const random = keys[Math.floor(Math.random()*keys.length)];
    
    return random;
}

function dealWithClick(note){
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

function beginGame(){
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

startButtonRef.addEventListener('click', beginGame)

document.addEventListener('keyup', e => {
    const key = e.key
    /* Index trick taken from WDS 
    (https://www.youtube.com/watch?v=vjco5yKZpU8)
    and adampted for my code */
    const indexOfWhite = whiteKeyLetters.indexOf(key);
    const indexOfBlack = blackKeyLetters.indexOf(key);

    if (indexOfWhite > -1) {
        let {note} = keysWhite[indexOfWhite].dataset;
        dealWithClick(note);
    }    

    if (indexOfBlack > -1){
        let {note} = keysBlack[indexOfBlack].dataset;
        dealWithClick(note);
    } 
})


pianoContainerRef.addEventListener('click', e => {
    const { note } = e.target.dataset;

    if (note) dealWithClick(note);
}); 

function restartGame(message){
    alert(message); 
    keyPattern = [];
    playersPattern = [];
    level = 0; 
    startButtonRef.classList.remove('hidden');
    tallyRef.classList.add('hidden');
    keyInstructionsRef.classList.add('hidden');
    pianoContainerRef.classList.add('unclickable');
}

function playersTurn(level){
    pianoContainerRef.classList.remove('unclickable');
    tallyRef.innerHTML = `
    <p>Your turn - ${level} Tap${level > 1 ? 's' : ''}</p>` 
}

colorThemeToggleRef.addEventListener('click', () => {
    const body = document.body;
    
    body.classList.toggle('color-theme-change');
})