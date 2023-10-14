function addItem() {
    const selectElement = document.querySelector("#menu");
    let textRef = document.querySelector("#newItemText");
    let valueRef = document.querySelector("#newItemValue");
    let option = document.createElement("option");
    option.value = valueRef.value;
    option.textContent = textRef.value;
    selectElement.appendChild(option);
    textRef.value = "";
    valueRef.value = "";
    // debugger
}
