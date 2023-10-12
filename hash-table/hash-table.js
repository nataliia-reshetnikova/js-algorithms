class HashTable {
  constructor(size) {
    this._storage = new Array(size).fill(0);
    this._size = size;
    this._inputSize = 0;
  }
  // insert a new key-value pair
  //@param {string} a key
  //@param {*} the value to insert
  //O(1)
  insert(key, val) {
    let index = this._hash(key, this._size);
    if (!this._storage[index]) {
      //not empty, handle collision
      this._storage[index] = [];
    }
    //if the internal array already has a key, we need to update a val
    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === key) {
        this._storage[index][i][1] = val;
        return;
      }
    }
    this._storage[index].push([key, val]);
    this._inputSize++;
    if (this._inputSize > Math.ceil(this._size / 2)) this.resize();
  }

  //deletes a key-value pair
  //@param {string} key assosiated with the value
  //@return {*} deleted value
  remove(key) {
    let index = this._hash(key, this._size);
    let deleted;
    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === key) {
        this._inputSize--;
        return this._storage[index].splice(i, 1)[0][1];
      }
    }
    return deleted;
  }

  //returns the value assosiated with the key
  //@param {string} key to search for
  //@return {*} value
  //complexity O(n)
  retrive(key) {
    let index = this._hash(key, this._size);
    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === key) {
        return this._storage[index][i][1];
      }
    }
    return;
  }

  //hashes string value into an integer that can be mapped to the array index
  //@param {string} str string to be hashed
  //@param {number} n - length of the storage array
  //@return {number} - the integer between 0 and n
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }
    return sum % n;
  }
  print() {
    console.log(JSON.stringify(this));
  }
  resize() {
    //todo: if hash table  storage reach 50% of capacity, double the size
    //do I need to rehash all the values
    this._size *= 2;
    //how to distribute items after resize
    // this._storage.flatMap((val) => {
    //   if (val) this.insert(val[0], val[1]);
    // });
  }
}

let myHashTable = new HashTable(5);
//[[],[],[],[],[],[],[],[],[],[]]
myHashTable.insert("zero", 0); //hashes to 4
myHashTable.insert("one", 1); //hashes to 6
myHashTable.insert("one", 5); //hashes to 6
myHashTable.insert("one", 4); //hashes to 6
//[['zero',0],['one',1],,,,,,,,]
myHashTable.print();
console.log(myHashTable.remove("two")); //undefined
myHashTable.print();
console.log(myHashTable.remove("zero")); //0
console.log(myHashTable.remove("one")); //4
myHashTable.print();
myHashTable.insert("three", 3);
myHashTable.insert("four", 4);
myHashTable.print();
console.log(myHashTable.retrive("three")); //3
console.log(myHashTable.retrive("zero")); //undefined
