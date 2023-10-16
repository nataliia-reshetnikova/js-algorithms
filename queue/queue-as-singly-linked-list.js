class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) this.first = this.last = newNode;
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (this.size === 0) return null;
    const removed = this.first;
    if (this.size === 1) this.first = this.last = null;
    else this.first = this.first.next;
    this.size--;
    return removed.val;
  }
  print() {
    let cur = this.first;
    let arr = [];
    for (let i = 0; i < this.size; i++) {
      arr.push({ val: cur.val, next: cur.next });
      cur = cur.next;
    }
    console.log(arr);
  }
}

let myQ = new Queue();
myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.print();
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ.dequeue());
myQ.print();
