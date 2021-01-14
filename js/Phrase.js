/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


/**
 * This Class represents a new phrase for the game
 * @class
 */
class Phrase {

    /**
     * @constructor
     * @param {string} phrase - phrase
     * @property {string} phrase - the actual phrase represented by Phrase
     */
    constructor(phrase) {
        this.phrase = phrase.toLocaleLowerCase();
    }


    /**
     * This method adds the selected phrase to display
     * @method
     * @return void
     */

    addPhraseToDisplay() {
        // split the phrase to use a reducer on it
        const selectedPhrase = this.phrase.split("");

        // select the dom element to work with
        const phraseDiv = document.getElementById('phrase');

        /**
         * This function loads the phrase to display
         * @function
         * @return {string}
         */
        function updateDivHTML () {
            const initial = '';

            /**
             * This function is a reducer to generate HTML code to display the random phrase
             *@function
             * @param li {string} - string for DOM injecting
             * @param letter {string} - letter from phrase to display
             * @return {*}
             */
            const reducer = (li, letter) => {
                if (letter === ' ') {
                    li += `<li class="space"> </li>`;
                } else {
                    li += `<li class="hide letter ${letter}">${letter}</li>`;
                }
                return li;
            }
            return selectedPhrase.reduce(reducer, initial);
        }
        phraseDiv.innerHTML = updateDivHTML();
    }

    /**
     * This method checks if the selected letter matches a letter in the phrase
     * @method
     * @param {string} letter - Letter to check
     * @return {boolean} True if letter in phrase, false otherwise
     */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
     * This method reveals the letter(s) that matches
     * @method
     * @param {string} letter - Letter to display
     * @return void
     */
    showMatchedLetter(letter) {
        const lettersInPhrase = document.querySelectorAll('.letter');
        for(let element of lettersInPhrase) {
            if(element.className === `hide letter ${letter}`) {
                element.className = `show letter ${letter}`;
            }
        }
    }

}
