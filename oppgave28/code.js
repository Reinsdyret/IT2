let pre = document.getElementById("pre");
let last = 0, mean = 1;

function everyFourth(){ pre.innerHTML = "number" + "\t" + "sum" + "\t" + "mean" + "\n";
    /*time += 0.25
    pre.innerHTML = time;*/
    for(let i = 1; i<=10; i++){
        pre.innerHTML += i + "\t";
        pre.innerHTML += i+last + "\t" + mean + "\n";
        mean+=0.5;
        last += i;
    }

}

setInterval(everyFourth());