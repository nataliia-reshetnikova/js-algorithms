//if the array is nearly sorted, we break out of the loops if no swaps were made
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = true;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([9, -15, 4, 33, 100, 2, 5, 6, 6, 18]));
