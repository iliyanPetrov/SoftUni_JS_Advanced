// function echoFunction(input){
//     let len = input.length;
//     console.log(len)
//     console.log(input)
// }

// echoFunction("abc")

//-----------------------------

function stringLength(str1, str2, str3) {
    let sum = [str1, str2, str3].reduce((acc, str) => {
        return acc + str.length;
    }, 0);
    console.log(sum)
}
stringLength('abc', 'defg', 'qwerty')
