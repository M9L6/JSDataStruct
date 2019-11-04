//symbol实现私有属性
let _items = Symbol();
/**
 * 队列
 */
class Queue {
    constructor() {
        this[_items] = [];
    }

    /**
     * 向队列尾部添加一个（或多个）元素
     * @param {*} element  添加的元素
     */
    enqueue(element) {
        this[_items].push(element);
    }

    /**
     * 移除队列中第一（即排在队列最前面）项，并返回被移除的元素
     */
    dequeue() {
        return this[_items].shift();
    }

    /**
     * 返回队列第一个元素---最先被添加，也是最先被移除的元素。队列不做任何变动
     * （队列不移除元素，只返回信息----与Stack类的peek方法类似）
     */
    front() {
        return this[_items][0];
    }

    /**
     * 如果队列不包含任何元素，返回true，否则返回false
     */
    isEmpty() {
        return this[_items].length === 0;
    }

    /**
     * 返回队列包含的元素个数，与数组的length属性类似
     */
    size() {
        return this[_items].length;
    }

    /**
     * 打印队列的信息
     */
    print() {
        console.log(this[_items].toString());
    }

}

/**
 * 优先队列元素
 */
class QueueElment {
    /**
     * 
     * @param {*} element 元素
     * @param {*} priority 优先级
     */
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

/**
 * 优先队列
 */
class PriorityQueue extends Queue {
    constructor() {
        super();
    }

    /**
     * 优先队列插入元素
     * @param {*} element 插入的元素 
     * @param {*} priority 插入元素的优先级
     */
    enqueue(element, priority) {
        let queueElement = new QueueElment(element, priority);
        let added = false;
        for (let i = 0; i < this[_items].length; i++) {
            if (queueElement.priority < this[_items][i].priority) {
                this[_items].splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this[_items].push(queueElement);
        }
    }

    /**
     * 优先队列信息的打印
     */
    print() {
        for (let i = 0; i < this[_items].length; i++) {
            console.log(`${this[_items][i].element} - 
            ${this[_items][i].priority}`);
        }
    }

}

export { Queue, PriorityQueue }