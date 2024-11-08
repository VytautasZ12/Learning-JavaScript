// anonymus objects = Objects without a name
//                    Not diectly referenced
//                    Less syntax. No need of unique names.

// down side we do nott have direct access to one of these objects.

// class Card {
//   constructor(value, suit) {
//     this.value = value;
//     this.suit = suit;
//   }
// }

// let card1 = new Card("A", " Hearts");
// let card2 = new Card("A", " Clubs");
// let card3 = new Card("A", " Spades");
// let card4 = new Card("A", " Diamonds");

// let cards = [card1, card2, card3, card4];

// console.log(card1.value + card1.suit);
// console.log(cards[0].value + cards[0].suit)

// to do all that just in anonymus objects.

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

let cards = [
  new Card("A", " Hearts"),
  new Card("A", " Clubs"),
  new Card("A", " Spades"),
  new Card("A", " Diamonds"),
];
cards.forEach((card) => console.log(`${card.value} ${card.suit}`));

// in this way object can be reached only by index.
// console.log(cards[0].value + cards[0].suit);
