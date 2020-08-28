
//Problem 1
/**
 * Make program that gets the sum of all multiples of 3 or 5 under 1000
 *//*
let pre = document.getElementById("pre");
let sum = 0;

for(let i = 0; i< 1000; i++){
    if(i % 3 == 0 || i % 5 == 0){
        sum += i;
    }
}

console.log(sum);*/

//Problem 2
/**
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 *//*
let num1 = 1;
let num2 = 2;
let num3 = 0;
let sum = 0;

while(num3 < 4000000){
    num3 = num2 + num1;
    num1 = num2;
    num2 = num3;

    if(num2 % 2 == 0){
        sum += num2;
    }
}
console.log(sum);*/ //So this gives the wrong answer, that is because i do not include the first integer 2. I just added this in my answer.

//Problem 3
/**
 * What is the largest prime factor of the number 600851475143 ?
 */
/*
let primeNumbers = [];
let daNumber = 600851475143;
function isPrime(n)
{
    if (n < 2) return false;
    /**
     * An integer is prime if it is not divisible by any prime less than or equal to its square root
     **//*
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}

function isInt(n){
    return n % 1 === 0;
}

for(let i = 0; i<= 10000; i++){
    if(isPrime(i)){
        primeNumbers.push(i);
    }
}

for(let num = primeNumbers.length; num >= 0; num--){
    let svar = daNumber/primeNumbers[num];
    if(isInt(svar)){
        console.log(primeNumbers[num]);
        break;
    }
}

//console.log(primeNumbers);
*/
let digits = [];
let list = [];
let reversed = [];

function digitNum(number) {
    while(number > 0) {
        digits.push(number % 10);
        number = parseInt(number/10);
    }
    reversed = digits
    digits.reverse();
    console.log(digits);
    console.log(reversed);
}

function findPalindrome(){
    for(let i = 999; i>0; i--){
        for(let j = 999; j>998; j--){
            digitNum(i*j);
            if(checkPalindrome()){
                console.log(reversed);
            }
        }
    }
}


/*function testForPalindrome(array){
    let arrayReverse = array.reverse();
    console.log(arrayReverse);
    let reversed = arrayReverse.join("");
    console.log(reversed);
    return reversed;
}*/

function arrayToString(array){
    let newArray = array.join("");
    return newArray;
}

function checkPalindrome(){
    if(arrayToString(reversed) == arrayToString(digits)){
        return true;
    }else{
        digits = [];
        reversed = [];
    }
}
findPalindrome();