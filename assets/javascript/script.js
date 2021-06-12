let keyPattern = [];
let playersPattern = [];

const startButton = document.querySelector('.start-button');

function beginGame(){
    startButton.classList.add('hidden');

}

startButton.addEventListener('click', beginGame)