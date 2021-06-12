let keyPattern = [];
let playersPattern = [];
let level = 0; 

const startButton = document.querySelector('.start-button');
const instructions = document.querySelector('.key-instructions');

function nextStage(){
    level += 1;
    const nextKeyPattern = [...keyPattern];
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
}

startButton.addEventListener('click', beginGame)