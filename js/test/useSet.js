import { union, intersection, difference, subset } from "../dataStruct/Set.js";

function testSet() {
    let setA = new Set([1, 2, 3]);
    let setB = new Set([1, 2, 3, 4, 5, 6]);
    console.log([...union(setA, setB).values()]);
    console.log([...intersection(setA, setB).values()]);
    console.log([...difference(setA, setB).values()]);
    console.log(subset(setA, setB));
}

export { testSet }