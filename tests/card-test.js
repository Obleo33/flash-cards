import {expect} from 'chai';
import {assert} from 'chai';
import Card from '../scripts/card';

describe('Card constructor', () => {
  it('should construct a new card', ()=> {
    let card = new Card({name:'card'});
    assert.instanceOf(card, Card);
  });

  it('should have a question',()=>{
    let card = new Card({question:'What is the capital of Alaska?'})
    assert.equal(card.question,'What is the capital of Alaska?')
  })

  it('should have an answer',()=>{
    let card = new Card({question: 'What is the capital of Alaska?', answer: 'Juneau'})
    assert.equal(card.answer,'Juneau')
  })

})
