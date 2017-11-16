var userChoices = []
var winCounter = []

$('.option1').click( function() {
  $('.option1').css("display", "none")
  $('.choice_back1').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$('.option12').click( function() {
  $('.option12').css("display", "none")
  $('.choice_back12').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option2" ).click(function() {
  $('.option2').css("display", "none")
  $('.choice_back2').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option22" ).click(function() {
  $('.option22').css("display", "none")
  $('.choice_back22').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option3" ).click(function() {
  $('.option3').css("display", "none")
  $('.choice_back3').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option32" ).click(function() {
  $('.option32').css("display", "none")
  $('.choice_back32').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option4" ).click(function() {
  $('.option4').css("display", "none")
  $('.choice_back4').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option42" ).click(function() {
  $('.option42').css("display", "none")
  $('.choice_back42').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option5" ).click(function() {
  $('.option5').css("display", "none")
  $('.choice_back5').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option52" ).click(function() {
  $('.option52').css("display", "none")
  $('.choice_back52').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option6" ).click(function() {
  $('.option6').css("display", "none")
  $('.choice_back6').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option62" ).click(function() {
  $('.option62').css("display", "none")
  $('.choice_back62').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option7" ).click(function() {
  $('.option7').css("display", "none")
  $('.choice_back7').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option72" ).click(function() {
  $('.option72').css("display", "none")
  $('.choice_back72').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option8" ).click(function() {
  $('.option8').css("display", "none")
  $('.choice_back8').css("display", "block");
  userChoices.push(this.id)
  if(userChoices.length === 2) {
  evalChoices(userChoices)
  }
  // console.log(userChoices)
});

$( ".option82" ).click(function() {
  $('.option82').css("display", "none")
  $('.choice_back82').css("display", "block");
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
};
