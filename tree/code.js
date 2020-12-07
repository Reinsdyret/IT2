let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let theta = (2*Math.PI) / 360 * 25.7;
let length = 1;

let vectorMove = new Vector(0,-1);
let vectorPos = new Vector(canvas.width/2,canvas.height/2);

let commands = [
    ["F","+","-","[","]"],
    [line,rotateClock,rotateNoClock,posPush,posPop]
];

let stack = [];

draw(grow("F",5));

function grow(str,generations){
    let ruleVar = ["F","X"];
    let rule = ["F[+F]F[-F]F","F[-X][X]F[-X]+FX"];
    let strCopy = str;
    let newStr = "";
    for(let j = 0; j<generations; j++){
        newStr = "";
        for(let i = 0; i<strCopy.length; i++){
                if(strCopy[i] == ruleVar[0]){
                    newStr += rule[0];
                }else if(strCopy[i] == ruleVar[0+1]){
                    newStr += rule[0+1]
                    
                }else{
                    newStr += strCopy[i];
                }
            
        }
        strCopy = newStr;
        console.log(strCopy);
    }
    
    return strCopy;
}


function draw(str){
    ctx.beginPath();
    ctx.moveTo(vectorPos.x,vectorPos.y);
    for(let i = 0; i<str.length; i++){
        for(let j = 0; j<commands[0].length; j++){
            if(str[i] == commands[0][j]){
                commands[1][j]();
            }
        }
    }
    ctx.stroke();
}

function posPush(){
    let a = {
        pos: vectorPos.clone(),
        move: vectorMove.clone()
    };
    stack.push(a);
}

function posPop(){
    vectorPos = stack[stack.length -1].pos;
    vectorMove = stack[stack.length -1].move;
    stack.pop();
    ctx.moveTo(vectorPos.x,vectorPos.y);
}

function rotateClock(){
    vectorMove.rotate(theta);
}

function rotateNoClock(){
    vectorMove.rotate(-theta);
}

function line(){
    let a = vectorMove.clone();
    a.multiply(length)
    vectorPos.add(a);
    ctx.lineTo(vectorPos.x,vectorPos.y);
}