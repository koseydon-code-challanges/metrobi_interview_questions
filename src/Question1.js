// 1) Write a javascript function that finds the duplicate items in any given array.

const arr = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9]

function findDuplicates(array) {
    // Old Code:

    // let duplicates = array
    // const uniqueItems = [...new Set(array)]

    // uniqueItems.forEach(item => {
    //     duplicates.splice(array.indexOf(item), 1)
    // })

    // return duplicates

    return array.filter((item, index) => array.indexOf(item) !== index)
}