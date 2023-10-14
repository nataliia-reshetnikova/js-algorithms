class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null; //head of the list
    this.last = null; //tail of the list
    this.length = 0;
  }
  //pushing into stack from the head
  push(val) {
    let newNode = new Node(val);
    if (this.first === null) this.first = this.first = newNode;
    let oldHead = this.first;
    this.first = newNode;
    this.first.next = oldHead;
    return ++this.length;
  }
  //popping from the stack from the head to maintain constant time
  pop() {
    if (this.first === null) return undefined;
    let deleted = this.first;
    if (this.length === 1) this.first = this.last = null;
    else this.first = this.first.next;
    this.length--;
    return deleted.val;
  }
  print() {
    let arr = [];
    if (this.first === null) return console.log(arr);
    let current = this.first;
    for (let i = 0; i < this.length; i++) {
      arr.push({ val: current.val, next: current.next });
      current = current.next;
    }
    console.log(arr);
  }
}

let myStack = new Stack();

console.log(myStack.push("zero"));
console.log(myStack.push("one"));
console.log(myStack.push("two"));
myStack.print();
console.log(myStack.pop()); //two
console.log(myStack.pop()); //one
console.log(myStack.pop()); //zero
console.log(myStack.pop()); //undefined
myStack.print();
