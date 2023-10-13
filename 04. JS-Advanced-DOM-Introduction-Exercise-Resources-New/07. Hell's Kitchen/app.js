function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    const restaurants = new Map();
    function onClick () {
        const inputArr = JSON.parse(document.querySelector('textarea').value);
        for (const line of inputArr) {
            let [restaurantName, workersStr] = line.split(' - ');
            let workersArr = workersStr.split(', ');
            if(!restaurants.has(restaurantName)){
                restaurants.set(restaurantName, workersArr);
            }else{
                let oldWorkers = restaurants.get(restaurantName);
                let addedWorkers = oldWorkers.concat(workersArr);
                restaurants.set(restaurantName, addedWorkers);
            }
        }
        let bestRes = '';
        let higAvgSalary = 0;
        for (const [name, value] of restaurants) {
            let sumSal = value.reduce((acc, curr) => {
                return acc + Number(curr.split(" ")[1]);
            }, 0);
            const avgSal = sumSal / value.length;
            if (higAvgSalary<avgSal){
                higAvgSalary = avgSal;
                bestRes = name;
            }
        }
        const sortedWorkers = restaurants.get(bestRes).sort((a, b) => {
            let salA = Number(a.split(" ")[1]);
            let salB = Number(b.split(" ")[1]);
            return salB - salA;
        });
        let bestWorkSal = Number(sortedWorkers[0].split(" ")[1]);
        let workersArrStr = ""
        for (const el of sortedWorkers) {
            const [name, salary] = el.split(' ')
            workersArrStr += `Name: ${name} With Salary: ${salary} `
        }
        // DISPLAY RESULTS
        document.querySelector('#bestRestaurant p')
        .textContent = `Name: ${bestRes} Average Salary: ${higAvgSalary.toFixed(2)} Best Salary: ${bestWorkSal.toFixed(2)}`
        document.querySelector('#workers p')
        .textContent = workersArrStr.trim();
   }
}
