const buttonColours=["red","blue","green","yellow"]

var gamePattern=[];

var  userClickedPattern=[];

var started=false;

var level=0;

$(".btn" ).on( "click", function() {

  var userChosenColour=this.id

  var convert="."+userChosenColour

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour)
  animatePress(convert)
 
  checkAnswer(userClickedPattern.length-1);

})

function animatePress(currentColour){
  $(currentColour).addClass("pressed");

  setTimeout(function () {
    $(currentColour).removeClass("pressed");
  }, 500);

}

function playSound(name){
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();

}

$(document ).on( "keyup", function() {
  if(!started){
  
    $("h1").text("level "+(level)+" let's go!");
    nextSequence(); 
    started = true;
  }

})

function checkAnswer(currentLevel){

  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
     console.log("sucsses")
   
     if(userClickedPattern.length===gamePattern.length){
     
      setTimeout(function() {
        nextSequence();
       
        
      }, 1000);
     }
  }
  else{
    console.log("wrong")

    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Stupid Esohe, Press Any Key to Restart");

    startOver()
  }
}

function nextSequence(){
  
  userClickedPattern = [];
  
  level++;

 
  $("#level-title").text("Level " + level);
  
  var randomNumber=Math.floor(Math.random()*4)

  var randomChosenColour=(buttonColours[randomNumber])

  gamePattern.push(randomChosenColour);

  var chosenColor = "." + randomChosenColour; // Fix the typo here

  animatePress(chosenColor)
  playSound(randomChosenColour);

  console.log("gamePattern:", gamePattern); // Log gamePattern after each level
  console.log("userClickedPattern length:", userClickedPattern.length); // Log length of userClickedPattern
  
}
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}



