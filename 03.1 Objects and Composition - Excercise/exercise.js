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
function carFactory() {
    let i;
}
carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
});