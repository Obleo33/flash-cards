import Guess from '../scripts/guess';

class Round{
  constructor(deck){
    this.deck = deck;
    this.guesses = [];
    this.numberCorrect = 0;
  }

  currentCard(){
    return this.deck.cards[this.numberCorrect];
  }

  recordGuess(userGuess){
    let card = this.currentCard();
    let guess = new Guess({response: userGuess,card});
    this.guesses.push(guess);
    if (guess.correct === true){
      this.numberCorrect ++;
    }
  }

  count(){
    return this.guesses.length;
  }
}


export default Round;
