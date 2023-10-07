function search() {

    let searchTerm = document.getElementById("searchText").value;
    let liItems = Array.from(document.querySelectorAll("#towns li"));
    let count = 0;
    liItems.forEach(el => {
        if (el.textContent.includes(searchTerm)){
            el.style.textDecoration = "underline";
            el.style.fontWeight = "bold";
            count++
        }else{
            el.style.textDecoration = "none";
            el.style.fontWeight = "";
        }
    })
    document.querySelector('#result').textContent = `${count} matches found`
}
