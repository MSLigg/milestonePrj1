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
    this.classList.add('flip');

if (!hasFlipped) {
    hasFlipped = true;
    firstTile = this;
    return;
 }
   secondTile = this;

   checkMatch();
 }
//this code will check for a match. If they match, the function will run to disable those tiles and remove the event listener
 function checkMatch () {
   let isMatch = firstTile ===secondTile;
   
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
   isLocked = true;

   setTimeout(() => {
     firstTile.classList.remove('flip');
     secondTile.classList.remove('flip');

     resetField();
  }, 1500);
}

 function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}


 (function shuffle() {
  tiles.forEach(tile => {
    let randomPos = Math.floor(Math.random() * 12);
    tile.style.order = randomPos;
  });
  })();

 /*/create a function to shuffle the tiles.
 function shuffleTiles() {
    matched = 0;
    disableTiles = false;
    firstTile = secondTile = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    tiles.forEach((tile, i) => {
        tile.classList.remove('flip');
        let imgTag = tile.querySelector('images/cover.png');
        imgTag.src = 'images/img-${arr[i]}.png';
        tile.addEventListener("click", flipOver);
    });
}
shuffleTiles();*/

//this adds an event listener that clicks and toggles the flip over function on each tile
tiles.forEach(tile => tile.addEventListener('click', flipOver));