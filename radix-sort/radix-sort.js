/* getDigit(num, place) - returns the digit in num at the given place value */

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/*digitCount(num) - returns the number of digits in num*/
function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/*mostDigits(nums) - Given an array of numbers, 
returns the number of digits in the largest numbers in the list*/
function mostDigits(nums) {
  let max = 0;
  for (let n of nums) max = Math.max(digitCount(n), max);
  return max;
}

function radixSort(nums) {
  let max = mostDigits(nums);
  for (let i = 0; i < max; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let val of nums) {
      buckets[getDigit(val, i)].push(val);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

//testing helpers
//console.log(digitCount(-12)); //2
//console.log(digitCount(123)); //3
//console.log(mostDigits([1, -9, 234, 9487594])); //7

console.log(radixSort([1, 9, 234, 9487594, 0, 14, 2, 12]));
