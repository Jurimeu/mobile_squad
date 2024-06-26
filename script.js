const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score-display');
const playButton = document.getElementById('play-button');
let score = 0;


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
    }, 200);
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

setInterval(createSquare, 200);

playButton.addEventListener('click', () => {
    window.location.href = 'game.html'; // Redireciona para game.html ao clicar em Jogar
});

