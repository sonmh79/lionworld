var audio = document.querySelector("audio");
var play = document.querySelector(".play");
var reset = document.querySelector(".reset");
var button =document.querySelector(".entry");
var pause = document.querySelector(".pause");


function init() {
    button.addEventListener("click",function(e){
        e.preventDefault();
        var splashScreen = document.querySelector(".splash-screen");
        splashScreen.classList.add("splash");
        audio.play();
        audio.volume = 0.3;
    })
    play.addEventListener("click",function(e){
        e.preventDefault();
        audio.play();
    })
    pause.addEventListener("click",function(e){
        e.preventDefault();
        audio.pause();
    })
    reset.addEventListener("click",function(e){
        e.preventDefault();
        audio.pause();
        audio.currentTime=0;
    })
}
init();