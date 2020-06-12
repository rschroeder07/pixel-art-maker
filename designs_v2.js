// Select color input
let color = document.getElementById('colorPicker');
// Select size input
let size = document.getElementById('sizePicker');
// Select canvas size in height and width
let grid = document.getElementById('pixelCanvas');
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
makeGrid(height, width);
// When size is submitted by the user, call makeGrid()
size.addEventListener('click', function(event) {
    event.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    grid.firstChild.remove();
    makeGrid(height, width);
});
// Function to generate canvas size
function makeGrid(height, width) {
    for (var x = 0; x < height; x++) {
        let row = grid.insertRow(x);
        for (var y = 0; y < width; y++) {
            let column = row.insertCell(y);
            // Adding color to selected cells
            grid.addEventListener('click', function(cell) {
                let color = colorPicker.value;
                cell.target.style.backgroundColor = color;
                }
            );
        }
    }
}
