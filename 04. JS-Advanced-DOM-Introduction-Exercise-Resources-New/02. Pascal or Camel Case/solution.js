function solve() {
  
    let text =  document.getElementById("text").value;
    let convention = document.getElementById("naming-convention").value;

    let result = "";
    switch (convention){
        case "Camel Case":
            let textArr = text.toLowerCase().trim().split(" ");
            result += textArr.shift();
            for (const el of textArr) {
                result += el[0].toUpperCase() + el.slice(1);
            }
        break;
        case "Pascal Case":
            let textArr1 = text.toLowerCase().trim().split(" ");
            for (const el of textArr1) {
                result += el[0].toUpperCase() + el.slice(1);
            }
        break;
        default:
            result = "Error!"
        break;
    }
    document.getElementById("result").textContent = result
    // debugger
}