//通过Symbol类型实现私有变量
let _items = Symbol();

//使用weakmap实先私有属性
//const items = new WeakMap();

/**
 * 栈
 */
export default class Stack {

    constructor() {
        //this.iterms = [];
        this[_items] = [];
        //items.set(this,[]);
    }

    /**
     * 添加一个（或几个）新元素到栈顶
     * @param {*} element 添加的元素
     */
    push(element) {
        // this.items.push(element);
        this[_items].push(element);
        /*let s = items.get(this);
        s.push(element);*/
    }

    /**
     * 移除栈顶的元素，同时返回被移除的元素
     */
    pop() {
        //return this.items.pop();
        return this[_items].pop();
        /*let s = items.get(this);
        let r = s.pop();
        return r;*/
    }

    /**
     * 返回栈顶的元素，不对栈做任何修改（这个方法不会一处栈顶的元素,仅仅返回它）
     */
    peek() {
        //return this.items[this.items.length - 1];
        return this[_items][this[_items].length - 1];
        /*let s = items.get(this);
        return s[s.length-1];*/
    }

    /**
     * 如果栈里没有任何元素返回true，否则返回false
     */
    isEmpty() {
        //return this.items.length === 0;
        return this[_items].length === 0;
        /* let s = items.get(this);
         return s.length === 0;*/
    }

    /**
     * 移除栈里的所有元素
     */
    clear() {
        //this.items = [];
        this[_items] = [];
        /* let s = items.get(this);
         s = [];*/
    }

    /**
     * 返回栈里的元素个数。这个方法和数组的length属性类似
     */
    size() {
        //return this.items.length;
        return this[_items].length;
        /*let s = items.get(this);
        return s.length;*/
    }

    /**
     * 打印栈中的数据
     */
    print() {
        //console.log(this.items.toString());
        console.log(this[_items].toString());
        //console.log(items.get(this).toString());
    }

}