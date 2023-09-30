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
// function storeCatalog(inputArr){

//     let result = {};

//     for (const element of inputArr) {
//         let [productName, price] = element.split(' : ');
//         price = +price;
//         // console.log(productName, price)
//         const firstLetter = productName[0]
//         // console.log(firstLetter)
//         if(!result.hasOwnProperty(firstLetter)){
//             result[firstLetter] = [];
//         }
//         result[firstLetter].push(`${productName}: ${price}`);
//     }

//     const resKeys = Object.keys(result).sort();
//     // console.log(resKeys)
//     for (const letter of resKeys) {
//         console.log(letter);
//         for (const element of result[letter].sort()) {
//             console.log(`  ${element}`)
//         }
//     }
// }
// storeCatalog([
//     "Appricot : 20.4",
//     "Fridge : 1500",
//     "TV : 1499",
//     "Deodorant : 10",
//     "Boiler : 300",
//     "Apple : 1.25",
//     "Anti-Bug Spray : 15",
//     "T-Shirt : 10",
// ]);
// storeCatalog([
//     "Banana : 2",
//     "Rubic's Cube : 5",
//     "Raspberry P : 4999",
//     "Rolex : 100000",
//     "Rollon : 10",
//     "Rali Car : 2000000",
//     "Pesho : 0.000001",
//     "Barrel : 10",
// ]);
//-------------------------^^Ready


//      == 7 ==
// function townsToJSON(inputArr){

//     let result = [];
//     let [townField, latitudeField, longitudeField] = inputArr.shift().match(/[a-zA-Z]+/g);

//     for (const line of inputArr) {
//         const [town, latitude, longitude] = line.slice(2, line.length - 2).split(' | ');
//         result.push({
//             [`${townField}`]: town,
//             [`${latitudeField}`]: +Number(latitude).toFixed(2),
//             [`${longitudeField}`]: +Number(longitude).toFixed(2)
//         })
//     }
//     return JSON.stringify(result)
//     // console.log(JSON.stringify(result))
// }

// // townsToJSON([
// //     "| Town | Latitude | Longitude |",
// //     "| Sofia | 42.696552 | 23.32601 |",
// //     "| Beijing | 39.913818 | 116.363625 |",
// // ]);
// townsToJSON([
//     '| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |'
//   ])
//-------------------------^^Ready


//      == 8 ==
// function rectangle(width, height, color){
//     color = color[0].toUpperCase() + color.slice(1)
//     let result = {
//         width,
//         height,
//         color,
//         calcArea: function() {
//             return this.width * this.height
//         }
//     }
//     return result
// }
// let rect = rectangle(4, 5, "red");
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());
//-------------------------^^Ready


//      == 10 ==
function heroes() {
    return {
        mage: function (name) {
            return {
                name,
                health: 100,
                mana: 100,
                cast: function (spellName) {
                    this.mana -= 1;
                    console.log(`${this.name} cast ${spellName}`);
                },
            };
        },
        fighter: function (name) {
            return {
                name,
                health: 100,
                stamina: 100,
                fight: function () {
                    this.stamina -= 1;
                    console.log(`${this.name} slashes at the foe!`);
                },
            };
        },
    };
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);