// Randomize the order of each cell on every page refresh
// Instead of just numbers in the cells that you match, figure out how to use images or colors to match

var userChoices = []
var winCounter = []

$('.btns_1').click( function() {
  $('.option' + this.id).css("display", "none")
  $('.choice_back' + this.id).css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
//   // console.log(userChoices)
});
//
$('.btns_2').click( function() {
  $('.option' + this.id + '2').css("display", "none")
  $('.choice_back' + this.id + '2').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( "#reset" ).click(function() {
  alert(".....Reset.....")
  $('h1').css("display", "none")
  $('img').css("display", "block")
  if (winCounter.length !== 0){
      winCounter.length = 0
    }
  });

function evalChoices(userChoices) {
  if (userChoices[0] === userChoices[1]) {
  alert('Match! Yeeeeeeeeah bud.')
  userChoices.length = 0
  winCounter.push(1)
  if(winCounter.length === 8){
    alert("You WON!!! Play again and stuff.")
    $('h1').css("display", "none")
    $('img').css("display", "block")
    winCounter.length = 0
  }
  } else {
  $('.option' + userChoices[0]).css("display", "block");
  $('.option' + userChoices[1]).css("display", "block");
  $('.option' + userChoices[0] + '2').css("display", "block");
  $('.option' + userChoices[1] + '2').css("display", "block");
  $('.choice_back' + userChoices[0]).css("display", "none");
  $('.choice_back' + userChoices[1]).css("display", "none");
  $('.choice_back' + userChoices[0] + '2').css("display", "none");
  $('.choice_back' + userChoices[1] + '2').css("display", "none");
  alert("No luck my dude, try again or don't.")
  userChoices.length = 0
  }
}
