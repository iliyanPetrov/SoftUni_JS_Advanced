function solve() {
    const output = document.getElementById('output');
    const text = document.getElementById('input').value;
    const textArr = text.split(". ");
    let formatedTextArr = textArr.filter(item => !!item);
    for (let i = 0; i < formatedTextArr.length; i+=3) {
        let currContent = formatedTextArr.slice(i, i+3).join('');
        output.innerHTML += `<p>${currContent}</p>`;
        debugger
    }
}


// OTHER TESTING FUNCTION-1
// function formatTheText() {
//     const output = document.getElementById('output');
//     const textArr = Array.from(document.body.querySelector("#input").value.split(".")).map(e => e.trim()).filter(e => !!e);
//     while (textArr.length) {
//         let currContent = textArr.splice(0, 3).join(". ") + ".";
//         output.innerHTML += `<p>${currContent}</p>`;
//     }
// }



/**
 * 
 * //  //thank you softuni
function solve() {
    const output = document.getElementById('output');
    const text = document.getElementById('input').value;
    const textArr = text.split(".");
    const filteredArr = textArr.filter(element => !!element);
 
    while(filteredArr.length > 0) {
        let currContent = filteredArr.splice(0, 3).join('. ') + '.';
        output.innerHTML += `<p>${currContent}</p>`;
    }
}
 */