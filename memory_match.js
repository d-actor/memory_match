// If both items match, alert the user and keep showing those cards
// If both items don't match, hide the values again and alert the user
// Alert the user that they won once that matched all the items on the board

var userChoices = []

$('.option1').click( function() {
  $('.option1').css("display", "none")
  $('.choice_back1').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$('.option12').click( function() {
  $('.option12').css("display", "none")
  $('.choice_back12').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option2" ).click(function() {
  $('.option2').css("display", "none")
  $('.choice_back2').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option22" ).click(function() {
  $('.option22').css("display", "none")
  $('.choice_back22').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option3" ).click(function() {
  $('.option3').css("display", "none")
  $('.choice_back3').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option32" ).click(function() {
  $('.option32').css("display", "none")
  $('.choice_back32').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option4" ).click(function() {
  $('.option4').css("display", "none")
  $('.choice_back4').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option42" ).click(function() {
  $('.option42').css("display", "none")
  $('.choice_back42').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option5" ).click(function() {
  $('.option5').css("display", "none")
  $('.choice_back5').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option52" ).click(function() {
  $('.option52').css("display", "none")
  $('.choice_back52').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option6" ).click(function() {
  $('.option6').css("display", "none")
  $('.choice_back6').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option62" ).click(function() {
  $('.option62').css("display", "none")
  $('.choice_back62').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option7" ).click(function() {
  $('.option7').css("display", "none")
  $('.choice_back7').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option72" ).click(function() {
  $('.option72').css("display", "none")
  $('.choice_back72').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option8" ).click(function() {
  $('.option8').css("display", "none")
  $('.choice_back8').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

$( ".option82" ).click(function() {
  $('.option82').css("display", "none")
  $('.choice_back82').css("display", "block");
  userChoices.push(this)
  console.log(userChoices)
});

function evalChoices() {

}
//
// function assess(playerChoice,compChoice) {
//   if (playerChoice  === compChoice) {
//      document.getElementById("result").innerHTML = "Computer chose the same. It's a tie!"
//  } else if(playerChoice === "Rock") {
//      if (compChoice === "Scissors") {
//          document.getElementById("result").innerHTML = "Computer chose Scissors. You win!";
//          playerWins.push(1)
//          playerScore(playerWins)
//          // console.log(playerWins)
//      } else {
//          document.getElementById("result").innerHTML = "Computer chose Paper. You lose!";
//          compWins.push(1)
//          compScore(compWins)
//          // console.log(compWins)
//      }
//  } else if(playerChoice === "Paper") {
//      if(compChoice === "Rock") {
//          document.getElementById("result").innerHTML = "Computer chose Rock. You win!";
//          playerWins.push(1)
//          playerScore(playerWins)
//          // console.log(playerWins)
//      } else {
//          document.getElementById("result").innerHTML = "Computer chose Scissors. You lose!";
//          compWins.push(1)
//          compScore(compWins)
//          // console.log(compWins)
//      }
//  } else if(playerChoice === "Scissors") {
//      if (compChoice === "Rock") {
//          document.getElementById("result").innerHTML = "Computer chose Rock. You lose!";
//          compWins.push(1)
//          compScore(compWins)
//          // console.log(compWins)
//      } else {
//          document.getElementById("result").innerHTML = "Computer chose Paper. You win!";
//          playerWins.push(1)
//          playerScore(playerWins)
//          // console.log(playerWins)
//      }
//  }
// }
