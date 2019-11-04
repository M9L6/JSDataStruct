import { LinkedList } from "../dataStruct/LinkedList.js";

function testLinkedList() {
    let linkedList = new LinkedList();
    console.log(linkedList.isEmpty());
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    console.log(linkedList.insert(1, 4));
    console.log(linkedList.insert(10, 10));
    console.log(linkedList.indexOf(3));
    console.log(linkedList.size());
    linkedList.print();
    console.log(linkedList.remove(1));
    linkedList.print();
    console.log(linkedList.isEmpty());
    console.log(linkedList.getHead());
    console.log(linkedList.remveAt(1));
    linkedList.print();
}

export { testLinkedList }