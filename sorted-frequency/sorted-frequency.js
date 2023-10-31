function sortedFrequency(arr, n) {
  if (!arr.length) return -1;
  let start = 0;
  let end = arr.length;
  let count = -1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] < n) {
      start = mid + 1;
    } else if (arr[mid] > n) {
      end = mid - 1;
    } else {
      //we found subbarray
      //check to the left of mid
      let right = mid;
      let left = mid;
      while (arr[right] === n && right >= start) {
        right--;
        count++;
      }
      while (arr[left] === n && left <= end) {
        left++;
        count++;
      }
      break;
    }
  }
  return count;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
