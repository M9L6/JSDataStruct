import { LinkedList, DoublyLinkList } from "../dataStruct/LinkedList.js";

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


function testDoublyLinkedList() {
    let dlinkerList = new DoublyLinkList();
    console.log(dlinkerList.isEmpty());
    dlinkerList.append(1);
    dlinkerList.append(2);
    dlinkerList.append(3);
    console.log(dlinkerList.insert(1, 4));
    console.log(dlinkerList.insert(10, 10));
    console.log(dlinkerList.indexOf(3));
    console.log(dlinkerList.size());
    dlinkerList.print();
    console.log(dlinkerList.remove(1));
    dlinkerList.print();
    console.log(dlinkerList.isEmpty());
    console.log(dlinkerList.getHead());
    console.log(dlinkerList.getTail());
    console.log(dlinkerList.remveAt(1));
    dlinkerList.print();
}


export { testLinkedList, testDoublyLinkedList }