
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
 * PROBLEM 8
 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
 */
/*
let num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
//let num = "1234"
let sum1 = 1;
let sum2 = 1;

function throughString(str){
    for(let i = 0; i <= 100*13; i++){
        let nums = str.substr(i,13);
        nums = nums.split("");
        console.log(nums);
            for(let j = 0; j<=12; j++){
                sum2 *= parseInt(nums[j]); 
                console.log(sum2);
            }
        if(sum2 > sum1){
            sum1 = sum2;
            sum2 = 1;
        }else{
            sum2 = 1;
        }

    }
    return sum1;
}


console.log(throughString(num));*/

/**
 * PROBLEM 9
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */
/*
let a = 0, b = 0, c = 0;
let found = false;

function findTrip(){
    while(!found){
        for(a = 1; a<= 500; a++){
            for(b = 1; b<=500; b++){
                cSquared = Math.pow(a,2) + Math.pow(b,2);
                c = Math.sqrt(cSquared);
                if(a+b+c == 1000){
                    found = true;
                    break;
                }
            }
            if(found){
                break;
            }
        }
    }
}
findTrip();
console.log(a,b,c);
console.log(a*b*c);*/

/**
 * PROBLEM 10 
 * Find the sum of all the primes below two million.
 */
/*
let primeNumbers = [];
let sum = 0;

function isPrime(n){
    if (n < 2) return false;
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

function makePrime(){
    for(let i = 0; i<= 2000000; i++){
        if(isPrime(i)){
            primeNumbers.push(i);
        }
    }
}
makePrime();
console.log(primeNumbers.reduce((a, b) => a + b, 0));*/

/**
 * PROBLEM 11
 * What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?
 */
/*
let grid = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
    [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
    [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
    [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
    [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
    [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
    [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
    [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
    [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
    [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
    [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];

let prodLod = 1;
let prodLod1 = 1;
let prodWat = 1;
let prodWat1 = 1;
let prodDiagRight = 1;
let prodDiagRight1 = 1;
let prodDiagLeft = 1;
let prodDiagLeft1 = 1;
let hei;

function multiplyVer(){
    for(let col = 0; col<= 16; col++){
        for(let x = 0; x<= 19; x++){
            for(let y = 0; y <= 3; y++){
                prodLod1 *= grid[y][x];
            }
            if(prodLod1 > prodLod){
                prodLod = prodLod1;
                prodLod1 = 1;
            }else{
                prodLod1 = 1;
            }
        }
    }
    
}

function multiplyDiagRight(){
    for(let col = 0; col<= 16; col++){
        for(let row = 0; row <= 16; row++){
            for(let i = 0; i <= 3; i++){
                prodDiagRight1 *= grid[row+i][col+i];
            }
            if(prodDiagRight1 > prodDiagRight){
                prodDiagRight = prodDiagRight1;
                prodDiagRight1 = 1;
            }else{
                prodDiagRight1 = 1;
            }
        }
        
    }
}

function multiplyDiagLeft(){
    for(let col2 = 3; col2<= 19; col2++){
        for(let row2 = 0; row2 <= 16; row2++){
            for(let i = 0; i <= 3; i++){
                prodDiagLeft1 *= grid[row2+i][col2-i];
                console.log(prodDiagLeft1);
            }
            if(prodDiagLeft1 > prodDiagLeft){
                prodDiagLeft = prodDiagLeft1;
                prodDiagLeft1 = 1;
            }else{
                prodDiagLeft1 = 1;
            }
            console.log(col2,row2);
        }
        
    }
    
}

function multiplyWat(){
    for(let row = 0; row <= 16; row++){
        for(let x = 0; x<= 19; x++){
            for(let y = 0; y <= 3; y++){
                prodWat1 *= grid[x][y + row];
            }
            if(prodWat1 > prodWat){
                prodWat = prodWat1;
                prodWat1 = 1;
            }else{
                prodWat1 = 1;
            }
        }
    }
    
}

multiplyVer();
multiplyWat();
multiplyDiagRight();
multiplyDiagLeft();

console.log(prodLod);
console.log(prodWat);
console.log(prodDiagRight);
console.log(prodDiagLeft);
*/

/**
 * PROBLEM 12
 * What is the value of the first triangle number to have over five hundred divisors?
 */
let divisors = 1;
 let triangle = 1;
 while(divisors<= 500){
     triangle++;


     let sum = triangleNum(triangle);

     let divisors = primeFactorial(sum);

     console.log("triangle: " + triangle + " sum: " + sum + " Divisors: " + divisors);
     
 }

 function triangleNum(num){
     let temp = (num+1) / 2;
     return temp * num;
 }

 function isPrime(n){
    if (n < 2) return false;
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
function primeFactorial(num){
    // Is handed triangular number and calculates prime factors to calculate factorials
    let temp = num;

    let hh = [];
    for(let i = 0; i<= temp + 1; i++){
        hh.push(1);
    }
	
	for(let p = 2; (p*p) < temp; p++){
		if (hh[p] == 1){
            for(let i = (p*2); i<= temp; i = (i + p)){
                hh[i] = 0; 
            }
        }
    } 

    console.log(hh);
    let factorials = 1;
    for(let p = 2; p <= temp; p++){
        if(hh[p] == 1){
            let count = 0;
            if(temp % p == 0){
                while(temp % p == 0){
                    temp = temp / p;
                    count += 1;
                }
                factorials *= (count+1);
            }
        }
    }
    return factorials;
}


 