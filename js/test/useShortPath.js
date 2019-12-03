import { dijkstra, floydWarshall, prim, kruskal } from "../algorithms/shortPath.js";

const INF = Number.MAX_SAFE_INTEGER;

function testShortPath() {
    console.log("dijkstra");
    let adjList = [
        [0, 2, 4, 0, 0, 0],
        [0, 0, 1, 4, 2, 0],
        [0, 0, 0, 0, 3, 0],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 3, 0, 2],
        [0, 0, 0, 0, 0, 0]
    ];
    //起点0到其他位置的最短距离
    let result = dijkstra(adjList, 0);
    for (let i = 0; i < result.path.length; i++) {
        if (!result.path[i]) continue;
        console.log(`Edge: ${result.path[i]}-${i}`);
    }
    console.log(result.dist);

    console.log("floydWarshall");
    //INF表示无法连通
    let adjList1 = [
        [0, 2, 4, INF, INF, INF],
        [INF, 0, 1, 4, 2, INF],
        [INF, INF, 0, INF, 3, INF],
        [INF, INF, INF, 0, INF, 2],
        [INF, INF, INF, 3, 0, 2],
        [INF, INF, INF, INF, INF, 0]
    ]
    console.log(floydWarshall(adjList1));


    console.log("prim");
    let adjList2 = [
        [0, 2, 4, 0, 0, 0],
        [2, 0, 2, 4, 2, 0],
        [4, 2, 0, 0, 3, 0],
        [0, 4, 0, 0, 3, 2],
        [0, 2, 3, 3, 0, 2],
        [0, 0, 0, 2, 2, 0]
    ];
    let result2 = prim(adjList2);
    for (let i = 0; i < result2.path.length; i++) {
        if (result2.path[i] === -1) continue;
        console.log(`Edge: ${result2.path[i]}-${i}    Weight: ${result2.key[i]}`);
    }


    console.log("kruskal");
    let adjList3 = [
        [0, 2, 4, INF, INF, INF],
        [2, 0, 2, 4, 2, INF],
        [4, 2, 0, INF, 3, INF],
        [INF, 4, INF, 0, 3, 2],
        [INF, 2, 3, 3, 0, 2],
        [INF, INF, INF, 2, 2, 0]
    ];
    let result3 = kruskal(adjList3);
    for (let i = 0; i < result3.path.length; i++) {
        if (result3.path[i] === undefined) continue;
        console.log(`Edge: ${result3.path[i][0]}-${result3.path[i][1]}    Weight: ${result3.key[i]}`);
    }
}

export { testShortPath }