import Guess from '../scripts/guess';

class Round{
  constructor(deck){
    this.deck = deck;
    this.guesses = [];
  }

  currentCard(){
    return this.deck.cards[0];
  }

  recordGuess(response){
    console.log(currentCard())
    let guess = new Guess({guess:response,card});
  }
}


export default Round;
