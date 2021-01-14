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

