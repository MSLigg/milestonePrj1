// create tile dupes so I won't have to hard code 16 tiles, by creating a for loop this just cretes a copy of a tile at whatever index my loop is at through the length of the array
  /*function createTiles() {
    for (let i = 0; i < tileArray.length; i++) {
      tiles.push(tileArray[i])
    }
// scramble tiles
    tileArray.sort(() => 0.5 - Math.random());
}   */

  var tiles = document.querySelectorAll('.playingField');

function flipOver() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));