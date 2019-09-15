function makeGrid() {

    const pixelCanvas = document.getElementById('pixelCanvas');
    const gridHeight = document.getElementById('gridHeight').value;
    const gridWidth = document.getElementById('gridWidth').value;

    pixelCanvas.html = '';
  
    for (let y = 0; y < gridHeight; y++) {
      let row = pixelCanvas.insertRow(y);
      for (let x = 0; x < gridWidth; x++) {
        let cell = row.insertCell(x);
        cell.addEventListener('click', function(event) {
          event.target.style.backgroundColor = document.getElementById('pickColor').value;
        })
      }
    }
  }

  document.getElementById('pickSize').addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
  })