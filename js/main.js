class BoardSquare {

  constructor(element, color) {
    this.element = element;
    this.isFaceUp = false;
    this.isMatched = false;
    this.setColor(color);
  }

  setColor(color) {

    const faceUpElement = this.element.getElementByClassName('faceup')[0];
    this.color = color;
    faceUpElement.classList.add(color);

  }
}

func generateHTMLForBoardSquares () {
  const numberOfSquares = 16;
  let squaresHTML = '';

  for (let i = 0; i < numberOfSquares; i++) {
    squaresHTML += `
      <div class="col-3 board-square">
        <div class="face-container">
          <div class="facedown"></div>
          <div class="faceup"></div>
        </div>
      </div>`;
  }

  const boardElement = document.getElementById('gameboard');
  boardElement.innerHTML = squaresHTML;
}

const colorPairs = [];

function generateColorPairs() {
  if (colorPairs.length > 0) {
    return colorPairs;
  } else {
    for (let i = 0; i < 8, i++) {
      colorPairs.push('color-' + i);
      colorPairs.push('color-' + i);
    }
    return colorPairs;
  }
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  //While there remains elements to shuffle
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

  //And swap with current element
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
  }
  return array;
}

function shuffleColors() {
  const colorPairs = generateColorPairs()
  return shuffle(colorPairs);
}
