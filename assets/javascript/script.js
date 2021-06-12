let keyPattern = [];
let playersPattern = [];
let level = 0; 

const startButton = document.querySelector('.start-button');
const instructions = document.querySelector('.key-instructions');
const heading = document.querySelector('.heading');
const pianoContainer = document.querySelector('.piano-container');


function nextStage(){
    level += 1;
    const nextKeyPattern = [...keyPattern];
    nextKeyPattern.push(nextKey());
    playStage(nextKeyPattern);
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

function beginGame(){
    startButton.classList.add('hidden');
    instructions.classList.remove('hidden');
    instructions.innerHTML = `
    <p>White Keys = Z,X,C,V,B,N,M</p>
    <p>Black Keys = S,D,G,H,J</p>`
    nextStage();
}

startButton.addEventListener('click', beginGame)

function playersTurn(level){
    pianoContainer.classList.remove('unclickable');
    instructions.innerHTML = 
    `<p>Your turn!</p>
    <p>${level} Tap${level > 1 ? 's' : '' }</p>
    ` 
}