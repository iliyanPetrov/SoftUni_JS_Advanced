
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
function lastKNumbersSequence(elements, key){
    let arr = [1];

   // define fn
   function sum(array){
	      let result = 0;
	      for (const num of array){
		         result += num
	      }
	      return result
    }

   // show results
   for (let i=1; i<elements; i++){
	      let prev = [];
	      for(let j=i-1;j>=i-key;j--){
	          prev.push(arr[j]||0)
	      }
	      arr[i] = sum(prev);
	      // console.log(arr)
   }
   console.log(arr)
}

lastKNumbersSequence(6, 3)