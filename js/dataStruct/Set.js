//使用ES6中的Set类实现集合操作

/**
 * 求集合A和B的并集
 * @param {*} setA 要合并的集合A
 * @param {*} setB 要合并的集合B
 */
function union(setA, setB) {
    let unionAb = new Set();
    for (let x of setA) unionAb.add(x);
    for (let x of setB) unionAb.add(x);
    return unionAb;
}

/**
 * 求集合A和B的交集
 * @param {*} setA 集合A
 * @param {*} setB 集合B
 */
function intersection(setA, setB) {
    let intersectionSet = new Set();
    for (let x of setA) {
        if (setB.has(x)) {
            intersectionSet.add(x);
        }
    }
    return intersectionSet;
}

/**
 * 求集合A对B的差集
 * @param {*} setA 集合A
 * @param {*} setB 集合B
 */
function difference(setA, setB) {
    let differenceSet = new Set();
    for (let x of setA) {
        if (!setB.has(x)) {
            differenceSet.add(x);
        }
    }
    return differenceSet;
}

/**
 * 求集合A是否是集合B的子集
 * @param {*} setA 
 * @param {*} setB 
 */
function subset(setA, setB) {
    if (setA.size > setB.size) {
        return false;
    } else {
        for (let x of setA) {
            if (!setA.has(x)) {
                return false;
            }
        }
        return true;
    }
}

export { union, intersection, difference, subset };