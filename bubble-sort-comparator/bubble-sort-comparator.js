function bubbleSort(arr, comparator) {
  if (!!comparator && typeof comparator !== "function")
    throw Error("comparator should be a function");

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (
        (!!comparator && comparator(arr[i], arr[i + 1]) > 0) ||
        (!comparator && arr[i] > arr[i + 1])
      ) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped && arr.length > 1);
  console.log(arr);
  return arr;
}

bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);
