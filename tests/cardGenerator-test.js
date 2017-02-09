import {expect} from 'chai';
import CardGenerator from '../scripts/cardGenerator';
import Card from '../scripts/card';


describe('CardGenerator constructor', () => {
  it('should construct a new cardGenerator', ()=> {
    let cardGenerator = new CardGenerator('cards.txt');

    expect(cardGenerator).to.be.an.instanceof(CardGenerator);
  });

  it('should take a text file and create cards from it', () => {
    let cardGenerator = new CardGenerator('cards.txt');

    expect(cardGenerator.cards.length).to.equal(4);
  })
});
