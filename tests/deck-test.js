import {expect} from 'chai';
import Guess from '../scripts/guess';
import Card from '../scripts/card';
import Deck from '../scripts/deck';

describe('Deck constructor', () => {
  it('should construct a new deck', () => {

    let deck = new Deck({});

    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have a cards array', () => {
    let deck = new Deck({});

    expect(deck.cards).to.be.a('array')
  })

  it('should have an addCard function', () => {
    let deck = new Deck({});

    expect(deck.addCard()).to.be.function;
  })

  it('should allow you to add cards to the deck', () => {
    let deck = new Deck({});
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"})
    let card3 = new Card({question: "Describe in words the exact direction that is 697.5° clockwise from due north?", answer: "North north west"})

    deck.addCard(card1);

    expect(deck.cards.length).to.equal(1);

    deck.addCard(card2);

    expect(deck.cards.length).to.equal(2);

    deck.addCard(card3);

    expect(deck.cards.length).to.equal(3);
  })

  it('should have an count function', () => {
    let deck = new Deck({});

    expect(deck.count()).to.be.function;
  })

  it('should let you know how many cards are in the deck', () => {
    let deck = new Deck({});
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"})
    let card3 = new Card({question: "Describe in words the exact direction that is 697.5° clockwise from due north?", answer: "North north west"})

    deck.addCard(card1);
    deck.addCard(card2);
    deck.addCard(card3);

    expect(deck.cards.length).to.equal(3);
    expect(deck.count()).to.equal(3);
  })

})
