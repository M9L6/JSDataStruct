/**
 * 链表节点
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

let _length = Symbol();
let _head = Symbol();
let _tail = Symbol();
/**
 * 链表
 */
class LinkedList {
    constructor() {
        this[_length] = 0;
        this[_head] = null;
    }

    /**
     * 向列表尾部添加一个新的项
     * @param {*} element 添加新的元素
     */
    append(element) {
        let node = new Node(element),
            current;
        if (this[_head] === null) {
            this[_head] = node;
        } else {
            current = this[_head];
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this[_length]++;
    }

    /**
     * 向列表特定的位置插入一个新的项
     * @param {*} position 要插入的位置
     * @param {*} element 要插入的元素
     */
    insert(position, element) {
        if (position > -1 && position <= this[_length]) {
            let node = new Node(element),
                current = this[_head],
                previous, index = 0;
            if (position === 0) {
                node.next = current;
                this[_head] = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this[_length]++;
            return true;
        } else {
            return false;
        }
    }

    /**
     * 从列表中移除一项
     * @param {*} element 要移除的元素 
     */
    remove(element) {
        let index = this.indexOf(element);
        return this.remveAt(index);
    }

    /**
     * 返回元素在列表中的索引。如果列表中没有这个元素返回-1
     * @param {*} element 要查找的元素
     */
    indexOf(element) {
        let current = this[_head],
            index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    /**
     * 移除指定位置的元素
     * @param {*} position  要移除元素的位置 
     */
    remveAt(position) {
        if (position > -1 && position < this[_length]) {
            let current = this[_head],
                previous, index = 0;
            if (position === 0) {
                this[_head] = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this[_length]--;
            return current.element;
        } else {
            return null;
        }
    }

    /**
     * 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
     */
    isEmpty() {
        return this[_length] === 0;
    }

    /**
     * 返回链表包含的元素个数，与数组的length属性类似
     */
    size() {
        return this[_length];
    }

    /**
     * 获取表头
     */
    getHead() {
        return this[_head];
    }

    /**
     * 由于列表项使用了Node类，就需要重写集成JavaScript对象默认的
     * toString方法，让其只输出元素的值
     */
    toString() {
        let current = this[_head],
            string = '';
        while (current) {
            string += current.element + (current.next ? '  n  ' : '');
            current = current.next;
        }
        return string;
    }

    /**
     * 打印出链表所有的元素
     */
    print() {
        console.log(this.toString());
    }
}

/**
 * 双向链表节点
 */
class DoublyNode extends Node {
    constructor(element) {
        super(element);
        this.prev = null;
    }
}

/**
 * 双向链表
 */
class DoublyLinkList extends LinkedList {
    constructor() {
            super();
            this[_tail] = null;
        }
        /**
         * 向双向链表尾部插入数据
         * @param {*} element 要添加的数据
         */
    append(element) {
        let dnode = new DoublyNode(element),
            current;
        if (this[_head] === null) {
            this[_head] = dnode;
            this[_tail] = dnode;
        } else {
            current = this[_head];
            while (current.next) {
                current = current.next;
            }
            current.next = dnode;
            dnode.prev = current;
            this[_tail] = dnode;
        }
        this[_length]++;
    }

    /**
     * 向双向链表指定位置插入数据
     * @param {*} position 指定的位置 
     * @param {*} element 插入的数据
     */
    insert(position, element) {
        if (position > -1 && position <= this[_length]) { //判断插入的范围是否合理
            let dnode = new DoublyNode(element),
                current = this[_head],
                previous,
                index = 0;
            if (position === 0) {
                if (!this[_head]) {
                    this[_head] = dnode;
                    this[_tail] = dnode;
                } else {
                    dnode.next = current;
                    current.prev = dnode;
                    this[_head] = dnode;
                }
            } else if (position === this[_length]) {
                current = this[_tail];
                current.next = dnode;
                dnode.prev = current;
                this[_tail] = dnode;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                dnode.next = current;
                previous.next = dnode;

                current.prev = dnode;
                dnode.prev = previous;
            }
            this[_length]++;
            return true;
        } else {
            return false;
        }
    }

    /**
     * 移除指定位置的元素
     * @param {*} position 指定的位置 
     */
    removeAt(position) {
        if (position > -1 && position < this[_length]) {
            let current = this[_head],
                previous,
                index = 0;
            if (position === 0) {
                this[_head] = current.next;
                if (this[_length] === 1) {
                    this[_tail] = null;
                } else {
                    this[_head].prev = null;
                }
            } else if (position === this[_length] - 1) {
                current = this[_tail];
                this[_tail] = current.prev;
                this[_tail].next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            this[_length]--;
            return current.element;
        } else {
            return null;
        }
    }

    /**
     * 得到双向列表的尾部
     */
    getTail() {
        return this[_tail];
    }

}

export { LinkedList, DoublyLinkList }