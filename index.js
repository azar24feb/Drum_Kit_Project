/*document.querySelector(".w")
    .forEach(x => x.addEventListener("click", () => {
        var audio = new Audio("./sounds/tom-1.mp3")
        audio.play()
    }));*/
document.querySelector(".w").addEventListener("click", () => {
    var audio = new Audio("./sounds/tom-1.mp3")
    audio.play()
});
document.querySelector(".a").addEventListener("click", () => {
    var audio = new Audio("./sounds/tom-2.mp3")
    audio.play()
});
document.querySelector(".s").addEventListener("click", () => {
    var audio = new Audio("./sounds/tom-3.mp3")
    audio.play()
});
document.querySelector(".d").addEventListener("click", () => {
    var audio = new Audio("./sounds/tom-4.mp3")
    audio.play()
});
document.querySelector(".j").addEventListener("click", () => {
    var audio = new Audio("./sounds/snare.mp3")
    audio.play()
});
document.querySelector(".k").addEventListener("click", () => {
    var audio = new Audio("./sounds/crash.mp3")
    audio.play()
});
document.querySelector(".l").addEventListener("click", () => {
    var audio = new Audio("./sounds/kick-bass.mp3")
    audio.play()
});