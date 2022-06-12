//8 tiles for the game
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

// create tile dupes so you won't have to hard code 16 tiles
  function createTiles() {
    for (let i = 0; i < tileArray.length; i++) {
      tiles.push(tileArray[i])
    }
// scramble tiles
    tileArray.sort(() => 0.5 - Math.random());
  }

function createField() {
    for (let i = 0; i < tileArray.length; i++ {
        var tile = document.createElement('img')
        tile.setAttribute('source', 'images/cover.png')
        tile.addEventListener('click')
        


    })
}


  //click event
function flipOver() {

}

//check for match
if tilesChosen === 2 && tile1 === tile2{
    //play chime

}

//if tiles match, set image to default to 'remove'
if tilesChosen[0] === tilesChosen[1] {

    tile1?setAttribute('source', 'images/transparent.png')
    tile2?setAttribute('source', 'images/transparent.png')
}

createField()