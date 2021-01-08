class Block{
    x;
    y;
    xSpeed;
    ySpeed;
    sideLength = 10;
    color;

    constructor(x,y,xSpeed,ySpeed,enemy){
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        if(enemy){
            this.color = "red";
        }else{
            this.color = "green";
            this.sideLength = 20;
        }
    }

    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.sideLength,this.sideLength);
    }

    respawn(width,height){
        let side = Math.round(Math.random() * 4 + 1);
        if(side == 1){
            this.x = 10;
            this.y = Math.random() * (height - 10) + 5;
            this.xSpeed = 0.5;
            this.ySpeed = 0;
        }else if(side == 2){
            this.y = 10;
            this.x = Math.random() * (width - 10) + 5;
            this.xSpeed = 0;
            this.ySpeed = 0.5;
        }else if(side == 3){
            this.x = width - 10
            this.y = Math.random() * (height - 10) + 5;
            this.xSpeed = -0.5;
            this.ySpeed = 0;
        }else{
            this.y = height - 10;
            this.x = Math.random() * (width - 10) + 5;
            this.xSpeed = 0;
            this.ySpeed = -0.5;
        }
    }
}