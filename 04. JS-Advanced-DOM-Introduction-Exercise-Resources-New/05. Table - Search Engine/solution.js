function solve() {
    document.querySelector("#searchBtn").addEventListener("click", onClick);

    function onClick() {
        let searchText = searchTerm.value;
        for (const row of tableRow) {
            let tableData = Array.from(row.querySelectorAll("td"));
            for (const td of tableData) {
                if (td.textContent.includes(searchText)) {
                    row.classList.add("select");
                    break;
                }else{
                    row.classList.remove("select")
                }
            }
        }
        searchTerm.value = ''
    }
    let searchTerm = document.querySelector("#searchField");
    let tableRow = Array.from(document.querySelectorAll("tbody tr"));
}
