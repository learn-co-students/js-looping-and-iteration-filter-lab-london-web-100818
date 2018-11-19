// Code your solution in this file

function findMatching(array, name){
    return array.filter(function(element){ return element.toLowerCase() == name.toLowerCase()});
}

function fuzzyMatch(array, str){
    return array.filter(function(element){ return element.slice(0,str.length) == str});
}

function matchName(array, name){
    return array.filter(function(element){return element["name"]==name});
}