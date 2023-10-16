function cookingRobot() {

    const storage = {
        "protein": 0,
        "carbohydrate": 0,
        "fat": 0,
        "flavour": 0,
    };

    const meals = {
        "apple": ["1 carbohydrate", "2 flavour"],
        "lemonade": ["10 carbohydrate", "20 flavour"],
        "burger": ["5 carbohydrate", "7 fat", "3 flavour"],
        "eggs": ["5 protein", "1 fat", "1 flavour"],
        "turkey": ["10 protein", "10 carbohydrate", "10 fat", "10 flavour"],
    };
    return function manager(inputStr) {
        if (inputStr.includes("restock")) {
            let [command, element, count] = inputStr.split(" ");
            count = Number(count);
            storage[element] += count;
            return "Success";
        }else if(inputStr.includes("prepare")){
            let [command, meal, count] = inputStr.split(" ");
            count = Number(count);
            // TODO
            let dishes = "d".repeat(count);
            let dishesServed = 0;
            for (const dish of dishes) {
                
                // check for enough amount
                let isEnough = true;
                let requiredElements = meals[meal];
                for (const ingredient of requiredElements) {
                    let [amount, kind] = ingredient.split(" ");
                    amount = Number(amount);
                    if (amount > storage[kind]){
                        isEnough = false;
                        return (`Error: not enough ${kind} in stock`);
                        // break;
                    }
                }
            // if enough -- success else error
            if(isEnough){
                for (const ingredient of requiredElements) {
                    let [amount, kind] = ingredient.split(" ");
                    amount = Number(amount);
                    storage[kind] -= amount;
                }
                dishesServed++
                if(dishesServed !== count)
                    continue
            }
            return "Success"
        }// TODO
        }else if(inputStr.includes("report")){
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
        }
    };
}

let manager = cookingRobot()
console.log(manager("restock protein 10"))
console.log(manager("restock protein 10"))
console.log(manager("restock carbohydrate 10"))
console.log(manager("restock carbohydrate 10"))
console.log(manager("restock fat 10"))
console.log(manager("restock fat 10"))
console.log(manager("restock flavour 10"))
console.log(manager("restock flavour 10"))
console.log(manager("prepare turkey 2"))
console.log(manager("report"))
