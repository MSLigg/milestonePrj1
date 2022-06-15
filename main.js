// tiles for the game
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
  }
]
const tilesChosen = [];

// create tile dupes so I won't have to hard code 16 tiles, by creating a for loop this just cretes a copy of a tile at whatever index my loop is at through the length of the array
  function createTiles() {
    for (let i = 0; i < tileArray.length; i++) {
      tiles.push(tileArray[i])
    }
// scramble tiles
    tileArray.sort(() => 0.5 - Math.random());
  }

function createField() {
    for (let i = 0; i < tileArray.length; i++) {
        var tile = document.createElement('img')
        tile.setAttribute('src', 'images/cover.png')
        tile.addEventListener('click')
        


    }
}


  //clicking event listener
function flipOver() {

}

//check for match
if tilesChosen === 2 && tile1 === tile2{
    //play chime

}

//if tiles match, set image to default to 'remove'
if tilesChosen[0] === tilesChosen[1] {

    tile1?setAttribute('src', 'images/transparent.png')
    tile2?setAttribute('src', 'images/transparent.png')
}

createField()