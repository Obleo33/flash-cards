import {expect} from 'chai';
import Guess from '../scripts/guess';
import Card from '../scripts/card';

describe('Guess constructor', () => {
  it('should construct a new guess card', () => {
    let card  = new Card ({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let guess = new Guess({response:'guess',card});
    expect(guess).to.be.an.instanceof(Guess);
  });


  it('should have a guess', () => {
    let card  = new Card ({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let guess = new Guess({response:'guess',card});
    expect(guess.response).to.equal('guess');
  })

  it('should evaluate correctness', () => {
    let card  = new Card ({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let guess = new Guess({response:'Juneau',card});

    expect(guess.response).to.equal(card.answer);
    expect(guess.correct).to.be.true;
  })

  it('should have a feedback function', () => {
    let card  = new Card ({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let guess = new Guess({response: 'Juneau',card});

    expect(guess.feedback()).to.be.function;
  })

  it('feecback should return "Correct!" if correct is true and "Incorrect." if correct is false', () => {
    let card  = new Card ({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    let guess = new Guess({response: 'Juneau',card});

    expect(guess.response).to.equal(card.answer);
    expect(guess.correct).to.be.true;
    expect(guess.feedback()).to.equal('Correct!')

    let guess2 = new Guess({response: 'Toledo',card});

    expect(guess2.correct).to.be.false;
    expect(guess2.feedback()).to.equal('Incorrect.')
  })
})
