
function Pooja(){
   
    console.log("Welcome to JavaScript");
}
Pooja();

/*function checkAge() {
    let age = prompt("Enter your age");

    if (age >= 18) {
        alert("You are eligible to vote");
    } else {
        alert("You are not eligible to vote");
    }
}

checkAge();
function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

printNumbers();

setTimeout(function abc(){
    console.log("this is timeout function");
},10000);
*/

function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

let fruits = ["Apple11111", "Mango1111", "Banana1111"];

printArray(fruits);
console.log(printArray(fruits));


let finalSum = 0;
function ArraySum(sumNum){
    for(let i = 0; i< sumNum.length; i++)
    {
        finalSum = finalSum + sumNum[i]
        console.log(finalSum)
    }
    return finalSum;
}
let myArraySum = [10, 20, 30, 40];
let finalMySubArray = functionArraySum(myArraySum);
console.log("final num is :-", finalMySubArray);



function functionArraySum(sumNum){
    for(let i = 0; i< sumNum.length; i++)
    {
        finalSum = finalSum + sumNum[i]
        console.log(finalSum)
    }
    return finalSum;
}
let myArraySum1 = [10, 20, 30, 40];
let finalMySubArray1 = functionArraySum(myArraySum);
console.log("final num is :-", finalMySubArray);

 let myNameData = "Manoj Upadhyay";
        console.log(myNameData.length);
        console.log(myNameData.toUpperCase());
        console.log(myNameData.toLowerCase());
        console.log(myNameData.indexOf('yay'));
console.log("Math Object Methods");
let myMathMethod = 35.25;
        console.log(Math.round(myMathMethod));
        console.log(Math.ceil(myMathMethod));
        console.log(Math.floor(myMathMethod));
        console.log(Math.random());
        console.log(Math.max(10, 20, 30, 40));
        console.log(Math.min(10, 20, 30, 40));

console.log("for date object");
let date = new Date();
        console.log(date);
        console.log(date.getFullYear());
        console.log(date.getMonth());
        console.log(date.getDate());
        console.log(date.getDay());
        console.log(date.getHours());
        console.log(date.getMinutes());
        console.log(date.getSeconds());   