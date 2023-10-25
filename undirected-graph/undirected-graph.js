class Graph {
  constructor() {
    this.adjecencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjecencyList[vertex]) this.adjecencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    if (this.adjecencyList[v1] && this.adjecencyList[v2]) {
      this.adjecencyList[v1].push(v2);
      this.adjecencyList[v2].push(v1);
    }
  }
  removeEdge(v1, v2) {
    console.log(v1, v2);
    if (this.adjecencyList[v1] && this.adjecencyList[v2]) {
      this.adjecencyList[v1] = this.adjecencyList[v1].filter((v) => v !== v2);
      this.adjecencyList[v2] = this.adjecencyList[v2].filter((v) => v !== v1);
    }
  }
  removeVertex(vertex) {
    while (this.adjecencyList[vertex].length) {
      this.removeEdge(vertex, this.adjecencyList[vertex].pop());
    }
    delete this.adjecencyList[vertex];
  }
}

let myGraph = new Graph();
myGraph.addVertex("Tokyo");
myGraph.addVertex("Dallas");
myGraph.addVertex("Toronto");
console.log(myGraph);
myGraph.addEdge("Tokyo", "Dallas");
myGraph.addEdge("Toronto", "Dallas");
myGraph.addEdge("Toronto", "Tokyo");
console.log(myGraph);
//myGraph.removeEdge("Toronto", "Dallas");
console.log(myGraph);
myGraph.removeVertex("Tokyo");
console.log(myGraph);
