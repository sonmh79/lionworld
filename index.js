var audio = document.querySelector("audio");
var play = document.querySelector(".play");
var reset = document.querySelector(".reset");
var button = document.querySelector(".entry");
var pause = document.querySelector(".pause");


function init() {
    play.addEventListener("click",function(e){
        audio.play();
    });
    pause.addEventListener("click",function(e){
        audio.pause();
    });
    reset.addEventListener("click",function(e){
        audio.pause();
        audio.currentTime=0;
    });
    button.addEventListener("click",function(e){
        e.preventDefault();
        var splashScreen = document.querySelector(".splash-screen");
        splashScreen.classList.add("splash");
        audio.play();
        audio.volume = 0.4;
    });
}
init();