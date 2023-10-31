function findRotatedIndex(arr, num) {
  if (!arr.length) return -1;
  let low = 0;
  let high = arr.length;
  //find pivot
  let pivot;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    //check every element on the left if it is higher than prev
    let ind = mid;
    while (ind > low) {
      if (arr[ind - 1] > arr[ind]) {
        pivot = ind;
        break;
      } else ind--;
    }
    if (pivot) break;
    else low = mid;
  }
  //perform binary search on left subbarray and on right subbarray
  if (num > arr[pivot - 1]) return -1;
  if (num === arr[pivot]) return pivot;
  //search only left
  if (num > arr[arr.length - 1]) return search(arr.slice(0, pivot), num);
  //search only right
  let res = search(arr.slice(pivot), num);
  return res === -1 ? -1 : res + pivot;
}

function search(arr, n) {
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] === n) return mid;
    if (arr[mid] > n) {
      end = mid - 1;
    } else start = mid + 1;
  }
  return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
