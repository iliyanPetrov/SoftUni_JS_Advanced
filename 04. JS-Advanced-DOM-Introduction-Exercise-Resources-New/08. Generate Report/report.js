function generateReport() {
    const inputNames = Array.from(document.querySelector('thead tr').querySelectorAll('th'));
    const len = inputNames.length;
    const resultArr = [];
    const numOfObjects = document.querySelector('tbody').querySelectorAll('tr').length;
    for (let w = 0; w < numOfObjects; w++){
        resultArr[w] = {};
    }
    const dataList = Array.from(document.querySelector('tbody').querySelectorAll('tr'));
    for (let i = 0; i<len; i++){
        const element = inputNames[i].firstElementChild;
        if (element.checked == true){
            // FOROF
            let currPropName = element.name;
            for (let z = 0; z < numOfObjects; z++){
                const innerData = Array.from(dataList[z].querySelectorAll('td'));
                resultArr[z][currPropName] = innerData[i].textContent;
            }
        }
    }
    const output = JSON.stringify(resultArr)
    document.querySelector('#output').textContent = output;
}