let keyPattern = [];
let playersPattern = [];
let level = 0; 

const startButton = document.querySelector('.start-button');
const instructions = document.querySelector('.key-instructions');


function beginGame(){
    startButton.classList.add('hidden');
    instructions.classList.remove('hidden');
    instructions.innerHTML = `
    <p>White Keys = Z,X,C,V,B,N,M</p>
    <p>Black Keys = S,D,G,H,J</p>`
}

startButton.addEventListener('click', beginGame)