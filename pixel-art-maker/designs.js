// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // start with clean grid
  // get dimensions
  var x = $('#inputHeight').val();
  var y = $('#inputWidth').val();
  var color = $('#colorPicker').val();

  console.log(x);
  console.log(y);
  console.log(color);

  for(var i=0; i <= x; i++) {
    var row = '<tr>';
    for (var i=0; i <= x; i++) {
      row += '<td></td>';
    }
    row += '</tr>';
    $('#pixelCanvas').append(row);
  }

}

// grab button via ID and attach click event
const $submitButton = $('#submitButton');

$submitButton.click(function(e) {
  e.preventDefault();
  let $heightVal = $('#inputHeight').val();
  let $widthVal = $('#inputWidth').val();

  makeGrid($heightVal, $widthVal);
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
