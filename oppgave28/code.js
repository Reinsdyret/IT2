let pre = document.getElementById("pre");
let time = 0;

function everyFourth(){
    time += 0.25
    pre.innerHTML = time;
}

setInterval(everyFourth,250);