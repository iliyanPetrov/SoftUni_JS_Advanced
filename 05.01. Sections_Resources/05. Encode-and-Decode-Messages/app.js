function encodeAndDecodeMessages() {

    const buttonsArr = Array.from(document.querySelectorAll('button'));
    const btnEncode = buttonsArr[0];
    const btnDecode = buttonsArr[1];

    btnEncode.addEventListener("click", encodeHandler);
    btnDecode.addEventListener("click", decodeHandler);

    function encodeHandler(e){
        const textArea = e.target.previousElementSibling;
        const textMsg = e.target.previousElementSibling.value;
        if(!textMsg) return;
        let codedMsg = "";
        for (const letter of textMsg) {
            const letterCode = letter.charCodeAt(0);
            codedMsg += String.fromCharCode(letterCode + 1);
        }
        btnDecode.previousElementSibling.value = codedMsg;
        textArea.value = ""
    }

    function decodeHandler(e){
        const textArea = e.target.previousElementSibling;
        const textMsg = e.target.previousElementSibling.value;
        if(!textMsg) return;
        let realMsg = "";
        for (const letter of textMsg) {
            const letterCode = letter.charCodeAt(0);
            realMsg += String.fromCharCode(letterCode - 1);
        }
        textArea.value = realMsg
    }
}