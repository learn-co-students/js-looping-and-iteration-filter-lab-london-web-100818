function findMatching(drivers,name) {
return drivers.filter(function (driverName) {
return driverName.toLowerCase() === name.toLowerCase();});
}

function fuzzyMatch(drivers,letters) {
  return drivers.filter(function (driverName){
  return driverName.slice(0,letters.length).toLowerCase()===letters.toLowerCase();
});
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
