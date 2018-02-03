
function sym(args) {
  return args;
}

console.clear();
console.time();

sym([1, 2, 3], [5, 2, 1, 4]); //should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]); //should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should contain only eight elements.

console.timeEnd();