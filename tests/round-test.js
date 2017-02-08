import {expect} from 'chai';
import Guess from '../scripts/guess';
import Card from '../scripts/card';
import Deck from '../scripts/deck';
import Round from '../scripts/round';


describe('Round constructor', () => {

  it('should construct a new round', () => {
    let round = new Round({});

    expect(round).to.be.an.instanceof(Round);
  });

  it('should take a deck as an argument', () => {
    let card  = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let deck  = new Deck({});
    deck.addCard(card);
    let round = new Round(deck);
    expect(round.deck.count()).to.equal(1);
  })

  it('should have a guess array', () => {
    let card  = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let deck  = new Deck({});
    deck.addCard(card);
    let round = new Round(deck);

    expect(round.guesses).to.deep.equal([]);
  })

  it('should have a currentCard function', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck({});
    deck.addCard(card1);
    let round = new Round(deck);

    expect(round.currentCard()).to.be.function;
  })

  it('should return the first card in the deck when you call currentCard', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let card2 = new Card({question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000"})
    let deck  = new Deck({});

    deck.addCard(card1);
    deck.addCard(card2);

    let round = new Round(deck);

    expect(round.currentCard()).to.equal(card1);
  })

  it('should have a recordGuess function', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let card2 = new Card({question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000"})
    let deck  = new Deck({});

    deck.addCard(card1);
    deck.addCard(card2);

    let round = new Round(deck);

    expect(round.recordGuess('')).to.be.function;
  })

  xit('should create a new guess card and push it to the guesses array when you run recordGuess', () => {
    let round = new Round();
    recordGuess('guess');

    expect(this.guesses.length).to.equal(1);
  })


  xit('should step through the deck as you answer correctly', () => {

  })

});
