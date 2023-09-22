<h2>collectStrings</h2>
<p>Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string</p>

<h4>Examples:</h4>

```
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
```
