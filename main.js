//8 cards for the game
const tileArray = [
  {
    name: 'anniespratt',
    img: 'images/tiles/anniespratt.jpg'
  },
  {
    name: 'chrislee',
    img: 'images/tiles/chrislee.jpg'
  },
  {
    name: 'galina',
    img: 'images/tiles/galina.jpg'
  },
  {
    name: 'kevin',
    img: 'images/tiles/kevin.jpg'
  },
  {
    name: 'lauren',
    img: 'images/tiles/lauren.jpg'
  },
  {
    name: 'linhle',
    img: 'images/tiles/linhle.jpg'
  },
  {
    name: 'severin',
    img: 'images/tiles/severin.jpg'
  },
  {
    name: 'sincerely',
    img: 'images/tiles/sincerely.jpg'
  },
]
const tilesChosen = [];

  // Create and push duplicates to cards variable (prevent writing duplicates in db.js)
  function createTiles() {
    for (let i = 0; i < cardArray.length; i++) {
      tiles.push(tileArray[i])
    }
    // Randomize/shuffle cards
    tiles.sort(() => 0.5 - Math.random());
  }

  //click event
function flipOver() {

}

//check for match
if tilesChosen === 2 && {

}

//if tiles match, set image to default to 'remove'
if tilesChosen[0] === tilesChosen[1] {
    
}