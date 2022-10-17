// 4) Write an efficient method that tells us whether or not an input string brackets ("{", "}",
// "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
// “{([)]}” => false

function checkBrackets(input) {
    const brackets = [
        {
            type: 1,
            opening: "{",
            closing: "}"
        },
        {
            type: 2,
            opening: "(",
            closing: ")"
        },
        {
            type: 3,
            opening: "[",
            closing: "]"
        },
    ]

    let inputArray = input.split("")

    let inputBrackets = inputArray.filter(x => brackets.some(bracket => bracket.opening === x || bracket.closing === x))

    const openingBrackets = brackets.map(x => x.opening)

    const result = inputBrackets.reduce((acc, current) => {
        console.log(acc)
        let lastOpeningBracketIndex = 0

        acc.forEach((x, index) => {
            if (openingBrackets.includes(x)) {
                lastOpeningBracketIndex = index
            }
        })

        const selectedBracket = brackets.find(bracket => bracket.opening === acc[lastOpeningBracketIndex])

        if (selectedBracket?.closing === acc[lastOpeningBracketIndex + 1]) {
            acc.splice(lastOpeningBracketIndex, 2)
        }

        return acc
    }, [...inputBrackets])

    console.log(!result.length)
}