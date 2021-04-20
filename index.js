var audio = document.querySelector("audio");
var pause = document.querySelector(".pause");
var play = document.querySelector(".play");
var reset = document.querySelector(".reset");

button =document.querySelector("button");

play.addEventListener("click",function(){
    audio.play()
})
pause.addEventListener("click",function(){
    audio.pause()
})
reset.addEventListener("click",function(){
    audio.pause()
    audio.currentTime=0;
})
button.addEventListener("click",function(){
    audio.play()
    audio.volume = 0.3;
    var splashScreen = document.querySelector(".splash-screen");
    splashScreen.classList.add("splash");
});
