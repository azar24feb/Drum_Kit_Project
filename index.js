/*document.querySelector(".w")
    .forEach(x => x.addEventListener("click", () => {
        var audio = new Audio("./sounds/tom-1.mp3")
        audio.play()
    }));*/
document.querySelectorAll(".drum")
    .forEach(x => {
        x.addEventListener("click", function (params) {
            // this.style.color = 'white';
            play(x.classList[0]);
            animate(x.classList[0]);
        })
    })

document.addEventListener('keydown', (e) => {
     play(e.key);
     animate(e.key);
})

function play(key){
    switch (key.toLowerCase()) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/kick.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function animate(key){
    const button = document.querySelector("."+key);
    button.classList.add("pressed");
    setTimeout(()=>{
        button.classList.remove("pressed");
    },75)
}