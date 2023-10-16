function getFibbonator(){
    let num1 = 0;
    let num2 = 1;

    function fibonator(){
        let result = num1 + num2;
        num1 = num2;
        num2 = result;
        return num1;
    }
    return fibonator;
}

let fib = getFibbonator();
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())