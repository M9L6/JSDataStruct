const INF = Number.MAX_SAFE_INTEGER;

function minDistance(dist, visited) {
    let min = INF,
        minIndex = -1;
    for (let v = 0; v < dist.length; v++) {
        if (visited[v] == false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
}

/**
 * Dijkstra算法得到最短路径
 * @param {*} adjList 有向图加权邻接表
 * @param {*} src 起点
 */
function dijkstra(adjList, src) {
    let dist = [],
        visited = [],
        length = adjList.length,
        path = [];
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
                path[v] = u;
            }
        }
    }
    /**
     * 最短距离，及其对应的路径
     */
    return { dist, path };
}

/**
 * 通过floyd-warshall算法求有向图所有顶点到其他顶点的最短距离
 * @param {*} adjList 有向图加权邻接表
 */
function floydWarshall(adjList) {
    let dist = [],
        length = adjList.length,
        i, j, k;
    for (i = 0; i < length; i++) {
        dist[i] = [];
        for (j = 0; j < length; j++) {
            dist[i][j] = adjList[i][j];
        }
    }

    for (k = 0; k < length; k++) {
        for (i = 0; i < length; i++) {
            for (j = 0; j < length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
}

/**
 * 通过prim算法计算无向图加权的最小生成树
 * @param {*} adjList 无向图加权邻接表
 */
function prim(adjList) {
    let path = [],
        key = [],
        visited = [],
        length = adjList.length;
    for (let i = 0; i < length; i++) {
        key[i] = INF;
        visited[i] = false;
    }
    key[0] = 0;
    path[0] = -1;

    for (let i = 0; i < length - 1; i++) {
        let u = minDistance(key, visited);
        visited[u] = true;
        for (let v = 0; v < length; v++) {
            if (adjList[u][v] && !visited[v] && adjList[u][v] < key[v]) {
                path[v] = u;
                key[v] = adjList[u][v];
            }
        }
    }
    /**
     * 最小生成树及对应的权值
     */
    return { path, key };
}

/**
 * 防止出现环路 查看是否在同一个树上
 * @param {*} i 
 * @param {*} parent 
 */
function find(i, j, parent) {

    if (i === j || parent[i].indexOf(j) >= 0) {
        return true;
    }
    for (let k = 0; k < parent[i].length; k++) {
        if (parent[parent[i][k]].indexOf(j) >= 0) {
            return true;
        }
    }

    return false;
}


/**
 * 合并
 * @param {*} i 
 * @param {*} j 
 * @param {*} edges 
 */
function union(i, j, edges) {
    edges[i].push(j);
    edges[j].push(i);
}

/**
 * 用kruskal算法求无向图的最小生成树
 * @param {*} adjList 无向图有权邻接表
 */
function kruskal(adjList) {
    let length = adjList.length,
        path = [],
        edges = [],
        key = [],
        cost = [],
        ne = 0,
        u, v, i, j, min;
    for (i = 0; i < length; i++) {
        cost[i] = [];
        edges[i] = [];
        for (j = 0; j < length; j++) {
            cost[i][j] = adjList[i][j];
        }
    }

    while (ne < length - 1) {
        for (i = 0, min = INF; i < length; i++) {
            for (j = 0; j < length; j++) {
                if (cost[i][j] < min) {
                    min = cost[i][j];
                    u = i;
                    v = j;
                }
            }
        }
        if (!find(u, v, edges)) {
            union(u, v, edges);
            path.push([u, v]);
            key.push(min);
            ne++;
        }
        cost[u][v] = cost[v][u] = INF;
    }

    return { path, key };
}

export { dijkstra, floydWarshall, prim, kruskal }