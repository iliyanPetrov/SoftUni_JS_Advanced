function showAttrInfo(...arr) {
    let result = {};
    for (const element of arr) {
        const type = typeof element;
        console.log(`${type}: ${element}`);
        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        result[type] += 1;
    }
    const sortedRes = Object.entries(result).sort((a, b) => b[1] - a[1]);
    // console.log(sortedRes.forEach((el) => console.log(el)));
    for (const [type, count] of sortedRes) {
        console.log(`${type} = ${count}`)
    }
}

showAttrInfo(
    "cat",
    "cat",
    "cat",
    42,
    42,
    function () {
    console.log("Hello world!");
});
