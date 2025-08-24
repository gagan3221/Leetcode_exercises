//Adjacency List
const graph = {
  A: ["B", "C"],
  B: ["A", "E"],
};

console.log(graph["A"]);

// Adjacency matrix

const nodes = ["A", "B", "C"];
const edges = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0],
];

console.log(edges[0][1]);

// Graph: 0--1, 1--2
let n = 3;
let adjMat = Array.from({ length: n }, () => Array(n).fill(0));

adjMat[0][1] = 1;
adjMat[1][0] = 1; // undirected
adjMat[1][2] = 1;
adjMat[2][1] = 1;
console.log("adjecency matrix", adjMat);
