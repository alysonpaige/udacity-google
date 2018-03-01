var grid = $('#pixelCanvas');

function makeGrid() {
  // Select color input
  var selectedColor = $('#colorPicker').val();
  // Select size input
  var height = $('#inputHeight').val();
  var width = $('#inputWidth').val();
  // start with clean grid
  grid.find('tr').remove();
  // loop to create grid using size submitted by user
  for (var y = 0; y < height; y++) {
    // append grid for height
    grid.append('<tr></tr>');
    for (var x = 0; x < width; x++) {
      // append grid for width
      grid.find('tr:last').append('<td></td>');
    }
  }
}

// when user submits size via submit button/click event, call makeGrid()
$(document).ready(function() {
  $('#sizePicker').submit(function(e) {
    e.preventDefault();
    makeGrid();
  });
  // apply color to cell when selected
  grid.on('click', 'td', function(e) {
    $(this).css('background-color', selectedColor);
  });
});
// var selectedColor = $('#colorPicker');
// var color = selectedColor.val();
// selectedColor.change(function(){
//   color = selectedColor.val();
// });
