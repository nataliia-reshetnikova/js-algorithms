class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
    //{ 'A':[{node:B, weight: 10}]}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dijkstra(start, end) {
    //setup
    const distances = {};
    const pq = new PriorityQueue();
    const prev = {};
    let path = [end]; //to return in the end
    let smallest;
    //initial state
    for (let v in this.adjacencyList) {
      if (v === start) {
        distances[v] = 0;
        pq.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        pq.enqueue(v, Infinity);
      }
      prev[v] = null;
    }

    while (pq.values.length) {
      smallest = pq.dequeue().val;
      if (smallest === end) {
        //build a shortest path
        let path = [end];
        while (smallest !== start) {
          smallest = prev[smallest];
          path.push(smallest);
        }
        return path.reverse();
      }
      if (smallest || this.adjacencyList[smallest !== Infinity]) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextV = this.adjacencyList[smallest][neighbor];
          //calculate distance from neighboring to start
          let distanceToStart = distances[smallest] + nextV.weight;
          if (distanceToStart < distances[nextV.node]) {
            distances[nextV.node] = distanceToStart;
            //update how we got to neighbor
            prev[nextV.node] = smallest;
            //enqueue in priority queue with new priority as shortest distance
            pq.enqueue(nextV.node, distanceToStart);
          }
        }
      }
    }
  }
}

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

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));

// ["A", "C", "D", "F", "E"]
