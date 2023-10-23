class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    let currentInd = this.values.length - 1;
    while (currentInd > 0) {
      let parent = Math.floor((currentInd - 1) / 2);
      if (this.values[parent] < this.values[currentInd]) {
        let temp = this.values[parent];
        this.values[parent] = this.values[currentInd];
        this.values[currentInd] = temp;
        currentInd = parent;
      } else break;
    }
    return this;
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
