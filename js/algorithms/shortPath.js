const INF = Number.MAX_SAFE_INTEGER;

function minDistance(dist, visited) {
    let min = INF,
        minIndex = -1;
    for (let v = 0; v < dist.length; v++) {
        if (visited[v] === false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
}

/**
 * Dijkstra算法得到最短路径
 * @param {*} adjList 有向图寻找最短路径
 * @param {*} src 起点
 */
function dijkstra(adjList, src) {
    let dist = [],
        visited = [],
        length = this[_graph].length;
    for (let i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0;
    for (let i = 0; i < length - 1; i++) {
        let u = minDistance(dist, visited);
        visited[u] = true;
        for (let v = 0; v < length; v++) {
            if (!visited[v] && adjList[u][v] != 0 && dist[u] != INF && dist[u] + adjList[u][v] < dist[v]) {
                dist[v] = dist[u] + adjList[u][v];
            }
        }
    }
    return dist;
}

function floydWarshall() {}