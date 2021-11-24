let score = 0;
let active = null;
let loop = [];

function Click() {
    score++;
    document.getElementById('Score').innerText = "Счет: " + score;

}


function StartGame(exitOrNo) {


    if (exitOrNo==0) {
        document.getElementById('StopButton').hidden = false;
        document.getElementById('StartButton').hidden = true;


        loop = setInterval(() => {
            if (score < 10) {
                draw();
            } else {
                alert('Поздравляю. Вы выиграли! Возьмите с полки пирожок :з А еще вот вам личная грамота! ');
                clearInterval(loop);
            }
        }, 810);
    }
    else
    {
        document.getElementById('StopButton').hidden = true;
        document.getElementById('StartButton').hidden = false;
        clearInterval(loop);
        score = 0;
        active = null;
    }
}


async function draw() {
    active = getRandomInt(1, 17);
    document.getElementById(active.toString()).onclick = Click;

    document.getElementById(active.toString()).style.background = "black";
    await sleep(800);
    document.getElementById(active.toString()).style.background = "#866919";
    document.getElementById(active.toString()).onclick = null;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}