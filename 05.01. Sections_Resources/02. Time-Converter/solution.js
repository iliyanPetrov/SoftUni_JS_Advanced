function attachEventsListeners() {
    const buttonsArr = Array.from(
        document.querySelectorAll("input[type=button]")
    ).forEach((btn) => btn.addEventListener("click", clickHandler));
    const inputsArr = Array.from(document.querySelectorAll('input[type=text]'));
    debugger
    function clickHandler(e){
        const numValue = Number(e.target.previousElementSibling.value);
        const unit = e.target.previousElementSibling.id;
        switch (unit){
            case "days": calcValues(numValue); break;
            case "hours": calcValues(numValue / 24); break;
            case "minutes": calcValues(numValue / 24 / 60); break;
            case "seconds": calcValues(numValue / 24 / 60 / 60); break;
        }
    }
    function calcValues(value){
        inputsArr[0].value = value;
        inputsArr[1].value = value*24;
        inputsArr[2].value = value*24*60;
        inputsArr[3].value = value*24*60*60;
    }
}