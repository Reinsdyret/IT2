let ballStyle = document.getElementById("ball").style;
let interval = setInterval(ball,10);
let i = 0;
function ball(){
    if(i == 500){
        clearInterval(interval);
    }else{
        i++;
        ballStyle.top = i + "px";
        ballStyle.left = i + "px";
    }
    ballStyle.top = i + "px";
    ballStyle.left = i + "px";
}
