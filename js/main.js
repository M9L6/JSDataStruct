import { divideBy2, baseConvert, testStack } from "./test/useStack.js";
import { testQueue, hotPotato } from "./test/useQueue.js";
import { testLinkedList, testDoublyLinkedList } from "./test/useLinkedList.js";
import { testSet } from "./test/useSet.js";
import { testDictionary } from "./test/useDictionary.js";
import { testHashTable } from "./test/useHashTable.js";
import { testTree } from "./test/useTree.js";
import { testGraph } from "./test/useGraph.js";
import { testShortPath } from "./test/useShortPath.js";
import { testSort } from "./test/useSort.js";

testStack();
console.log(divideBy2(23));
console.log(divideBy2(10));
console.log(divideBy2(1000));
console.log(baseConvert(100345, 2));
console.log(baseConvert(100345, 8));
console.log(baseConvert(100345, 16));

testQueue();

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log("The winner is: " + winner);

testLinkedList();

testDoublyLinkedList();

testSet();

testDictionary();

testHashTable();

testTree();

testGraph();

testShortPath();

testSort();