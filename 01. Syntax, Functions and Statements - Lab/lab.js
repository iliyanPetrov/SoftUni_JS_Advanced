//      == 1 ==
// function echoFunction(input){
//     let len = input.length;
//     console.log(len)
//     console.log(input)
// }

// echoFunction("abc")

//---------------------------^^READY


//      == 2 ==
// function stringLength(str1, str2, str3) {
//     let sum = [str1, str2, str3].reduce((acc, str) => {
//         return acc + str.length;
//     }, 0);
//     console.log(sum)
//     console.log(Math.floor(sum/3))
// }
// stringLength('chocolate', 'ice cream', 'cake');

//---------------------------^^READY


//      == 3 ==
// function largestNumber(one, two, three) {
//     let result = Math.max(one, two, three);
//     console.log(`The largest number is ${result}.`);
// }
// largestNumber(1, 2, 3);

//---------------------------^^READY


//      == 4 ==
// function circleArea(input){
//     let type = typeof input;
//     let result;
//     if (type == "number"){
//         result = Math.pow(input, 2) * Math.PI;
//         console.log(result.toFixed(2))
//     }else{
//         console.log(`We can not calculate the circle area, because we receive a ${type}.`)
//     }
// }

// circleArea(5)

//---------------------------^^READY


//      == 5 ==
// function mathOperations(num1, num2, operator){

//     let result;
//     switch(operator){
//         case '+': result = num1+num2; break;
//         case '-': result = num1-num2; break;
//         case '*': result = num1*num2; break;
//         case '/': result = num1/num2; break;
//         case '%': result = num1%num2; break;
//         case '**': result = num1**num2; break;
//     }
//     console.log(result);
// }

//---------------------------^^READY


//      == 6 ==
// function sumOfNumbers(n, m){

//     let num1 = +n, num2 = +m, result = 0;
//     for (let i = num1; i <= num2; i++) {
//         result += i;
//     } return console.log(result);
// }

// sumOfNumbers('-8', 20)

//---------------------------^^READY


//      == 7 ==
// function dayOfWeek(day){
//     let result;

//     switch(day){
//         case "Monday":  result = 1; break;
//         case "Tuesday":  result = 2; break;
//         case "Wednesday":  result = 3; break;
//         case "Thursday":  result = 4; break;
//         case "Friday":  result = 5; break;
//         case "Saturday":  result = 6; break;
//         case "Sunday":  result = 7; break;
//         default: result = 'error'; break;
//     }
//     console.log(result)
// }

// dayOfWeek(1)

//---------------------------^^READY

//      == 8 ==
// function daysInAMonth(month, year){
//     console.log(new Date(year, month, 0).getDate())
// }

// daysInAMonth(2, 2020)

//---------------------------^^READY


//      == 9 ==
// function squareOfStars(num){
//     let inputNumber = num || 5;
//     for (let i = 0; i<inputNumber; i++){
//         console.log('*'.repeat(inputNumber).split('').join(' '))
//     }
// }

// squareOfStars(3)
//---------------------------^^READY


//      == 10 ==
function aggregateElements(input){

    let sum = 0;
    for (const element of input) {
        sum+=element;
    }
    console.log(sum);
    sum = 0;
    for (const element of input) {
        sum+=1/element;
    }
    console.log(sum)
    console.log(input.join(''))
}

aggregateElements([1, 2, 3])