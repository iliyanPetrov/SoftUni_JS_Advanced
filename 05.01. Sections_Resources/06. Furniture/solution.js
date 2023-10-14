function solve() {

    const [inputArea, outputArea] = document.querySelectorAll('textarea');
    const [generateButton, buyButton] = document.querySelectorAll('button');
    generateButton.addEventListener("click", generateHandler);
    buyButton.addEventListener("click", buyHandler);
    const tableBody = document.querySelector("tbody");
    
    function generateHandler(e){
        if(!inputArea.value) return;
        const input = JSON.parse(inputArea.value);
        for (const el of input) {
            const {img, name, price, decFactor} = el;
            const tableRow = document.createElement("tr");
            const tableData = `<td><img src=${img}></td><td><p>${name}</p></td><td><p>${price}</p></td><td><p>${decFactor}</p></td><td><input type="checkbox"></td>`
            tableRow.innerHTML = tableData;
            tableBody.appendChild(tableRow);
            // debugger
        }
    }

    function buyHandler(e){
        const checkedArr = Array.from(document.querySelectorAll("input[type=checkbox]:checked"));
        const namesArr = [];
        let totalPrice = 0, decFactor = 0;
        for (const el of checkedArr) {
            let attributes = Array.from(el.parentElement.parentElement.children);
            namesArr.push(attributes[1].firstElementChild.textContent);
            totalPrice+=Number(attributes[2].firstElementChild.textContent);
            decFactor+=Number(attributes[3].firstElementChild.textContent);
        }
        outputArea.textContent = `Bought furniture: ${namesArr.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(decFactor/namesArr.length)}`
    }
}