//lower value will be served first just like minimum binary heap works
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.values[parent].priority > this.values[idx].priority) {
        let temp = this.values[parent];
        this.values[parent] = this.values[idx];
        this.values[idx] = temp;
        idx = parent;
      } else break;
    }
    return this;
  }
  dequeue() {
    const highestPriority = this.values[0];
    const last = this.values.pop();
    if (this.values.length > 0) this.values[0] = last;
    //bubble down
    let idx = 0;
    const length = this.values.length;
    while (idx < length) {
      let element = this.values[idx];
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let swap = null;
      let left, right;
      if (leftIdx < length) {
        left = this.values[leftIdx].priority;
        if (left < element.priority) swap = leftIdx;
      }
      if (rightIdx < length) {
        right = this.values[rightIdx].priority;
        if (
          (swap === null && right < element.priority) ||
          (swap !== null && right < left)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
    return highestPriority;
  }
}
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("dehydration", 1);
priorityQueue.enqueue("losing conscious", 2);
priorityQueue.enqueue("gun shot wound", 0);
priorityQueue.enqueue("common cold", 40);
priorityQueue.enqueue("high fever", 3);
console.log(priorityQueue);
priorityQueue.dequeue(); //0
console.log(priorityQueue);
