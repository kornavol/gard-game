const { initialDeck, shuffle } = require("../utils");

describe("Initial deck", () => {
  test("New deck should contain 40 cards.", () => {
    expect(initialDeck.length).toBe(40);
  });
});

describe("Shuffle function", () => {
  let deck = [...initialDeck];
  let shuffledDeck = shuffle(deck);

  afterEach(() => {
    deck = [...initialDeck];
  });

  test("The shufle deck contains the same amount of items as initial", () => {
    expect(shuffledDeck.length).toEqual(deck.length);
  });

  test("The shufle deck has same set of items as initial", () => {
    expect(shuffledDeck.sort().join(",")).toMatch(deck.sort().join(","));
  });

  test("function randomly shuffle a deck", () => {
    expect(shuffledDeck).not.toEqual(deck);
  });
});
