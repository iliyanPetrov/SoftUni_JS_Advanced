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
// function timeToWalk(steps, stepLength, speedKmPH) {
//     // debugger
//     let distanceInMeters = steps * stepLength;
//     let speedMtPerSec = speedKmPH / 3.6;
//     let timeSeconds = distanceInMeters / speedMtPerSec;
//     let minutesRest = Math.floor(distanceInMeters / 500);
//     let totalTime = timeSeconds + minutesRest*60;

//     // CALCULATE TIME
//     // console.log(timeSeconds, 'seconds')
//     // console.log(timeSeconds + minutesRest*60, `seconds with ${minutesRest} minutes rest`)
//     // debugger
//     let hours = Math.floor(totalTime / 3600);
//     let minutes = Math.floor((totalTime - hours*3600) / 60);
//     let seconds = Math.round((totalTime - hours*3600) - minutes*60);

//     let formatedHours = hours > 9 ? `${hours}` : `0${hours}`;
//     let formatedMinutes = minutes > 9 ? `${minutes}` : `0${minutes}`;
//     let formatedSeconds = seconds > 9 ? `${seconds}` : `0${seconds}`;

//     // PRINT RESULTS
//     console.log(`${formatedHours}:${formatedMinutes}:${formatedSeconds}`);
// }
// timeToWalk(4000, 0.6, 5);
// timeToWalk(2564, 0.70, 5.5);
//---------------------------^^READY


//      == 6 ==
// function roadRadar(speed, area){
//     speed = Number(speed);

//     let areaLimits = {
//         'city': 50,
//         'motorway': 130,
//         'interstate': 90,
//         'residential': 20
//     }
//     let speedLimit = areaLimits[area];
//     let difference = speed - speedLimit;
//     let status = "";
    
//     if (difference<=0){
//         console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
//     }else{
//         if(difference <= 20){
//             status = 'speeding';
//         }else if (difference <= 40){
//             status = 'excessive speeding';
//         } else {
//             status = 'reckless driving';
//         }
//         console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
//     }
// }

// roadRadar(40, 'city');
// roadRadar(21, 'residential')
// roadRadar(120, 'interstate')
// roadRadar(200, 'motorway')
//---------------------------^^READY


//      == 7 ==
// function cookingByNumbers(num, ...input){
//     num = +num;
//     let commands = {
//         chop: (number)=> number/2,
//         dice: (number)=> Math.sqrt(number),
//         spice: (number)=> number+=1,
//         bake: (number)=> number*=3,
//         fillet: (number)=> number*0.8,
//     }
//     for (const command of input) {
//         num = commands[command](num);
//         console.log(num);
//     }
// }

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
//---------------------------^^READY


//      == 8 ==
// function validityChecker(x1, y1, x2, y2) {

//     let distance1 = Math.sqrt(x1 ** 2 + y1 ** 2);
//     let distance2 = Math.sqrt(x2 ** 2 + y2 ** 2);
//     let distance3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//     let isValid1 = Number.isInteger(distance1);
//     let isValid2 = Number.isInteger(distance2);
//     let isValid3 = Number.isInteger(distance3);
 
//     console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid1 ? "valid" : "invalid"}`);
//     console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid2 ? "valid" : "invalid"}`);
//     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid3 ? "valid" : "invalid"}`);
// }

// validityChecker(3, 0, 0, 4);
// validityChecker(2, 1, 1, 1);
//---------------------------^^READY


//      == 9 ==
function wordsUppercase(text){
    let regex = /\b[a-zA-Z]*\w/g;
    let match = text.match(regex);
    console.log(match.join(', ').toUpperCase())
}

wordsUppercase('Hi, how are you?')