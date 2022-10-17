// 5) A building has 100 floors. One of the floors is the highest floor an egg can be dropped
// from without breaking. If an egg is dropped from above that floor, it will break. If it is
// dropped from that floor or below, it will be completely undamaged and you can drop the

function findFloor() {
    const breakingFloor = 99

    function firstCase(){
        for(let i = 0 ; i <= 100; i++) {
            if(i === breakingFloor){
                console.log(`first case number of tries: ${i}`)
                break
            }
        }
    }

    function secondCase() {
        let counter = 0
        let startingFloor = 0
        let previousStartingFloor = 0

        while (startingFloor !== breakingFloor){
            if(startingFloor < breakingFloor){
                previousStartingFloor = startingFloor
                startingFloor += Math.floor((100 - startingFloor) / 2)
                console.log(startingFloor, previousStartingFloor)
                counter++
            } else if (startingFloor > breakingFloor) {
                for(let i = previousStartingFloor ; i <= breakingFloor; i++) {
                    if(i === breakingFloor){
                        break
                    }
                    counter++
                }
                break
            } else {
                break
            }
        }

        console.log(`second case number of tries: ${counter}`)
    }

    function thirdCase() {
        let counter = 0
        let startingFloor = 0
        let previousStartingFloor = 0

        while (startingFloor !== breakingFloor){
            if(startingFloor < breakingFloor){
                previousStartingFloor = startingFloor
                startingFloor += 10
                counter++
            } else if (startingFloor > breakingFloor) {
                for(let i = previousStartingFloor ; i <= breakingFloor; i++) {
                    if(i === breakingFloor){
                        break
                    }
                    counter++
                }
                break
            } else {
                break
            }
        }

        console.log(`third case number of tries: ${counter}`)
    }

    // x(x+1) = 100
    // x = 13.651
    // if we start from 14th floor and add (x-1) floor each time this will give us minimum drops and max drop number will be 14 in the worst case scenario (which is 13)

    function fourthCase() {
        let counter = 0
        let increaseAmount = 13
        let startingFloor = 14
        let previousStartingFloor = 0

        while (startingFloor !== breakingFloor){
            console.log(startingFloor, previousStartingFloor)
            if(startingFloor < breakingFloor){
                previousStartingFloor = startingFloor
                startingFloor = startingFloor + increaseAmount
                increaseAmount--
                counter++
            } else if (startingFloor > breakingFloor) {
                for(let i = previousStartingFloor ; i <= breakingFloor; i++) {
                    if(i === breakingFloor){
                        break
                    }
                    counter++
                }
                break
            } else {
                break
            }
        }

        console.log(`fourth case number of tries: ${counter}`)
    }
}