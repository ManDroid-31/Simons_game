
var buttonColours = ["red", "blue", "green", "yellow"] ;
var gamePattern = [];
var userClickedPattern = [];
// var a = userClickedPattern;
var start = false
var level = 0;

function startover(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    start = 0;

}
function nextSequence(){
    userClickedPattern = [];
    var randomInt = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomInt];
    gamePattern.push(randomChosenColour);
    // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    level=level+1;
    $('#level-title').text("Level  "+level);
}
function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
    // console.log('playing');
}



function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log('succes');
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
            },1000)
        }
    }
    else{
        console.log('failure');
        $('body').addClass("game-over")
        setTimeout(function(){            
            $('h1').text('Game Over, Press Any Key to Restart')

            $('body').removeClass("game-over")

        },2000)
        startover();
    }
}

$('.btn').on("click",function(){
    var userChosenColour = $(this).attr("id");
    checkAnswer(userClickedPattern.length-1);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})






$('html').on('keydown',function(){
    if(!start){
        nextSequence();
        $('h1').text("Level 0");
        start = true;
        
   }
})







function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }        //learn ^ working of this code
  
// function animatePress(currentColour){
//         setTimeout(function() {
//         $('#'+currentColour).addClass('pressed');
//       }, 100);
      
//       setTimeout(function() {
//         $('#'+currentColour).removeClass('pressed');
//       }, 150);
// }








