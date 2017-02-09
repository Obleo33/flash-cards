import {expect} from 'chai';
import Card from '../scripts/card';


describe('Card constructor', () => {
  it('should construct a new card', () => {
    let card = new Card({name:'card'});

    expect(card).to.be.an.instanceof(Card);
  });

  it('should have a question',() => {
    let card = new Card({question:'What is the capital of Alaska?'})

    expect(card.question).to.equal('What is the capital of Alaska?')
  })

  it('should have an answer',() => {
    let card = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})

    expect(card.answer).to.equal('Juneau')
  })
})
