var grid = $('#pixelCanvas');

function makeGrid() {
  // Select size input
  var height = $('#inputHeight').val();
  var width = $('#inputWidth').val();
  // start with clean grid
  grid.find('tr').remove();
  // nested loop to create grid using size submitted by user
  for (var y = 0; y < height; y++) {
    // append grid for height
    grid.append('<tr></tr>');
    for (var x = 0; x < width; x++) {
      // append grid for width based on last tr
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
  // Select color input
  var selectedColor = $('#colorPicker');
  var color = selectedColor.val();
  selectedColor.change(function() {
    color = selectedColor.val();
  })
  // apply color to cell when selected
  grid.click('td', function(e) {
    color = selectedColor.val();
    $(e.target).css('background-color', color);
  });
});
// when button is hovered, add shadow
$("button").hover(function() { 
   $(this).toggleClass('shadowClass');
});

/*
1. Define variables:
select DOM elements user will interact with
  submit button
  table
  color picker

2. Add event listeners:
to the relevant DOM elements so user can set and decide what the input can be:
  color values
  table sizes

3. Set size of cross stitch Canvas
  use loop to clear and create the table based on user input
  each cell should have an event listener that sets the background color of the cell to the color that was selected

Should be able to:
  create a canvas of any size
  choose a color using the colorPicker
  click on canvas table cells to set their color
*/
