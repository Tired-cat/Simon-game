



var gamePattern=[];
function nextSequence(){
    
    var buttonColours=["red", "blue", "green", "yellow"]
   var randNum= Math.floor(Math.random()*4);
  randomChosenColour= (buttonColours[randNum])
    gamePattern.push(randomChosenColour);
    return randomChosenColour;
  
}
nextSequence();


var theselect="#"+randomChosenColour;
var userChosenColour=$(theselect);






function selectedBtn(){
  $(theselect).addClass("pressed") ;
  var contain=$(theselect).hasClass("pressed");
  setTimeout(function(){
    $(theselect).removeClass("pressed");
  },100)
   
}
selectedBtn();



$(".btn").click(function(){
  
})

