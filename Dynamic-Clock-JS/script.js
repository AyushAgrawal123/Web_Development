
const timeBox = document.querySelector(".time-box");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
let intervalId;

startBtn.addEventListener("click", () => {
    intervalId = setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString();
        let bgColor = getRandomColor();
        timeBox.innerHTML = time;
        document.body.style.backgroundColor = bgColor;
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    timeBox.innerHTML = "Clock Stopped";
    document.body.style.backgroundColor = "#000000";
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
