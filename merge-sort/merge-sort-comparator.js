/*
The comparator function is a callback that will take two values from the array
to be compared. The function returns a negative value if the first value is 
less than the second, a positive value if the first value is greater than the
 second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters are 
numbers and that we are sorting the values from smallest to largest.
*/
function merge(arr1, arr2, comparator) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (
      (!comparator && arr1[i] < arr2[j]) ||
      (!!comparator && comparator(arr1[i], arr2[j]) < 0)
    ) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) merged.push(...arr1.slice(i));
  if (j < arr2.length) merged.push(...arr2.slice(j));
  console.log(merged);
  return merged;
}

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}
