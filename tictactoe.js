console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let Audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";

let isgameover = false;
// window.addEventListener('load', ()=>{
//     music.volume = 0.20;
//     music.play();
//     music.loop = Infinity;
// })
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            setTimeout(()=>{
                alert(`Congratulations! ${boxtext[e[0]].innerText} Won`);
            }, 1000);
            
        }
    })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxText");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            turn = changeTurn();
            Audioturn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

document.getElementById("reset").addEventListener('click', ()=> {
    let boxtext = document.getElementsByClassName("boxText");
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0vw";
    document.querySelector(".line").style.width = "0vw";
});