class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (typeof this.cards === "undefined") return undefined;
    var setCards = JSON.parse(JSON.stringify(this.cards));
    var shuffledCards = [];

    for (let i = setCards.length - 1 ; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * setCards.length);
      shuffledCards.push(setCards[randomIndex]);
      setCards.splice(randomIndex, 1);
    }

    this.cards = shuffledCards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2){
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    };
  }

  checkIfFinished() {
    if (this.pairsGuessed == (this.cards.length / 2)) {
      return true
    } else {
      return false
    }
  }
}
