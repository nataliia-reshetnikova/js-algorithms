function sameFrequency(num1, num2) {
  let str1 = `${num1}`;
  let str2 = `${num2}`;
  if (str1.length != str2.length) {
    return false;
  }
  let frequency1 = {};
  let frequency2 = {};
  for (let char of str1) {
    frequency1[char] = (frequency1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }
  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
