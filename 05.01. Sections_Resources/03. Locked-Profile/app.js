function lockedProfile() {
    const buttonsRef = Array.from(document.querySelectorAll('button'));
    for (const element of buttonsRef) {
        element.addEventListener("click", handleShowMore);
    }
    function handleShowMore(e){
        const button = e.target
        const unlocked = e.target.parentElement.querySelector('input[value=unlock]').checked;
        const hiddenDiv = e.target.previousElementSibling;
        
        if(unlocked && button.textContent == "Show more"){
            hiddenDiv.style.display = "block";
            button.textContent = "Hide it";
        }else if(unlocked && button.textContent == "Hide it"){
            hiddenDiv.style.display = "none";
            button.textContent = "Show more";
        }
    }
    const radioInputRef = document.querySelector('input[value=unlock]');
}