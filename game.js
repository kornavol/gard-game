const { initialDeck, shuffle } = require("./utils");

/* Define players */
const player1 = {
  name: "Player 1",
  deck: [],
  discard: [],
  totalCards: 0,
};

const player2 = {
  name: "Player 2",
  deck: [],
  discard: [],
  totalCards: 0,
};

/* Here will be storage card after dwar sitution. 
The winner of the next round takes the cards from here */
let tempDiscard = [];
/* Rounds counter */
let currentRound = 0;

/* Shuffle the deck */
const deck = shuffle(initialDeck);

/* Separate a deck between two players */
player1.deck = deck.slice(0, 20);
player2.deck = deck.slice(20, 40);

/* Assign number of cards for each player. It dependents of player deck size */
player1.totalCards = player1.deck.length;
player2.totalCards = player2.deck.length;

function descardToDeck(player) {
  if (player.discard.length > 0) {
    player.deck = shuffle([...player.deck, ...player.discard]);
    player.discard = [];
  }
}

function deckToDiscard(winner) {
  console.log(`${winner.name} wins round ${currentRound}`);

  winner.discard.push(player1.deck[0]);
  winner.discard.push(player2.deck[0]);

  player1.deck.shift();
  player2.deck.shift();

  if (tempDiscard.length > 0) {
    winner.discard = [...winner.discard, ...tempDiscard];
    tempDiscard = [];
  }
}

function cardComperison(player1, player2) {
  if (player1.deck[0] > player2.deck[0]) {
    return player1;
  } else if (player1.deck[0] < player2.deck[0]) {
    return player2;
  } else if (player1.deck[0] === player2.deck[0]) {
    console.log(`Draw in the ${currentRound}  round`);

    tempDiscard.push(player1.deck[0]);
    tempDiscard.push(player2.deck[0]);

    player1.deck.shift();
    player2.deck.shift();
  }
}

/* Here is game */
function game() {
  let gameChecker = true;

  /* THE GAME CYCLE*/
  while (gameChecker) {
    console.log(`------------------ROUND ${currentRound}---------------------`);
    /* Check a volume of both player decks*/
    if (player1.deck.length === 0) {
      descardToDeck(player1, player2);
    }

    if (player2.deck.length === 0) {
      descardToDeck(player2, player1);
    }

    console.log(
      `${player1.name} (${player1.totalCards} cards): ${player1.deck[0]}`
    );
    console.log(
      `${player2.name} (${player2.totalCards} cards): ${player2.deck[0]}`
    );

    /* Compare top cards of each player deck */
    const winner = cardComperison(player1, player2);
    /* Winner take both cards and put them into own discard */
    if (winner) {
      deckToDiscard(winner);
    }

    /* Assign total amount of cards. Together in the deck and the discard */
    player1.totalCards = player1.deck.length + player1.discard.length;
    player2.totalCards = player2.deck.length + player2.discard.length;

    if (player1.totalCards === 0) {
      console.log(`
${player2.name} wins the game!`);
      gameChecker = false;
    } else if (player2.totalCards === 0) {
      console.log(`
${player1.name} wins the game!`);
      gameChecker = false;
    }
  }

  currentRound++;
}

module.exports = { game, descardToDeck, cardComperison, deckToDiscard };
