//going to track current sum of subarray with a sliding window approach
//each iteration to reduce number of operations, we will deduct and add subarray edge elements
/*
for example
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
currentSum = 1+4+2+10 (17) [1,4,2,10]
in a loop:
1st) 17 - 1 + 23 (39), i = 4 [4,2,10,23]
2nd)  39 - 4 + 3 (38), i = 5 [2,10,23,3]
3rd) 38 - 2 + 1 (37), i = 6 [10,23,3,1]
4th) 37 - 10 + 0 (27), i = 7 [23,3,1,0]
5th) 27 - 23 + 20 (24), i = 8 [3,1,0,20]
*/
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let currentSum = arr.slice(0, num).reduce((acc, cur) => acc + cur);
  let maxSum = currentSum;
  for (let i = num; i < arr.length; i++) {
    currentSum = currentSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
