function countZeroes(arr) {
  if (!arr.length || arr[arr.length - 1] === 1) return 0;
  if (arr[0] === 0) return arr.length;
  let res = 0;
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    if (arr[start] === 0) {
      res += end === start ? 1 : end - start;
      break;
    }
    const mid = Math.floor((end + start) / 2);
    if (arr[mid] === 0) {
      res += end - mid;
      end = mid - 1;
    } else if (arr[mid] === 1) start = mid + 1;
  }
  return res;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
