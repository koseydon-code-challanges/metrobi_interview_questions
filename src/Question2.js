// 2) Write an async javascript function that writes every item in any given array with 1, 2,
// 4, 8, … seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2
// seconds, “c” is printed in 4 seconds, ...

const arr = ["a", "b", "c", "d"]

async function typeArrayItems(array) {
    async function print(index) {
        setTimeout(() => {
            console.log(index)
        }, Math.pow(2, index) * 1000)
    }

    for (let i = 0; i <= array.length; i++) {
        await print(i)
    }
}