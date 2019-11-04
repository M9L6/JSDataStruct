import { Queue, PriorityQueue } from "../dataStruct/Queue.js";

function testQueue() {
    let queue = new Queue();
    console.log(queue.isEmpty());
    queue.enqueue('John');
    queue.enqueue("Jack");
    queue.enqueue("Camila");
    queue.print();
    console.log(queue.size());
    console.log(queue.isEmpty());
    queue.dequeue();
    queue.dequeue();
    queue.print();

    let priortyQueue = new PriorityQueue();
    priortyQueue.enqueue("John", 2);
    priortyQueue.enqueue("Jack", 1);
    priortyQueue.enqueue("Camila", 1);
    priortyQueue.print();
}


/**
 * 循环队列实现击鼓传花
 * @param {*} nameList 名字列表
 * @param {*} num 循环的大小
 */
function hotPotato(nameList, num) {
    let queue = new Queue();
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + "在击鼓传花游戏中被淘汰。");
    }
    return queue.dequeue();
}


export { testQueue, hotPotato }