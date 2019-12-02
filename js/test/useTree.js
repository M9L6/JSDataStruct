import { BinarySearchTree, AVLTree } from "../dataStruct/BinarySearchTree.js";

let str = "";

function print(x) {
    str += x + " - ";
}


function testTree() {
    let tree1 = new BinarySearchTree();
    let tree2 = new AVLTree();

    tree1.insert(7);
    tree1.insert(6);
    tree1.insert(10);
    tree1.insert(18);
    tree1.insert(1);
    tree1.insert(9);
    str = "";
    tree1.inOrderTraverse(print);
    console.log(str);
    str = "";
    tree1.preOrderTraverse(print);
    console.log(str);
    str = "";
    tree1.postOrderTraverse(print);
    console.log(str);

    console.log(tree1.search(10));
    console.log(tree1.search(100));
    console.log(tree1.min());
    console.log(tree1.max());
    tree1.remove(6);
    str = "";
    tree1.inOrderTraverse(print);
    console.log(str);


    tree2.insert(7);
    tree2.insert(6);
    tree2.insert(10);
    tree2.insert(18);
    tree2.insert(1);
    tree2.insert(9);
    str = "";
    tree2.inOrderTraverse(print);
    console.log(str);
    str = "";
    tree2.preOrderTraverse(print);
    console.log(str);
    str = "";
    tree2.postOrderTraverse(print);
    console.log(str);

    console.log(tree2.search(10));
    console.log(tree2.search(100));
    console.log(tree2.min());
    console.log(tree2.max());
    tree2.remove(6);
    str = "";
    tree2.inOrderTraverse(print);
    console.log(str);



}


export { testTree }