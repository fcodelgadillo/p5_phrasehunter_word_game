/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
 * This Class represents a game
 *@class
 */
class Game {


    /**
     * @constructor
     * @property {number} missed - failed guesses
     * @property {object} phrases - an array of phrases for the game
     * @property {string|null} activePhrase - current phrase in the game
     */
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('I AM THE KING OF THE WORLD'),
                        new Phrase('HOUSTON WE HAVE A PROBLEM'),
                        new Phrase('I SEE DEAD PEOPLE'),
                        new Phrase('MY PRECIOUS'),
                        new Phrase('HASTA LA VISTA BABY')];
        this.activePhrase = null;
    }

    /**
     * This method selects a random phrase for the game
     * @method
     * @return {object} Phrase - object chosen to bu used
     */
    getRandomPhrase() {
       return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }

    /**
     * This method starts the game
     * @method
     * @return void
     */

    startGame() {
        // Restart the elements of the game
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

        // misses equal to zero
        this.missed = 0;




        // selector to get the overlay div and hide it
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        // change the active phrase from null to a real phrase
        this.activePhrase = new Phrase(this.getRandomPhrase().phrase);

        // take the active phrase and display it
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * This method is in charge of interaction with the game on screen
     * @method
     * @param button - The clicked button on screen
     */
    handleInteraction(button) {
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            button.setAttribute("disabled", "");
            this.activePhrase.showMatchedLetter(button.textContent);
            game.checkForWin();
        } else {
            button.classList.add('wrong');
            button.setAttribute("disabled", "");
            game.removeLife();
        }
    }

    /**
     * This method checks if the player has won
     * @method
     * @return {boolean} True if the player has won the game
     */
    checkForWin() {
        const lettersInPhrase = document.querySelectorAll('.letter');
        for (let element of lettersInPhrase) {
            if (element.classList.contains('hide')) {
                return false;
            }
        }
        this.gameOver(true);
        return true;
    }

    /**
     * This method removes a life from the scoreboard
     * @method
     * @return void
     */
    removeLife() {
        game.missed++;
        const heartsImg = document.querySelectorAll("img[src='images/liveHeart.png']");
        heartsImg[heartsImg.length - 1].src = "images/lostHeart.png";
        if (this.missed === 5) {
            game.gameOver(false);
        }
    }

    /**
     * This method display the original screen and the proper message of winning or losing
     * @method
     * @param {boolean} gameWon - Whether or not the player has won the game
     */
    gameOver(gameWon) {
        const overlayDisplay = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        if (this.missed === 5) {
            overlayDisplay.style.display ='';
            gameOverMessage.textContent = "Better Luck Next Time, You Lose!";
            overlayDisplay.style.backgroundColor = 'orange';

        } else if (gameWon) {
            gameOverMessage.textContent = "Well Done, You Have Won!";
            overlayDisplay.style.display ='';
            overlayDisplay.style.backgroundColor = 'blue';
        }
    }

}
