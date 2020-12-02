let input = document.getElementById("inp");
let pre = document.getElementById("pre");

let blæ = [
    ["æ","ø","å"],
    ["ae","oe","aa"],
    ["Æ","Ø","Å"],
    ["Ae","Oe","Aa"]
];

console.log(blæ);

input.addEventListener('input',function(){
    internalize(input.value);
});

function internalize(text){
    let newString = "";
    for(let i = 0; i<text.length; i++){
        if(blæ.some(row => row.includes(text[i]))){
            newString += newChar(text[i]);
        }else{
            newString += text[i];
        }
        
    }
    pre.innerHTML = newString;
}

function newChar(chara){
    for(let i = 0; i<blæ.length; i++){
        for(let j = 0; j<blæ[i].length; j++){
            if(blæ[i][j] == chara){
                return blæ[i][j+1];
            }
        }
    }
}