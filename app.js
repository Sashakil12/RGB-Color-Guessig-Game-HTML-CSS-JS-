var selmode;
var cubecolor = [];
var pickedcolor;
var askcolor = document.getElementById("pickdisp");
var resetbtn = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
var msg = document.querySelector("#msg");
var head = document.querySelector("#text")
var cube = document.querySelectorAll(".cube");
var att = document.querySelector("#att");
var maintext = document.querySelector("#main");

// init()
function win(){
    msg.classList.add(".win");
    head.classList.add(".win");
}
function colorify() {
    for (var i = 0; i < cube.length; i++) {
        if (cubecolor[i]) {
            cube[i].style.backgroundColor = cubecolor[i];
        }else{
            cube[i].style.display = "none";
        }
    }

}

function picker() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function colorgen(mode) {
    var arr = [];

    for (var i = 0; i < mode; i++) {
        arr.push(picker());
    }
    return arr;

}

function pick() {
    var s = Math.floor(Math.random() * cubecolor.length);
    return cubecolor[s];
}


// function init() {
//     selmode = 6;
//     msg.textContent = "Lets play!";
//     colorgen(selmode);
//     var pickedcolor = pick();
//     askcolor.textContent = pickedcolor;
//     colorify();
// }
// init();

for (var i = 0; i < cube.length; i++) {
    selmode = 6;
    cubecolor = colorgen(selmode);
    pickedcolor = pick();
    askcolor.textContent = pickedcolor;
    colorify();
    cube[i].addEventListener("click", function () {
        var bgc = this.style.backgroundColor;
        console.log(bgc);
        if (bgc != pickedcolor) {
            this.style.backgroundColor = "white";
            att.textContent = "Try again!";

        } else {
            head.style.backgroundColor = bgc;
            maintext.classList.add('win');
            att.textContent = "";
            msg.textContent = "You win! click \"New Game\" to play again";
            msg.classList.add('win');
            resetbtn.textContent = "New game";
            for (var i = 0; i < cube.length; i++) {
                cube[i].style.backgroundColor = bgc;
            }
        }

    })
}
resetbtn.addEventListener("click", function () {
    maintext.classList.remove('win');
    msg.classList.remove('win');
    msg.textContent = "Ready to play!"
    cubecolor = colorgen(selmode);
    pickedcolor = pick();
    askcolor.textContent = pickedcolor;
    colorify();
})
easybtn.addEventListener("click", function () {
    msg.textContent = "Ready to play!"
    maintext.classList.remove('win');
    msg.classList.remove('win');
    this.classList.add("selected");
    hardbtn.classList.remove("selected");
    selmode = 3;
    cubecolor = colorgen(selmode);
    pickedcolor = pick();
    askcolor.textContent = pickedcolor;
    colorify();
})
hardbtn.addEventListener("click", function () {
    msg.textContent = "Ready to play!"
    maintext.classList.remove('win');
    msg.classList.remove('win');
    for (var i = 0; i < cube.length; i++) {
        cube[i].style.display = "block";
    }
    easybtn.classList.remove("selected")
    this.classList.add("selected");
    selmode = 6;
    cubecolor = colorgen(selmode);
    pickedcolor = pick();
    askcolor.textContent = pickedcolor;
    colorify();
});