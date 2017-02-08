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
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let deck  = new Deck({});
    deck.addCard(card1);
    let round = new Round(deck);

    expect(round.currentCard()).to.be.function;
  })

  it('should return the first card in the deck when you call currentCard', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let card2 = new Card({question: 'Approximately how many miles are in one astronomical unit?', answer: '93,000,000'})
    let deck  = new Deck({});

    deck.addCard(card1);
    deck.addCard(card2);

    let round = new Round(deck);

    expect(round.currentCard()).to.equal(card1);
  })

  it('should have a recordGuess function', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let card2 = new Card({question: 'Approximately how many miles are in one astronomical unit?', answer: '93,000,000'})
    let deck  = new Deck({});

    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);

    expect(round.recordGuess('')).to.be.function;
  })

  it('should create a new guess card and push it to the guesses array when you run recordGuess', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let card2 = new Card({question: 'Approximately how many miles are in one astronomical unit?', answer: '93,000,000'})
    let deck  = new Deck({});

    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);

    round.recordGuess("Juneau")
    expect(round.guesses.length).to.equal(1);
  })


  it('should have a count function that counts how many guesses you have made', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let card2 = new Card({question: 'Approximately how many miles are in one astronomical unit?', answer: '93,000,000'})
    let deck  = new Deck({});

    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);

    round.recordGuess("Juneau")

    expect(round.guesses.length).to.equal(1);
    expect(round.count()).to.be.function;
    expect(round.count()).to.equal(1);

    round.recordGuess("Juneau")

    expect(round.count()).to.equal(2);
  })

  it('should have a update the numberCorrect if your guess was correct', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let card2 = new Card({question: 'Approximately how many miles are in one astronomical unit?', answer: '93,000,000'})
    let deck  = new Deck({});

    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);

    expect(round.numberCorrect).to.equal(0);

    round.recordGuess("Juneau");

    expect(round.numberCorrect).to.equal(1);
  })

  it('should step through the deck as you answer correctly', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let card2 = new Card({question: 'Approximately how many miles are in one astronomical unit?', answer: '93,000,000'})
    let deck  = new Deck({});

    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);

    expect(round.numberCorrect).to.equal(0);

    round.recordGuess("Juneau");

    expect(round.numberCorrect).to.equal(1);

    expect(round.currentCard()).to.equal(card2);
  })

  it('should allow you to answer multiple times till you get the correct answer', () => {
    let card1 = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let card2 = new Card({question: 'Approximately how many miles are in one astronomical unit?', answer: '93,000,000'})
    let deck  = new Deck({});

    deck.addCard(card1);
    deck.addCard(card2);
    let round = new Round(deck);

    round.recordGuess("hey");
    expect(round.currentCard()).to.equal(card1);

    round.recordGuess("you");
    round.recordGuess("it's me");

    expect(round.guesses.length).to.equal(3);

    round.recordGuess("Juneau");

    expect(round.guesses.length).to.equal(4);
    expect(round.numberCorrect).to.equal(1);

    expect(round.currentCard()).to.equal(card2);
  })

});
