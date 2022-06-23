// create tile dupes so I won't have to hard code 16 tiles, by creating a for loop this just cretes a copy of a tile at whatever index my loop is at through the length of the array
  /*function createTiles() {
    for (let i = 0; i < tileArray.length; i++) {
      tiles.push(tileArray[i])
    }
// scramble tiles
    tileArray.sort(() => 0.5 - Math.random());
}   

var tiles = document.querySelectorAll('.playingField');

function flipOver() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

*/
const tiles = document.querySelectorAll('.tile');

let hasFlipped = false;
let firstTile, secondTile;

function flipOver() {
    this.classList.add('flip');

if (!hasFlipped) {
    hasFlipped = true;
    firstTile = this;
    return;
 }
   secondTile = this;
   hasFlipped = false;

   checkMatch();
 }
//this code will check for a match. If they match, the function will run to disable those tiles and remove the event listener
 function checkMatch() {
   if (firstTile === secondTile) {
     disableTiles();
     return;
   }

   unflipTiles();
 }

 function disableTiles() {
   firstTile.removeEventListener('click', flipOver);
   secondTile.removeEventListener('click', flipOver);
 }

 function unflipTiles() {
   setTimeout(() => {
     firstTile.classList.remove('flip');
     secondTile.classList.remove('flip');
   }, 1500);
 }

//this adds an event listener that clicks and toggles the flip over function on each tile
tiles.forEach(tile => tile.addEventListener('click', flipOver));