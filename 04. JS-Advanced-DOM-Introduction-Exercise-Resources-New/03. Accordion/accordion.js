function toggle() {
    let btn = document.getElementsByClassName("button")[0];
    btn.textContent = btn.textContent == "More" ? 'Less' : "More";
    // debugger
    let text = document.getElementById("extra");
    if (text.style.display == "")
    text.style.display = 'none'
    text.style.display = text.style.display == "none" ? "block" : "none";
}