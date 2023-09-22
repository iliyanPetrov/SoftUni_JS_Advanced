
//      == 1 ==
// function evenPositionElements(arr) {
//     let result = '';
//     arr.forEach((element, i) => {
//         if (i%2 == 0) result += element + ' '
//     });
//     console.log(result.slice(0, result.length - 1))
// }

// evenPositionElements(["20", "30", "40", "50", "60"]);
// ----------------------^^Ready


//      == 2 ==
// function lastKNumbersSequence(elements, key){
//     let arr = [1];

//    // define fn
//    function sum(array){
// 	      let result = 0;
// 	      for (const num of array){
// 		         result += num
// 	      }
// 	      return result
//     }

//    // show results
//    for (let i=1; i<elements; i++){
// 	      let prev = [];
// 	      for(let j=i-1;j>=i-key;j--){
// 	          prev.push(arr[j]||0)
// 	      }
// 	      arr[i] = sum(prev);
// 	      // console.log(arr)
//    }
//    console.log(arr) // or return arr
// }

// lastKNumbersSequence(6, 3)
// ----------------------^^Ready


//      == 3 ==
// function sumFirstAndLast(inputArr){

//     let result = 0;
//     if(inputArr.length == 1){
//         result = +inputArr[0];
//     }else{
//         result = +inputArr.pop() + +inputArr.shift();
//     }

//     return console.log(result);
// }

// sumFirstAndLast(['20', '30', '40'])
// sumFirstAndLast(['2'])
// ----------------------^^Ready


//      == 4 ==
// function positive_negativeNumbers(inputArr){

//     let result = [];
//     inputArr.forEach(element => {
//         if (element < 0) result.unshift(element)
//         else result.push(element)
//     });
//     return console.log(result.join('\n'))
// }

// positive_negativeNumbers([7, -2, 8, 9])
// ----------------------^^Ready


//      == 5 ==
// function smallest2Numbers(inputArr){
//     let iterator = [1,2];
//     let result = [];
//     for (const digit of iterator) {
//         let smallest = Math.min(...inputArr);
//         result.push(smallest);
//         inputArr.splice(inputArr.indexOf(smallest), 1)
//     }
//     return console.log(result.join(' '))
// }

// smallest2Numbers([30, 15, 50, 5])
// ----------------------^^Ready


//      == 6 ==
// function biggerHalf(inputArr){
//     let sortedArr = inputArr.sort((a, b) => a - b);
//     return (sortedArr.slice(Math.floor(sortedArr.length/2)))
// }

// biggerHalf([3, 19, 14, 7, 2, 19, 6])
// ----------------------^^Ready


//      == 7 ==
// function pieceOfPie(inputArr, firstString, secondString){
    
//     return inputArr.slice(inputArr.indexOf(firstString), inputArr.indexOf(secondString) + 1);
// }

// pieceOfPie(['Pumpkin Pie',
// 'Key Lime Pie',
// 'Cherry Pie',
// 'Lemon Meringue Pie',
// 'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie')
// ----------------------^^Ready


//      == 8 ==
// function proccessOddPositions(inputArr){
//     let processed = [];
//     inputArr.forEach((element, index )=> {
//         if (index % 2 != 0){
//             processed.push(element)
//         }
//     });
//     console.log(processed.map((element)=>element*2).reverse())
// }

// proccessOddPositions([10, 15, 20, 25])
// proccessOddPositions([3, 0, 10, 4, 7, 3])
// ----------------------^^Ready


//      == 9 ==
// function biggestElement(matrixInput){
//     let result = 0;
//     for (const line of matrixInput) {
//         line.forEach(element => {
//             if (element>result) result = element;
//         });
//     }
//     return result;
// }

// biggestElement(
//     [[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]
// )
// biggestElement(
//     [[20, 50, 10],
//     [8, 33, 145]]
// )
// ----------------------^^Ready


//      == 10 ==
// function diagonalSums(inputArr){
//     let firstSum = 0;
//     let secondSum = 0;

//     let firstIndex = 0;
//     let lastIndex = inputArr[0].length - 1;

//     for (const line of inputArr) {
//         firstSum += line[firstIndex++];
//         secondSum += line[lastIndex--];
//     }
//     console.log(firstSum, secondSum)
// }
// diagonalSums(
//     [[20, 40],
//     [10, 60]])
// diagonalSums(
//     [[3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89]]
// )
// ----------------------^^Ready


//      == 11 ==
function equalNeighbours(inputArr){
    const neededIterations = inputArr.length - 1
    let found = 0;

    for (let index = 0; index < neededIterations; index++) {
        const line1 = inputArr[index];
        const line2 = inputArr[index + 1];
        const iterations = line1.length;

        for (let i = 0; i < iterations; i++){
            if (line1[i] == line2[i]){
                found++;
            }
        }
        
    }

    for (const line of inputArr) {
        for (let j = 0; j<line.length - 1; j++){
            if (line[j] == line[j+1]){
                found++;
            }
        }
    }
    console.log(found) // or return found
}

// equalNeighbours(
//     [['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]
// )
// equalNeighbours(
//     [['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]
// )
equalNeighbours(
    [
        [1,1],
        [1,2],
        [4,3]
    ]
) // expected output --> 2