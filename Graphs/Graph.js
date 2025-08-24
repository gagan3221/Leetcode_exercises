// Add vertex in graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }
}

let x = new Graph();
x.addVertex("A");
x.addVertex("B");
console.log(x.adjacencyList);
