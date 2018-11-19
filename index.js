// Code your solution in this file
function findMatching(arr, str) {

    let arr2 = arr.filter(word => word.toLowerCase() == str.toLowerCase())
    return arr2
}

function fuzzyMatch(arr, str) {
    
    let arr3 = arr.filter(word => word.startsWith(str))
    return arr3

}

function matchName(obj, str) {
    let arr4 = obj.filter(driver => driver.name == str)
    return arr4


}