// Code your solution in this file

const findMatching = (arr, driver) => {
    return arr.filter(name => name.toLowerCase() ===  driver.toLowerCase())
}

const fuzzyMatch = (arr, driver) => {
    let newArray = arr.filter(name => name[0]=== driver[0] && name[1] === driver[1]);
    return newArray;
}

const matchName = (arr, driver) => {
  let newObj = []
    for (const i of arr){
      if (i.name === driver){
        newObj.push(i)
        }
    }
    console.log(newObj)
    return newObj
}
