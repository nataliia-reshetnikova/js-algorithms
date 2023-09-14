//Set stores only unique values and can be used to remove duplicates in iterables
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

//frequency counter
function areThereDuplicates() {
  let frequencies = {};
  for (let i of arguments) {
    frequencies[i] = (frequencies[i] || 0) + 1;
    if (frequencies[i] > 1) return true;
  }
  return false;
}

//multiple pointers
function areThereDuplicates() {
  //sort first
  let arr = [...arguments].sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
  });
  let start = 0;
  let next = 1;
  while (next < arr.length) {
    if (arr[start] === arr[next]) {
      return true;
    } else {
      start++;
      next++;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
