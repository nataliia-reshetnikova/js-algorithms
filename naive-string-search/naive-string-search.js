function naiveStringSearch(str, substr) {
  let match = 0;
  for (let i = 0; i < str.length; i++) {
    for (let y = 0; y < substr.length; y++) {
      if (substr[y] !== str[y + i]) break;
      if (y === substr.length - 1) match++;
    }
  }
  return match;
}

console.log(naiveStringSearch("harold said haha in hamburg", "ha")); //4
console.log(naiveStringSearch("harold said haha in hamburg", "mom")); //0
console.log(naiveStringSearch("harold said haha in hamburg", "burg")); //1
console.log(naiveStringSearch("harold said haha in hamburg", "i")); //2
