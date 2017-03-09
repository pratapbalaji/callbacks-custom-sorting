var array = [10, 2, 5, 1, 9];
var sorted = array.sort( function (a,b) {
  if (a > b) {return 1};
  if (a < b) {return -1};
  if (a === b) {return 0};
});

console.log(sorted);