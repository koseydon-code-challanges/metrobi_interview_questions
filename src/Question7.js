// 7) Think that you have an unlimited number of carrots, but a limited number of carrot
// types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
// weight and a price. Write a function that takes carrotTypes and capacity and return the
// maximum value the bag can hold. [Python or Javascript]
// Example:
carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
capacity = 36 //kg
// getMaxValue(carrotTypes, capacity)

function getMaxValue(carrotTypes, capacity) {
    // Old Code
    // let maxValue = 0
    // let tempCarrotType = [...carrotTypes]
    // // This gets maximum value of per kg
    // let maxValuesPerKg = carrotTypes.map(type => type.price / type.kg)
    //
    // let maxValueCarrotType = carrotTypes[maxValuesPerKg.indexOf(Math.max(...maxValuesPerKg))]
    //
    // carrotTypes.reduce((acc, cur) => {
    //     let maxValuedKg = maxValueCarrotType.kg
    //     if(acc >= maxValueCarrotType.kg) {
    //         maxValue += Math.trunc(acc / maxValueCarrotType.kg) * maxValueCarrotType.price
    //     }
    //
    //     // these functions remove calculated type of carrots and recalculate remaining carrots
    //     tempCarrotType.splice(tempCarrotType.indexOf(maxValueCarrotType), 1)
    //     maxValuesPerKg.splice(tempCarrotType.indexOf(maxValueCarrotType), 1)
    //     maxValuesPerKg = tempCarrotType.map(type => type.price / type.kg)
    //     maxValueCarrotType = tempCarrotType[maxValuesPerKg.indexOf(Math.max(...maxValuesPerKg))]
    //
    //     return acc % maxValuedKg
    // }, capacity)
    //
    // return maxValue

    const tempArr = new Array(capacity + 1).fill(0)


    const carrotWeights = carrotTypes.map(type => type.kg)
    const carrotPrices = carrotTypes.map(type => type.price)

    console.log(tempArr)


    for(let i = 0; i <= capacity; i++){
        for(let j = 0; j < carrotTypes.length; j++){
            if(carrotWeights[j] <= i){
                // console.log(tempArr[i], tempArr[i - carrotWeights[j]] + carrotPrices[j])
                tempArr[i] = Math.max(tempArr[i], tempArr[i - carrotWeights[j]] + carrotPrices[j])
            }
        }
    }

    console.log(tempArr)


    return tempArr[capacity]
}

console.log(getMaxValue([{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}], 37))