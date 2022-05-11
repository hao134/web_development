
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

//3 at the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//1. Use JQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id"); 

    //4. Add the contents of the variable userChosenColour created in step2 to the end of this new userClickdPattern
    userClickedPattern.push(userChosenColour);
    
    console.log(userClickedPattern);
});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}


$(document).keypress(function(){
    nextSequence();
});