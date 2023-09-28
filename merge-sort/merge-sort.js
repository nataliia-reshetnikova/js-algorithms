function mergeArr(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) merged.push(...arr1.slice(i));
  if (j < arr2.length) merged.push(...arr2.slice(j));
  return merged;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArr(left, right);
}

//console.log(mergeArr([-2, 13, 15, 99], [0, 1, 13]));
//console.log(mergeArr([], [0, 1, 13]));
console.log(mergeSort([-4, -15, 0, 24, 55, 1, 2, 4]));
