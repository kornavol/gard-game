const { descardToDeck, cardComperison } = require("../game");

describe("discard pile is shuffled into the draw pile", () => {
  let player1 = {
    name: "Player 1",
    deck: [],
    discard: [1, 2, 3],
  };

  afterEach(() => {
    player1 = {
      name: "Player 1",
      deck: [],
      discard: [1, 2, 3],
    };
  });

  test("player draw pile is not empty", () => {
    descardToDeck(player1);
    expect(player1.deck.length).toBeGreaterThan(0);
  });

  test("player draw pile conteins same items ", () => {
    descardToDeck(player1);
    expect(player1.deck.sort().join(",")).toMatch(
      player1.discard.sort().join(",")
    );
  });
});

describe("Comparison players cards", () => {
  let player1 = {
    name: "Player 1",
    deck: [1, 9, 3, 7],
    discard: [],
  };

  let player2 = {
    name: "Player 2",
    deck: [2, 8, 4, 6],
    discard: [],
  };

  test("the hire card should win", () => {
    expect(cardComperison(player1, player2)).toBe(player2);
  });
});