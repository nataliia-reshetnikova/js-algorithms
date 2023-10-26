class Graph {
  constructor() {
    this.adjecencyList = {};
    //example of structure
    /* 
    Graph {
      adjecencyList: {
        Tokyo: [ 'Dallas', 'Toronto' ],
        Dallas: [ 'Tokyo', 'Toronto' ],
        Toronto: [ 'Dallas', 'Tokyo' ]
      }
    }
    */
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
  //depth first search (in this case just traversal recursive)
  dfs(v) {
    let result = new Set();
    const helper = (v) => {
      if (!this.adjecencyList[v]) return;
      result.add(v);
      for (let neighbor of this.adjecencyList[v]) {
        if (!result.has(neighbor)) helper(neighbor);
      }
    };
    helper(v);
    return result;
  }
  //dfs iterative
  dfs_iterative(v) {
    let stack = [v];
    let result = [];
    let visited = {};
    visited[v] = true;
    let next;
    while (stack.length > 0) {
      next = stack.pop();
      result.push(next);
      for (let neighbor of this.adjecencyList[next]) {
        if (!(neighbor in visited)) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
    return result;
  }
  //breadth first traversal
  bfs(v) {
    const queue = [v];
    const result = [];
    const visited = {};
    visited[v] = true;
    let next;
    while (queue.length > 0) {
      next = queue.shift();
      result.push(next);
      for (let neighbor of this.adjecencyList[next]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(g.dfs("A"));
console.log(g.dfs_iterative("A"));
console.log(g.bfs("A"));
