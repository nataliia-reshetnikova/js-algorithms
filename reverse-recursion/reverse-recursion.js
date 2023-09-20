// function reverse(str) {
//   let res = "";
//   function recursiveReverse(input) {
//     if (input.length === 0) return;
//     res += input[input.length - 1];
//     recursiveReverse(input.slice(0, input.length - 1));
//   }
//   recursiveReverse(str);
//   return res;
// }

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
