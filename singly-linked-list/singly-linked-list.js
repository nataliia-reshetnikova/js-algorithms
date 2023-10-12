class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) this.head = this.tail = node;
    else this.tail.next = this.tail = node;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let newTail = this.head;
    let current = this.head.next;
    while (current.next) {
      newTail = newTail.next;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;
    return newTail;
  }
  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) this.head = this.tail = newHead;
    else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return newHead;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) current = current.next;
    return current;
  }
  set(val, index) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let prev = this.get(index - 1);
    let node = new Node(val);
    node.next = prev.next;
    prev.next = node;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    if (this.length === 0) this.tail = this.head = null;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.reverse();
list.print();
