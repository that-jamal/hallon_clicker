
function createBalls(number) {
    for (let i = 0; i < number; i++) {
        const ball = document.createElement('div')
        ball.classList.add('ball')
        ball.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px'
        ball.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px'
        document.body.appendChild(ball)
        ball.addEventListener('click', onBallClicked)

    }
}

createBalls(11)
var count = 0;
console.log(count)
function onBallClicked(e) {
    document.body.removeChild(e.target)
    if (count < 10) {
        count++;
        document.getElementById("score").innerHTML = "score " + count;

    }
    else {
        clearInterval(downloadTimer);
        document.getElementById("winLost").innerText = ("winner")
        document.getElementById("winLost").style.width = "100vw"
        document.getElementById("winLost").style.height = "100vh"
    }
}

function winClick() {
    setTimeout("location.reload(true);")
}

var timeleft = 10;
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("seconds").innerHTML = "";
        document.getElementById("winLost").innerText = ("not fast enough")
        document.getElementById("winLost").style.width = "100vw"
        document.getElementById("winLost").style.height = "100vh"


    } else {
        document.getElementById("seconds").innerHTML = timeleft;
    }
    timeleft -= 1;
}, 1000);