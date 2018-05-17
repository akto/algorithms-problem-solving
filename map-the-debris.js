console.clear();
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447,
      result = [];
  arr.map(function(e){
    let formula = Math.round( 2*Math.PI*Math.sqrt( Math.pow( (earthRadius+e.avgAlt),3)/GM ) );
    delete e.avgAlt;
    e.orbitalPeriod = formula;
    result.push(e);
  });
  console.log( result );
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
//should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
