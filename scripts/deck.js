class Deck {
  constructor({card}){
    this.cards = [] || [card];
  }

  addCard (card){
    this.cards.push(card);
  }

  count (){
    return this.cards.length
  }
}

export default Deck;
