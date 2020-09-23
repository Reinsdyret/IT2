
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
/**
 * Problem 4
 */
/*
var digits = [];

let list = [];
let product;

function digitNum(str) {
    let stringer = str.split("").reverse().join("");
    return str === stringer;
}

Function findPalindrome(){
    for(let i = 999; i>99; i--){
        for(let j = 999; j>99; j--){
            product = i * j;
            let string = product.toString();
            if(digitNum(string) === true){
                list.push(product)
            }
        }
    }

findPalindrome();
console.log(Math.max.apply(null,list));*/

//Problem 5
/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *//*
let i;
function divide(){
    i = 1;
    d = 0;
    while(d < 11){
        d = 2;
        while(i%d === 0){
            console.log(i,d);
            d++
        }
        i++
    }
    console.log(i - 1);
}

divide();*/

//problem 6
/**
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
/*
let sum = 0;
let squared = 0;
let difference = 0;

function getSum(){
    for(let i = 1; i<=100;i++){
        sum += i;
        squared += square(i);
    }
    return difference = square(sum) - squared;
}

function square(num){
    return Math.pow(num,2);
}

console.log(getSum());*/

//Problem 7
/**
 * What is the 10 001st prime number?
 */
/*
let primeList = [];
function isPrime(n){
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

for(let p = 1; p<= 200000; p++){
    if(isPrime(p)){
        primeList.push(p);
    }
}

console.log(primeList[10000]);*/

/**
 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
 */

let num = 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450;

function makeList(number){
    let string = String(number);
    string.split();
}
makeList(num);
console.log(string);