let keyPattern = [];
let playersPattern = [];
let level = 0; 

const startButton = document.querySelector('.start-button');
const instructions = document.querySelector('.key-instructions');
const tally = document.querySelector('.tally');
const pianoContainer = document.querySelector('.piano-container');


function nextStage(){
    level += 1;
    
    pianoContainer.classList.add('unclickable');
    instructions.innerHTML = `
    <p>
    White Keys = Z,X,C,V,B,N,M
    <br>
    Black Keys = S,D,G,H,J
    </p>`;

    tally.innerHTML = `<p>Your turn! Level ${level} of 35</p>`; 

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
    const noteSound = document.querySelector(`[data-sound='${note}']`);
    noteSound.play();

    const remainingTaps = keyPattern.length - playersPattern.length;
    
    if (playersPattern[index] !== keyPattern[index]){
        restartGame('Sorry, you got it wrong... Game over!');
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
        instructions.innerHTML = `<p>Fair Play Beethoven!</p>`;
        setTimeout(() => {
            nextStage();

        }, 1000);
        return;
    }

    tally.innerHTML = `
    <p>Your turn! ${remainingTaps} Tap${remainingTaps > 1 ? 's' : '' }</p>`;
}

function beginGame(){
    startButton.classList.add('hidden');
    instructions.classList.remove('hidden');
    instructions.innerHTML = `
    <p>White Keys = Z,X,C,V,B,N,M<br>Black Keys = S,D,G,H,J</p>`
    nextStage();
}

startButton.addEventListener('click', beginGame)

pianoContainer.addEventListener('click', e => {
    const { note } = e.target.dataset;

    if (note) dealWithClick(note);
}); 

function restartGame(message){
    alert(message); 
    keyPattern = [];
    playersPattern = [];
    level = 0; 
    startButton.classList.remove('hidden');
    instructions.classList.add('hidden');
    pianoContainer.classList.add('unclickable')
}

function playersTurn(level){
    pianoContainer.classList.remove('unclickable');
    tally.innerHTML = `
    <p>Your turn!</p>
    <p>${level} Tap${level > 1 ? 's' : '' }</p>
    ` 
}