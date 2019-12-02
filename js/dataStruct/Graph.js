import { Dictionary } from "./Directionary.js";
import { Queue } from "./Queue.js";

//顶点
let _vertices = Symbol();
//邻接表
let _adjList = Symbol();

let _time = Symbol();
/**
 * 初始化图检测的状态   'white'未被访问过   'grey'被发现的   'black'已经被探索过
 * @param {*} vertices 图的顶点 
 */
function initializeColor(vertices) {
    let color = [];
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = 'white';
    }
    return color;
}

/**
 * 深度优先搜索
 * @param {*} u 
 * @param {*} color 
 * @param {*} adjList 
 * @param {*} d 
 * @param {*} f 
 * @param {*} p 
 * @param {*} time 
 * @param {*} callback 
 */
function dfsVisit(u, color, adjList, d, f, p, time, callback) {
    color[u] = 'grey';
    d[u] = ++time.val;
    callback && callback(u);
    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === 'white') {
            p[w] = u;
            dfsVisit(w, color, adjList, d, f, p, time, callback);
        }
    }
    color[u] = 'black';
    f[u] = ++time.val;
}

/**
 * 图（多对多的关系）
 */
class Graph {
    constructor() {
        this[_vertices] = [];
        this[_adjList] = new Dictionary();
        this[_time] = { val: 0 };
    }

    /**
     * 添加顶点
     * @param {*} v 
     */
    addVertex(v) {
        this[_vertices].push(v);
        this[_adjList].set(v, []);
    }

    /**
     * 添加联系的边
     * @param {*} v 
     * @param {*} w 
     */
    addEdge(v, w) {
        this[_adjList].get(v).push(w);
        this[_adjList].get(w).push(v);
    }

    /**
     * 方便查看图的属性
     */
    toString() {
        let s = "";
        for (let i = 0; i < this[_vertices].length; i++) {
            s += this[_vertices][i] + "->";
            let neighbors = this[_adjList].get(this[_vertices][i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + " ";

                s += "\n";
            };
        }
        return s;
    }

    /**
     * 广度优先搜索
     * @param {*} v 遍历的起点顶点
     */
    bfs(v, callback) {
        let color = initializeColor(this[_vertices]),
            queue = new Queue(),
            d = [],
            pred = [];
        for (let i = 0; i < this[_vertices].length; i++) {
            d[this[_vertices][i]] = 0;
            pred[this[_vertices][i]] = null;
        }
        queue.enqueue(v);
        while (!queue.isEmpty()) {
            let u = queue.dequeue(),
                neighbors = this[_adjList].get(u);
            color[u] = 'grey';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === "white") {
                    color[w] = "grey";
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            callback && callback(u);
        }
        return {
            distances: d,
            predecessors: pred
        };
    }

    /**
     * 深度优先搜索
     * @param {*} callback 
     */
    dfs(callback) {
        let color = initializeColor(this[_vertices]);
        let d = [],
            f = [],
            p = [];
        this[_time].val = 0;
        for (let i = 0; i < this[_vertices].length; i++) {
            f[this[_vertices][i]] = 0;
            d[this[_vertices][i]] = 0;
            p[this[_vertices][i]] = null;
        }
        for (let i = 0; i < this[_vertices].length; i++) {
            if (color[this[_vertices][i]] === 'white') {
                dfsVisit(this[_vertices][i], color, this[_adjList], d, f, p, this[_time], callback)
            }
        }
        return {
            discovery: d,
            finished: f,
            predecessors: p
        };
    }

    /**
     * 获取顶点0
     */
    getVertices() {
        return this[_vertices];
    }


}

export { Graph }