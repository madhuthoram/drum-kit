
var numberofbuttons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberofbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var inner = this.innerHTML;
        makesound(inner);
        buttonAnimation(inner);
                    
    });
}
document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});
function makesound(key){
    switch(key) {
        case "w":
            var a = new Audio('crash.mp3');
            a.play();
            break;
        case "a":
            var ko = new Audio('kick-bass.mp3');
            ko.play();
            break;
        case "s":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;
        default:

    }
}
function buttonAnimation(currentKey){
    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");
    
    setTimeout(function() {
        activebutton.classList.remove("pressed");

    },100);

}
/*var audio = new Audio('sounds/tom-1.mp3');
        audio.play();*/
/*
document.querySelector("w").addEventListener("click" , function () {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
});
document.querySelector("a").addEventListener("click" , function () {
    var audio1 = new Audio('sounds/kick-bass.mp3');
    audio1.play();
});
document.querySelector("s").addEventListener("click" , function () {
    var audio2 = new Audio('sounds/snare.mp3');
    audio2.play();
});
document.querySelector("d").addEventListener("click" , function () {
    var audio3 = new Audio('sounds/tom-1.mp3');
    audio3.play();
});
document.querySelector("j").addEventListener("click" , function () {
    var audio4 = new Audio('sounds/tom-2.mp3');
    audio4.play();
});
document.querySelector("k").addEventListener("click" , function () {
    var audio5 = new Audio('sounds/tom-3.mp3');
    audio5.play();
});
document.querySelector("l").addEventListener("click" , function () {
    var audio6 = new Audio('sounds/tom-4.mp3');
    audio6.play();
});*/
