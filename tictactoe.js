console.log("Welcome to Tic Tac Toe");
let Audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
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
            document.querySelector('.status').innerHTML = '<span class="info font-bold">' + boxtext[e[0]].innerText + '</span>' + " Won";
            isgameover = true;
            gameover.play();
            document.querySelector(".winModal").style.display = "block";
            document.querySelector(".winModal").querySelector(".modal").querySelector(".modalBox").querySelector("#modalInfo").innerText = "Congratulations! " + boxtext[e[0]].innerText + " Won";
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
                document.getElementsByClassName("info")[0].innerText =  turn;
            }
        }
    })
})
document.getElementById("reset").addEventListener('click', () => {
    let boxtext = document.getElementsByClassName("boxText");
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("status")[0].innerHTML = 'Turn for <span class="info font-bold">X</span>';
});
document.querySelector(".winModalDismiss").addEventListener('click', () => {
    document.querySelector(".winModal").style.display = "none";
    document.querySelector(".winModal").querySelector(".modal").querySelector(".modalBox").querySelector("#modalInfo").innerText = "";
});