import { Graph } from "../dataStruct/Graph.js";
import Stack from "../dataStruct/Stack.js";

function testGraph() {
    let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    let g = new Graph();
    for (let i = 0; i < myVertices.length; i++) {
        g.addVertex(myVertices[i]);
    }
    g.addEdge('A', 'B');
    g.addEdge('A', 'C');
    g.addEdge('A', 'D');
    g.addEdge('C', 'D');
    g.addEdge('C', 'G');
    g.addEdge('D', 'G');
    g.addEdge('D', 'H');
    g.addEdge('B', 'E');
    g.addEdge('B', 'F');
    g.addEdge('E', 'I');
    let shortestPathA = g.bfs(myVertices[0]);

    let fromVertex = myVertices[0];
    for (let i = 1; i < myVertices.length; i++) {
        let toVertex = myVertices[i],
            path = new Stack();
        for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
            path.push(v);
        }
        path.push(fromVertex);
        let s = path.pop();
        while (!path.isEmpty()) {
            s += " - " + path.pop();
        }
        console.log(s);
    }

    console.log(g.dfs());

}

export { testGraph }