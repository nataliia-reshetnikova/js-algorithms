class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  //handling collision with chaining
  set(key, val) {
    const hashed = this._hash(key);
    if (!this.keyMap[hashed]) this.keyMap[hashed] = [];
    this.keyMap[hashed].push([key, val]);
    return this.keyMap;
  }
  get(key) {
    const hashed = this._hash(key);
    if (this.keyMap[hashed]) {
      for (let keyValArr of this.keyMap[hashed]) {
        if (keyValArr[0] === key) return keyValArr[1];
      }
    }
  }
  keys() {
    let keys = new Set();
    for (let keyValArr of this.keyMap) {
      if (keyValArr) {
        for (let item of keyValArr) keys.add(item[0]);
      }
    }
    return keys;
  }
  //returns only unique values
  values() {
    let values = new Set();
    for (let keyValArr of this.keyMap) {
      if (keyValArr) {
        for (let item of keyValArr) values.add(item[1]);
      }
    }
    return values;
  }
}

let hashT = new HashTable(11);
hashT.set("pink", "#FFC0CB");
hashT.set("lyft pink", "#FF00BF");
hashT.set("zero", "0");
hashT.set("second zero", "0");
hashT.set("one", "1");
console.log(hashT);
console.log(hashT.get("pink"));
console.log(hashT.get("one"));
console.log(hashT.get("two"));
console.log(hashT.keys());
console.log(hashT.values());
