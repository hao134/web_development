
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];


var userClickedPattern = [];


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id"); 
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    
    animatePress(userChosenColour);
});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


  playSound(randomChosenColour);
}

function playSound(name) {

    var audio = new Audio("sounds/" + name +".mp3");
    audio.play();
}

// add animatePress function
// 1. Create a new function called animatePress(), it should take a single input parameter called currentColour
function animatePress(currentColour) {

    //2. Use JQuery to add this pressed class to the button that gets clicked inside animatePress()
    $("#" + currentColour).addClass('pressed');

    setTimeout(function() {
        $("#" + currentColour).removeClass('pressed');
    }, 100);
}


$(document).keypress(function(){
    nextSequence();
});