/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * selectors for event listeners
 */
let game;
const startButton = document.getElementById('btn__reset');
const buttons = document.querySelectorAll('.key');


/**
 * Event listeners
 */

startButton.addEventListener('click', () => {
    game = new Game;
    game.startGame();
})


buttons.forEach(button => {
    button.addEventListener('click', event => {
        game.handleInteraction(event.target);
    })
})

document.addEventListener('keydown', event => {
    buttons.forEach(button => {
        if(button.textContent === event.key) {
            button.click();
        }
    })
})


// function to restart de game board
function restartGame() {
    // Restart the board
    const phraseDiv = document.getElementById('phrase');
    phraseDiv.innerHTML = '';

    // buttons to initial state
    const buttons = document.querySelectorAll('.key');
    buttons.forEach(button => {
        button.className = 'key';
        button.removeAttribute('disabled');
    })

    // hearts to initial state
    const heartsImg = document.querySelectorAll("img[src='images/lostHeart.png']");
    heartsImg.forEach(heart => {
        heart.src = 'images/liveHeart.png';
    })
}
