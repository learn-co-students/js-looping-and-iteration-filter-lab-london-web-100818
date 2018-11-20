// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (n) {return n.toLowerCase() == name.toLowerCase()})
}    

function fuzzyMatch(drivers, partial) {  
    return drivers.filter(function (name) {return name.slice(0, (partial.length)) === partial})
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}