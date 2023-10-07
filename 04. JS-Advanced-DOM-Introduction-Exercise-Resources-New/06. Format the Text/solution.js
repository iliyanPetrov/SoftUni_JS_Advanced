function solve() {
    const output = document.getElementById('output');
    const text = document.getElementById('input').value;
    const textArr = text.split(". ");
    let formatedTextArr = [];
    textArr.forEach(element => {
        if (element == "" || element == " " || element == "." || element.endsWith('..')) 
        return
        if(!element.endsWith(".")){
            element+="."
        }
        formatedTextArr.push(element);
    });
    for (let i = 0; i < formatedTextArr.length; i+=3) {
        let currContent = formatedTextArr.slice(i, i+3).join('');
        output.innerHTML += `<p>${currContent}</p>`;
        // debugger
    }
}