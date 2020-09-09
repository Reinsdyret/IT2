let gameCanvas = document.getElementById("gameCanvas");
let imgBall = document.getElementById("ball");
let imgLeftPaddle = document.getElementById("leftPaddle");
let imgRightPaddle = document.getElementById("rightPaddle");

let ball = {
    width: 10,
    height: 10,
    x: 150,
    y: 90,
    speed_x: 1,
    speed_y: 0.2
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
    leftPaddle.update();
    checkCollLeft();
    checkCollRight();
}

function checkCollLeft(){
    if((leftPaddle.x + leftPaddle.height <= ball.x)
    &&
    
    (leftPaddle.y + leftPaddle.height >= ball.y)
    &&
    (leftPaddle.y <= ball.y + ball.height)
    ){
        ball.speed_x *= -1;
    }
}

function checkCollRight(){
    if((rightPaddle.x >= ball.x)
        &&
        (rightPaddle.x <= ball.x + ball.width)
        &&
        (rightPaddle.y + rightPaddle.height >= ball.y)
        &&
        (rightPaddle.y <= ball.y + ball.height)
        ){
        ball.speed_x *= -1;
    }
}
ball.update = function(){
    imgBall.style.left = this.x + "px";
    this.x += this.speed_x;
    imgBall.style.top = this.y + "px";
    this.y += this.speed_y;
}

rightPaddle.update = function(){
    this.y += 1;
    imgRightPaddle.style.top = this.y + "px"
}

leftPaddle.update = function(){
    let differanse = this.y + (this.height / 2) - ball.y;
    this.y -= differanse;
    imgLeftPaddle.style.top = this.y + "px";
}

document.onkeydown = function(e){
    switch(e.keyCode){
        case(e.keyCode == 38):
        rightPaddle.update();
    }
}

let interval = setInterval(game,10);