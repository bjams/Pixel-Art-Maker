// grid generation based on input
function makeGrid() {

    // storing necessary values
    const pixelCanvas = document.getElementById('pixelCanvas');
    const gridHeight = document.getElementById('gridHeight').value;
    const gridWidth = document.getElementById('gridWidth').value;

    // clearing grid upon clicking submit
    pixelCanvas.innerHTML = '';
  
    // inserting rows and cells
    for (let y = 0; y < gridHeight; y++) {
      let row = pixelCanvas.insertRow(y);
      for (let x = 0; x < gridWidth; x++) {
        let cell = row.insertCell(x);
        // add an event when clicked 
        // use selected color black is default
        cell.addEventListener('click', function(event) {
          event.target.style.backgroundColor = document.getElementById('pickColor').value;
        })
      }
    }
  }

  // do a thing when when submitted
  document.getElementById('pickSize').addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
  })
