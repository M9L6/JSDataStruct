let _items = Symbol();
/**
 * 字典
 */
class Dictionary {
    constructor() {
        this[_items] = {};
    }

    /**
     * 设置键值和对应的值
     * @param {*} key 键值
     * @param {*} val 值
     */
    set(key, val) {
        this[_items][key] = val;
    }

    /**
     * 删除键值key
     * @param {*} key 要删除的键值
     */
    delete(key) {
        if (this.has(key)) {
            delete this[_items][key];
            return true;
        }
        return false;
    }

    /**
     * 查看字典中是否包含键值key
     * @param {*} key 要判断的键值
     */
    has(key) {
        return key in this[_items];
    }

    /**
     * 获取键值key对应的值
     * @param {*} key 要获取值得键值
     */
    get(key) {
        if (this.has(key)) {
            return this[_items][key];
        }
        return undefined;
    }

    /**
     * 清空字典的所有键值
     */
    clear() {
        this[_items] = {};
    }

    /**
     * 字典键值的数量
     */
    size() {
        return this.keys().length;
    }

    /**
     * 获取字典中的所有键值
     */
    keys() {
        return Object.keys(this[_items]);
    }

    /**
     * 获取字典中所有键值对应的值
     */
    values() {
        var values = [];
        for (var k in this[_items]) {
            if (this.has(k)) {
                values.push(this[_items][k]);
            }
        }
        return values;
    }

    /**
     * 打印出字典
     */
    print() {
        console.log(this[_items]);
    }

}

export { Dictionary }