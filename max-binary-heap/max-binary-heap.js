class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.values[parent] < this.values[idx]) {
        let temp = this.values[parent];
        this.values[parent] = this.values[idx];
        this.values[idx] = temp;
        idx = parent;
      } else break;
    }
    return this;
  }
  extractMax() {
    //pop the end and put it at the root
    const max = this.values[0];
    const last = this.values.pop();
    if (this.values.length > 0) this.values[0] = last;
    //bubble down the root
    let idx = 0;
    const length = this.values.length;
    while (idx < length) {
      let element = this.values[idx];
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let swap = null;
      let left, right;
      if (leftIdx < length) {
        left = this.values[leftIdx];
        if (left > element) swap = leftIdx;
      }
      if (rightIdx < length) {
        right = this.values[rightIdx];
        if (
          (swap === null && right > element) ||
          (swap !== null && right > left)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
    return max;
  }
}

let mbh = new MaxBinaryHeap();
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.insert(55);
console.log(mbh);
console.log(mbh.extractMax()); //55
console.log(mbh);
console.log(mbh.extractMax()); //41
console.log(mbh);
