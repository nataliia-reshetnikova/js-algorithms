//using Set that accept only unique values
function countUniqueValues(arr) {
  return new Set(arr).size;
}

//multiple pointers solution
//accumulate unique values at the beginning of array while going till the end
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let start = 0;
  let current = 1;
  while (current < arr.length) {
    if (arr[current] === arr[start]) {
      current++;
    } else {
      start++;
      arr[start] = arr[current];
    }
  }
  return start + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
