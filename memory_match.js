// $(#option).on(clickButton () {
//   alert("You clicked a button")
// })

// $(document).buttons( function() {
//   $('#option').onclick('click', clickButton() {
//     alert("You clicked")
//   })
// })

// function clickButton() {
//   var id = this.id
// }

$( "#option" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#option2" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#option3" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#option4" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#option5" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#option6" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#option7" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#option8" ).click(function() {
  alert( "Handler for .click() called." );
});

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', false);
}
