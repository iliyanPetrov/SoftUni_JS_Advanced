//      == 1 ==
// function fruit(fruit, grams, price) {
//     let weight = grams / 1000;
//     let money = weight * price;

//     console.log(`I need ${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
// }

// fruit('apple', 1563, 2.35)
//---------------------------^^READY

//      == 2 ==
// function greatestCommonDevisor(a, b) {
//     let gcd = a % b;
//     while (gcd !== 0) {
//         a = b;
//         b = gcd;
//         gcd = a % b;
//     }
//     console.log(b)
// }

// greatestCommonDevisor(15, 5);
// greatestCommonDevisor(2154, 458);

//---------------------------^^READY

//      == 3 ==
// function sameNumbers(input) {
//     input = "" + input;
//     let arr = input.split("");
//     let last = arr[arr.length - 1];
//     console.log(arr.every((el) => el == last));
//     arr = arr.map(Number);
//     let sum = 0;
//     for (const num of arr) {
//         sum+=num
//     }
//     console.log(sum)
// }

// sameNumbers(2222222);
//---------------------------^^READY


//      == 4 ==
// function previousDay(year, month, day){

//     let myDate = new Date(year, month -1, day);
//     myDate.setDate(myDate.getDate() - 1);
//     console.log(`${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`)
// }

// previousDay(2016, 9, 1)
//---------------------------^^READY


//      == 5 ==
function timeToWalk(steps, footPrint, speed) {
    let distanceInMeters = steps * footPrint;
    let speedMetersPerSec = speed / 3.6;
    let time = distanceInMeters / speedMetersPerSec;
    let rest = Math.floor(distanceInMeters / 500);


}
timeToWalk(4000, 0.6, 5);
