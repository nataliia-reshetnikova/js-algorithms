function collectStrings(obj) {
  let arr = [];
  function helperFn(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key].constructor === Object) {
        return helperFn(obj[key]);
      } else if (typeof obj[key] === "string") arr.push(obj[key]);
    }
  }
  helperFn(obj);
  return arr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
