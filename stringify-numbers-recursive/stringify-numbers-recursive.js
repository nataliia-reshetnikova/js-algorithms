function stringifyNumbers(object) {
  let obj = Object.assign({}, object);
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key].constructor === Object)
      obj[key] = stringifyNumbers(obj[key]);
    if (typeof obj[key] === "number") obj[key] = obj[key].toString();
  }
  return obj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
