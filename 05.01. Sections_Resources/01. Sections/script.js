function create(words) {
    const mainDiv = document.querySelector("#content");
    function clickHandler(event){
        event.currentTarget.firstElementChild.style.display = "block"
    }
    for (const word of words) {
        const pTag = document.createElement("p");
        const divTag = document.createElement("div");
        pTag.textContent = word;
        pTag.style.display = "none";
        divTag.addEventListener("click", clickHandler)
        divTag.appendChild(pTag);
        mainDiv.appendChild(divTag);
    }
}
