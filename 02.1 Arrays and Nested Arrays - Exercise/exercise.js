//      == 1 ==
// function printWithDelimiter(inputArr, delimiter) {
//     console.log(inputArr.join(delimiter))
// }

// printWithDelimiter(["One", "Two", "Three", "Four", "Five"], "-");
// ----------------------^^Ready


//      == 2 ==
// function printNthElement(inputArr, step) {
//     let result = [inputArr[0]];
//     let increment = step;
//     inputArr.forEach((element, index) => {
//         if (index == step) {
//             result.push(element);
//             step += increment;
//         }
//     });
//     console.log(result); // or return result
// }

// printNthElement(["5", "20", "31", "4", "20"], 2);
// ----------------------^^Ready


//      == 3 ==
// function addAndRemove(inputArr){

//     let value = 1;
//     let result = [];

//     for (const line of inputArr) {
//         line == "add" ? result.push(value) : result.pop();
//         value++;
//     }
//     result.length ? console.log(result.join('\n')) : console.log('Empty')
// }
// addAndRemove(
//     ['add', 
//     'add', 
//     'add', 
//     'add']
// )
// addAndRemove(
//     ['add', 
//     'add', 
//     'remove', 
//     'add', 
//     'add']
// )
// addAndRemove(
//     ['remove', 
//     'remove', 
//     'remove']
// )
// ----------------------^^Ready


//      == 4 ==
// function rotateArray(inputArr, rotations){

//     for (let index = 0; index < rotations; index++) {
//         const element = inputArr.pop();
//         inputArr.unshift(element);    
//     }
//     console.log(inputArr.join(' '))
// }

// rotateArray(
//     ['Banana', 
//     'Orange', 
//     'Coconut', 
//     'Apple'], 
// 15
// )
// ----------------------^^Ready


//      == 5 ==
// function extract(inputArr) {

//     let arr = [inputArr[0]];
//     for (let index = 1; index < inputArr.length; index++) {
//         if (inputArr[index] >= arr[arr.length - 1]) arr.push(inputArr[index]);
//     }
//     console.log(arr); // or return arr
// }

// extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// ----------------------^^Ready


//      == 6 ==
// function listOfNames(inputArr){
//     let arr;
//     arr = inputArr.sort((a,b)=>{return a.localeCompare(b)});
//     arr.forEach((name, index) => {
//         console.log(`${index+1}.${name}`)
//     });
// }
// listOfNames(["John", "Bob", "Christina", "Ema"])
// ----------------------^^Ready


//      == 7 ==
// function sortingNumbers(inputArr) {
//     let arr = inputArr.slice(0);
//     let len = arr.length;
//     let result = [];
//     let big = (input) => {
//         return Math.max(...input);
//     };
//     let small = (input) => {
//         return Math.min(...input);
//     };
//     for (let i = 0; i < len; i++) {
//         if (i % 2 !== 0) {
//             let bigNum = big(arr);
//             result.push(bigNum);
//             arr.splice(arr.indexOf(bigNum), 1);
//         } else {
//             let smallNum = small(arr);
//             result.push(smallNum);
//             arr.splice(arr.indexOf(smallNum), 1);
//         }
//     }
//     console.log(result); or return result
// }
// sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// ----------------------^^Ready


//      == 8 ==
// function sortBy2Criteria(inputArr) {
//     return inputArr.sort((a, b) => {
//         if (a.length !== b.length) {
//             return a.length - b.length;
//         } else {
//             return a.localeCompare(b);
//         }
//     }).join('\n');
// }

// console.log(
// sortBy2Criteria(
//     ['Isacc', 
//     'Theodor', 
//     'Jack', 
//     'Harrison', 
//     'George']
// ))
// ----------------------^^Ready


//      == 9 ==
function magicMatrices(inputArr){

    let isMagic = true;
    let firstRowSum = 0;

    firstRowSum = inputArr[0].reduce((acc, curr) => {
        return acc + curr;
    }, firstRowSum);

    for (const line of inputArr) {
        let currentRowSum = line.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
        if (currentRowSum !== firstRowSum)
            return false;
    }
    // IF HERE --> ROWS ARE EQUAL

    // compare columns
    let iterations = inputArr[0].length - 1;
    let sumLeft=0;
    let sumRight=0;

    for(let i=0; i<iterations; i++){
        for(let j=0; j<inputArr.length; j++){
            // console.log(`we are currently at No.${i+1} iteration`);
            // console.log('left col digit=', inputArr[j][i]);
            // console.log('right col digit=', inputArr[j][i+1]);
            sumLeft += inputArr[j][i];
            sumRight += inputArr[j][i + 1];
        }
        // console.log(`No.${i+1} iteration ends.`);
        // console.log(`sumLeft = ${sumLeft}`);
        // console.log(`sumRight = ${sumRight}`);
        if (sumLeft !== firstRowSum || sumRight !== firstRowSum)
            return false;
        sumLeft = 0;
        sumRight = 0;
    }
    // OUTPUT
    return isMagic;
}
console.log(magicMatrices([
    [1,2,3],
    [2,3,1],
    [3,1,2]
]))
// ----------------------^^Ready