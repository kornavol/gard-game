/* create array from 1 - 10 */
const initialSet = [...Array.from({ length: 10 }, (_, i) => i + 1)];

/* create a decks of 40 cards*/
exports.initialDeck = [].concat(...Array(4).fill(initialSet));


/* shuffle function */
exports.shuffle = (array) =>  {
    let currentIndex = array.length,
      randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  }