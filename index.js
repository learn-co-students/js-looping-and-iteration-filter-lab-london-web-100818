// Code your solution in this file
function findMatching(drivers, name) {
  const match = drivers.filter(function(element) {
    return element.toLowerCase() === name.toLowerCase()
  });
  return match;
};

function fuzzyMatch(drivers, letters) {
  const match = drivers.filter(function(element) {
    return element.slice(0, 2) === letters
  });
  return match;
};

function matchName(drivers, name) {
  const match = drivers.filter(function(element) {
    return element['name'] === name
  });
  return match;
};