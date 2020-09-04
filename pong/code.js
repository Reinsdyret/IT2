let gameCanvas = document.getElementById("gameCanvas");
let imgBall = document.getElementById("ball");
let imgLeftPaddle = document.getElementById("leftPaddle");
let imgRightPaddle = document.getElementById("rightPaddle");

let ball = {
    width: 10,
    height: 10,
    x: 150,
    y: 90,
    speed_x: -1,
    speed_y: 0.1
};

let leftPaddle = {
    x: 0,
    y: 75,
    width: 11,
    height: 58
};

let rightPaddle = {
    x: 310,
    y: 75,
    width: 11,
    height: 58
};


function game(){
    ball.update();
    checkCollY(ball.x,ball.y,leftPaddle.y, leftPaddle.width, leftPaddle.height,rightPaddle.y,rightPaddle.width);
    checkCollX(ball.x,ball.y,leftPaddle.y, leftPaddle.width, leftPaddle.height,rightPaddle.y,rightPaddle.width)
}

function checkCollY(ball_x,ball_y,leftPaddle_y, leftPaddle_width,leftPaddle_height ,rightPaddle_y){
    if(ball_y == 0 + 10 || ball_y == 200-10){
        ball.speed_y *= -1;
    }
}

function checkCollX(ball_x,ball_y,leftPaddle_y, leftPaddle_width,leftPaddle_height ,rightPaddle_y){
    if(ball_x <= 0 + leftPaddle.width && ball_y <= leftPaddle.y + leftPaddle.height && ball_y >= leftPaddle.y  || ball_x == 320-ball.width && ball_y <= rightPaddle_y && ball_y >= rightPaddle_y - 58){
        ball_x *= -1;
    }
}
ball.update = function(){
    imgBall.style.left = this.x + this.speed_x + "px";
    this.x += this.speed_x;
    imgBall.style.top = this.y + this.speed_y + "px";
    this.y += this.speed_y;
}

let interval = setInterval(game,10);