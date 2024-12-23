const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score-display');
const playButton = document.getElementById('play-button');
const facil = document.getElementById('facil');
const medio = document.getElementById('medio');
const dificil = document.getElementById('dificil');



let score = 0;

let velocidade = 250;



function createSquare() {
    const square = document.createElement('div');
    square.className = 'square';

    const x = Math.random() * (gameArea.offsetWidth - 50);
    const y = Math.random() * (gameArea.offsetHeight - 50);

    square.style.left = `${x}px`;
    square.style.top = `${y}px`;

    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    square.style.backgroundColor = randomColor;

    gameArea.appendChild(square);

    square.addEventListener('click', () => {
        score++;
        updateScore();
        gameArea.removeChild(square);
    });

    setTimeout(() => {
        gameArea.removeChild(square);
    }, velocidade);
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

setInterval(createSquare, velocidade);


playButton.addEventListener('click', () => {
    window.location.href = 'game.html'; // Redireciona para game.html ao clicar em Jogar
});

facil.addEventListener('click', () => {
    window.location.href = 'game.html'; // Redireciona para game.html ao clicar em Jogar
    velocidade = 1000;
});

medio.addEventListener('click', () => {
    window.location.href = 'game.html'; // Redireciona para game.html ao clicar em Jogar
    velocidade = 500;
});

dificil.addEventListener('click', () => {
    window.location.href = 'game.html'; // Redireciona para game.html ao clicar em Jogar
    velocidade = 200;
});



