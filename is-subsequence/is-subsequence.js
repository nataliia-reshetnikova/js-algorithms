//multiple pointers
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (str1.length === i) return true;
    j++;
  }
  return false;
}

//isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("bac", "acb")); // false (order matters)
