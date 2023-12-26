let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msgcontainer");
let newGame = document.querySelector(".new-game");
let playerO = true;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const highlightWinner = (winningCombo) => {
    for (let index of winningCombo) {
        boxes[index].style.backgroundColor = "gold";
    }
};

let showWinner = (selected1, winningCombo) => {
    for (let box of boxes) {
        box.disabled = true;
    }
    if (selected1 === "Draw") {
        msg.innerHTML = `${selected1}`;
        msgcontainer.style.display = "block";
    }
    else {
        msgcontainer.style.display = "block";
        msg.innerHTML = `Player ${selected1} Wins`;
        highlightWinner(winningCombo)
    }
}
const checkWinner = () => {
    for (let winner of winPattern) {
        let selected1 = boxes[winner[0]].innerText;
        let selected2 = boxes[winner[1]].innerText;
        let selected3 = boxes[winner[2]].innerText;
        if (selected1 != "" && selected2 != "" && selected3 != "") {
            if (selected1 === selected2 && selected2 === selected3) {
                showWinner(selected1, winner);
                return true;
            }
        }
    }
    return false;
}
const checkDraw = () => {
    for (box of boxes) {
        if (box.innerText === "") {
            return false;
        }
    }
    showWinner("Draw");
    return true;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO) {
            box.innerText = "O";
            playerO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "red";
            playerO = true;
        }
        box.disabled = true;
        if (!checkWinner()) { // Check for a winner first
            checkDraw(); // If no winner, check for a draw
        }

    });
});

newGame.addEventListener("click", () => {
    window.location.reload();
})
