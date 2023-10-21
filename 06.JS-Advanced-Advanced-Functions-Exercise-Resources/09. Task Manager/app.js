function solve() {
    const taskRef = document.querySelector("#task");
    const descriptionRef = document.querySelector("#description");
    const dateRef = document.querySelector("#date");

    const sections = document.querySelectorAll("section");
    const openSection = sections[1];
    const inProgressSection = sections[2].querySelector("#in-progress");
    const completeSection = sections[3].querySelectorAll("div")[1];

    const formRef = document.querySelector("form");
    formRef.addEventListener("submit", submitHandler);

    function submitHandler(e) {
        e.preventDefault();
        let taskValue = taskRef.value;
        let descriptionValue = descriptionRef.value;
        let dateValue = dateRef.value;

        if (!taskValue || !descriptionValue || !dateValue) {
            return;
        }
        let newArticle = createArticle(taskValue, descriptionValue, dateValue);
        openSection.lastElementChild.appendChild(newArticle);
        taskRef.value = "";
        descriptionRef.value = "";
        dateRef.value = "";
    }

    function createArticle(taskName, taskDescription, taskDate) {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = taskName;
        article.appendChild(h3);
        let p1 = document.createElement("p");
        p1.textContent = "Description: " + taskDescription;
        article.appendChild(p1);
        let p2 = document.createElement("p");
        p2.textContent = "Due Date: " + taskDate;
        article.appendChild(p2);
        let div = document.createElement("div");
        div.setAttribute("class", "flex");
        let btn1 = document.createElement("button");
        btn1.addEventListener("click", startHandler);
        btn1.setAttribute("class", "green");
        btn1.textContent = "Start";
        div.appendChild(btn1);
        let btn2 = document.createElement("button");
        btn2.setAttribute("class", "red");
        btn2.addEventListener("click", deleteHandler)
        btn2.textContent = "Delete";
        div.appendChild(btn2);
        article.appendChild(div);
        return article;
    }

    function startHandler(event) {
        const createdTask = event.currentTarget.parentElement.parentElement;
        inProgressSection.appendChild(createdTask);
        const buttons = createdTask.querySelectorAll("button");
        const btn1 = buttons[0];
        btn1.textContent = "Delete";
        btn1.className = "red"
        btn1.removeEventListener("click", startHandler);
        btn1.addEventListener("click", deleteHandler);
        const btn2 = buttons[1];
        btn2.textContent = "Finish";
        btn2.className = "orange"
        btn2.removeEventListener("click", deleteHandler);
        btn2.addEventListener("click", finishHandler);

    }

    function finishHandler(event){
        const createdTask = event.currentTarget.parentElement.parentElement;
        completeSection.appendChild(createdTask);
        createdTask.lastElementChild.remove()
        debugger

    }

    function deleteHandler(event){
        event.currentTarget.parentElement.parentElement.remove()
    }
}
