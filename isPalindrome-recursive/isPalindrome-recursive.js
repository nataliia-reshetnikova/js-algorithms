function isPalindrome(str) {
  if (str.length < 2) return;
  if (str[0] === str[str.length - 1]) {
    isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
  return true;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
