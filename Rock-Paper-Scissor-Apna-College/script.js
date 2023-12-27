let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let compWinCount = 0;
let userWinCount = 0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let draw = () => {
    message.innerHTML = "It's Draw! Play Again";
    message.style.backgroundColor = "#081b31";
}

let showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userWinCount++;
        userScorePara.innerText = userWinCount;
        message.innerHTML = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compWinCount++;
        compScorePara.innerText = compWinCount;
        message.innerHTML = `Computer win! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

let considerWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        console.log("draw");
        draw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // rock scisssor
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            // rock paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log(userChoice);//user choice

        let choiceArr = ["rock", "paper", "scissors"];
        let compChoice = choiceArr[(Math.floor(Math.random() * 3))];
        console.log(compChoice);//computer choice

        considerWinner(userChoice, compChoice);


    })
})
