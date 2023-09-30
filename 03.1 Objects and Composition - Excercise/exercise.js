//      == 1 ==
// function calorieObject(data) {
//     const obj = {};
    
//     for (let i=0; i<data.length; i+=2){
//         const key = data[i];
//         const value = data[i+1];
//         obj[key] = +value;
//     }
//     console.log(obj)
// }
// calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
//-------------------------^^Ready


//      == 2 ==
// function constructionCrew(data){
//     const obj = {...data};
//     if (obj.dizziness){
//         const requiredAmount = 0.1*obj.weight*obj.experience;
//         obj.levelOfHydrated += requiredAmount;
//         obj.dizziness = false;
//     }
//     // console.log(obj)
//     return obj;
// }

// constructionCrew({
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true,
// });
//-------------------------^^Ready


//      == 3 ==
// function carFactory(input) {

//     let power = input.power;
//     let carType = input.carriage;
//     let carCoupe = input.color;
//     let sizeCheck = input.wheelsize;
//     let wheels = sizeCheck % 2 !== 0 ? sizeCheck : sizeCheck-1;

//     let result = {
//         "model": `${input.model}`,
//         "engine": {
//             "power": (power <= 90 ? 90 : power <= 120 ? 120 : 200),
//             "volume": (power<= 90 ? 1800 : power <= 120 ? 2400 : 3500)
//         },
//         "carriage": {
//             "type": carType,
//             "color": carCoupe
//         },
//         "wheels": [wheels, wheels, wheels, wheels]
//     }
//     // console.table(result)
//     return result;
// }
// carFactory({
//     model: "VW Golf II",
//     power: 90,
//     color: "blue",
//     carriage: "hatchback",
//     wheelsize: 14,
// });
//-------------------------^^Ready


//      == 4 ==
// function heroInventory(inputArr){
//     let result = [];
//     for (const line of inputArr) {
//         let [name, level, items] = line.split(" / ");
//         // console.log(`name=${name}, level=${level}, items=${items}`)
//         level = Number(level);
//         items = items ? items.split(', ') : [];
//         // console.log(items)
//         result.push({ name, level, items });
//     }
//     console.log(JSON.stringify(result))
// }

// heroInventory([
//     "Isacc / 25 / Apple, GravityGun",
//     "Derek / 12 / BarrelVest, DestructionSword",
//     "Hes / 1 / Desolator, Sentinel, Antara",
// ]);
// heroInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
//-------------------------^^Ready


//      == 5 ==
// function lowestPriceInTown(inputArr) {
//     let result = new Map();
    
//     for (const element of inputArr) {
//         let [town, product, price] = element.split(' | ');
//         price = Number(price);
//         if (!result.has(product)) {
//             result.set(product, {town, price});
//         }
//         let lowestPrice = result.get(product).price;
//         if (lowestPrice > price) {
//             result.set(product, {town, price})
//         }
//     }
//     for (const [key, value] of result) {
//         const product = key;
//         const town = value.town;
//         const price = value.price
//         console.log(`${product} -> ${price} (${town})`);
//     }
// }
// lowestPriceInTown([
//     "Sofia City | BMW | 100000",
//     "Sofia City | Audi | 100000",
//     "Sofia City | Mitsubishi | 10000",
//     "Sofia City | Mercedes | 10000",
//     "Sofia City | NoOffenseToCarLovers | 0",
//     "Mexico City | Audi | 1000",
//     "Mexico City | BMW | 99999",
//     "Mexico City | Mitsubishi | 10000",
//     "New York City | Mitsubishi | 1000",
//     "Washington City | Mercedes | 1000",
// ]);
//-------------------------^^Ready


//      == 6 ==
function storeCatalogue(input){

    let i;
}

storeCatalogue()
// storeCatalogue()