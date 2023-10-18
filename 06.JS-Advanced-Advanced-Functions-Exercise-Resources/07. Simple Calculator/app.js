function calculator() {
    
    let input1Element = "";
    let input2Element = "";
    let outputElement = "";

    return {
        init: (s1, s2, res) => {
            input1Element = document.querySelector(s1);
            input2Element = document.querySelector(s2);
            outputElement = document.querySelector(res);
        },
        add: () => {
            debugger;
            outputElement.value = Number(input1Element.value) + Number(input2Element.value);
        },
        subtract: () => {
            debugger;
            outputElement.value = Number(input1Element.value) - Number(input2Element.value);
        },
    };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
