import fs from 'fs';
import Card from '../scripts/card';

class CardGenerator{
  constructor(fileName){
    this.cards = [];

    let fileArray = fs.readFileSync(`./scripts/${fileName}`, `utf8`)
    .trim()
    .split('\n')

    fileArray.forEach((qcard,index) => {
      let cardArray = qcard.split(',');
      let questionTxt = cardArray[0];
      let answerTxt = cardArray[1];

      let card = new Card ({question:questionTxt,answer:answerTxt});
      this.cards.push(card);
    })
  }
}

export default CardGenerator;
