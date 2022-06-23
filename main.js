// create tile dupes so I won't have to hard code 16 tiles, by creating a for loop this just cretes a copy of a tile at whatever index my loop is at through the length of the array
  /*function createTiles() {
    for (let i = 0; i < tileArray.length; i++) {
      tiles.push(tileArray[i])
    }
// scramble tiles
    tileArray.sort(() => 0.5 - Math.random());
}   

var tiles = document.querySelectorAll('.playingField');

*/
const tiles = document.querySelectorAll('.tile');

var hasFlipped = false;
var firstTile, secondTile;
var isLocked = false;

function flipOver() {
  if (isLocked) return;
  if (this === firstTile) return;

  this.classList.add('flip');

  if (!hasFlipped) {
    hasFlipped = true;
    firstTile = this;

    return;
  }
  secondTile = this;

  checkMatch();
}
//i had to establish a data ID in order to create something to match the images since just naming them did not work
//Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

//this code will check for a match. If they match, the function will run to disable those tiles and remove the event listener
function checkMatch() {
  let isMatch = firstTile.dataset.id === secondTile.dataset.id;

  isMatch ? disableTiles() : unflipTiles();
}

function disableTiles() {
  firstTile.removeEventListener('click', flipOver);
  secondTile.removeEventListener('click', flipOver);

  resetField();
}
//if my field is locked, set timeout and remove those tiles from the flip constructor class
function unflipTiles() {
  isLocked = true;

  setTimeout(() => {
    firstTile.classList.remove('flip');
    secondTile.classList.remove('flip');

    resetField();
  }, 1500);
}
//in resetting the field, we are removing the clicked cards to click again
function resetField() {
  [hasFlipped, isLocked] = [false, false];
  [firstTile, secondTile] = [null, null];
}

//instead of using JS to create an array that will randomly position my tiles, I am going to use the math function to iterate through the 16 images and order them randomly
(function shuffle() {
  tiles.forEach(tile => {
    let randomPos = Math.floor(Math.random() * 16);
    tile.style.order = randomPos;
  });
})();

//this adds an event listener that clicks and toggles the flip over function on each tile
tiles.forEach(tile => tile.addEventListener('click', flipOver));