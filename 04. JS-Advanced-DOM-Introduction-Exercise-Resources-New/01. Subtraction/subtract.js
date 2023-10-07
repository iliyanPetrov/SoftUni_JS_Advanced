function subtract() {
    const num1 = Number(document.querySelector("div#wrapper :first-child").value);
    const num2 = Number(document.querySelector("div#wrapper :nth-child(2)").value);
    const result = num1 - num2;
    document.querySelector("div#wrapper :last-child").textContent = result;
}
