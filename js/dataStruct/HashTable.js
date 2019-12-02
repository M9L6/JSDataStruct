import { LinkedList } from "./LinkedList.js";

let _table = Symbol();

/**
 * 给键值分配对应的hashcode
 */
function loseloseHashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 37;
}

/**
 * 设置一个初始化质数来分配对应的hashcode
 * @param {*} key 
 */
function djv2HashCode(key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
}

/**
 * 设置默认的获取hashcode的方法
 */
let _hashCodeFunc = Symbol();

/**
 * 存储键值和值
 */
class valuePair {

    constructor(key, value) {
            this.key = key;
            this.value = value;
        }
        /**
         * 方便查看对应的值
         */
    toString() {
        return `[${this.key} - ${this.value}]`;
    }
}

/**
 * 散列表
 */
class HashTable {

    /**
     * 传入散列表函数
     * @param {*} hashCodeFunc 不传入的话默认为loseloseHashCode 
     */
    constructor(hashCodeFunc = loseloseHashCode) {
        this[_hashCodeFunc] = hashCodeFunc;
        this[_table] = [];
    }

    /**
     * 向表中添加键值和值，通过散列表来安排存放的位置
     * @param {*} key 要添加的键值
     * @param {*} value 要添加的值
     */
    put(key, value) {
        let position = this[_hashCodeFunc](key);
        if (this[_table][position] == undefined) {
            this[_table][position] = new LinkedList();
        }
        this[_table][position].append(new valuePair(key, value));
    }

    /**
     * 获取对应键值的值
     * @param {*} key 要获取的键值
     */
    get(key) {
        let position = this[_hashCodeFunc](key);
        if (this[_table][position] !== undefined) {
            //遍历列表寻找键/值
            let current = this[_table][position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            //检查的元素在链表的第一个或者最后一个节点的情况
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    }

    /**
     * 移除键值
     * @param {*} key 要移除的键值 
     */
    remove(key) {
        let position = this[_hashCodeFunc](key);
        if (this[_table][position] !== undefined) {
            //遍历列表寻找键/值
            let current = this[_table][position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    this[_table][position].remove(current.element);
                    if (this[_table][position].isEmpty()) {
                        this[_table][position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            //检查的元素在链表的第一个或者最后一个节点的情况
            if (current.element.key === key) {
                this[_table][position].remove(current.element);
                if (this[_table][position].isEmpty()) {
                    this[_table][position] = undefined;
                }
                return true;
            }
        }
        return false;
    }

    print() {
        for (let i = 0; i < this[_table].length; i++) {
            if (this[_table][i] !== undefined) {
                console.log(`position  ${i}     ${this[_table][i].toString()}`);
            }
        }
    }
}

export { HashTable, loseloseHashCode, djv2HashCode }