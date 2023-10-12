class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headInd = 0;
  }
  //add an element to the queue
  //@param {*} the value to enqueu
  enqueue(val) {
    this._storage[this._length + this._headInd] = val;
    this._length++;
  }
  //removes and returns the oldest element from the queue
  dequeue() {
    if (this._length) {
      let oldestEl = this._storage[this._headInd];
      delete this._storage[this._headInd];
      this._length--;
      this._headInd++;
      return oldestEl;
    }
  }
  //@return the first and oldest element
  peek() {
    if (this._length) {
      return this._storage[this._length + this._headInd];
    }
  }
}

let queue = new Queue();
queue.enqueue("one");
queue.enqueue("two");
console.log(queue);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.enqueue("three"));
console.log(queue);
console.log(queue.enqueue("four"));
console.log(queue.dequeue());
console.log(queue);
