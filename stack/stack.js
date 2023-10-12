class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }
  //@return removed value from the top of the stack
  pop() {
    if (this._length) {
      const val = this._storage[this._length - 1];
      delete this._storage[this._length - 1];
      this._length--;
      return val;
    }
  }
  //@param({*}) adds a new value at the end of the stack
  push(val) {
    this._storage[this._length] = val;
    this._length++;
  }
  //@return the last and newest item on the stack
  peek() {
    return this._storage[this._length - 1];
  }
}
//visualizing stack {0:'zero',1:'one',2:'two'}
let myStack = new Stack();
myStack.push("zero");
myStack.push("one");
myStack.push("two");
//console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
//console.log(myStack);
console.log(myStack.peek());
