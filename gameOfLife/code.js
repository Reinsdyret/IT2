let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let preGenerations = document.getElementById("generations");
let generationsPerSecond = document.getElementById("generationsPerSecond");
let preGenerationsPerSeconds = document.getElementById("generationsPerSecondsPre");
let btnStart = document.getElementById("btnStart");


function population(arr){
    let num = 0;
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            if(arr[i][j] != 0){
                num++;
            }
        }
    }
    return num;
}

function populate(size){
    let arr = new Array(size);
    let randInt;
    for(let i = 0; i<arr.length; i++){
        arr[i] = new Array(size);
    }

    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            randInt = Math.floor(Math.random() * 1);
            arr[i][j] = randInt;
        }
    }

    return arr;
}

function aliveNextGeneration(arr){
    let populationAroundCenter = 0;
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            if(i != 2 && j != 2){
                if(arr[i][j] == 1){
                    populationAroundCenter++;
                }
            }
        }
    }

    if(populationAroundCenter == 2 && arr[2][2] == 1 || populationAroundCenter == 3){
        return true;
    }else{
        return false;
    }
}

function drawWorld(world){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let blockSize = canvas.width / world.length;

    for(let i = 0; i<world.length; i++){
        for(let j = 0; j<world[i].length; j++){
            if(world[i][j] == 1){
                ctx.fillRect(j * blockSize,i*blockSize,blockSize,blockSize);
            }
        }
    }
}