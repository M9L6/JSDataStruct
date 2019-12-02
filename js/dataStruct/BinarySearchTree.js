/**
 * 二叉树节点
 */
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

/**
 * 插入新节点
 */
function insertNode(node, newNode) {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }
}

/**
 * 前序遍历二叉树
 * @param {*} node 要遍历的节点 
 * @param {*} callback 对节点值进行的操作
 */
function preOrderTraverse(node, callback) {
    if (node !== null) {
        callback && callback(node.key);
        preOrderTraverse(node.left, callback);
        preOrderTraverse(node.right, callback);
    }
}

/**
 * 后序遍历二叉树
 * @param {*} node 要遍历的节点 
 * @param {*} callback 对节点值进行的操作
 */
function postOrderTraverse(node, callback) {
    if (node !== null) {
        postOrderTraverse(node.left, callback);
        postOrderTraverse(node.right, callback);
        callback && callback(node.key);
    }
}

/**
 * 中序遍历二叉树
 * @param {*} node 要遍历的节点
 * @param {*} callback 对节点值进行的操作
 */
function inOrderTraverse(node, callback) {
    if (node !== null) {
        inOrderTraverse(node.left, callback);
        callback && callback(node.key);
        inOrderTraverse(node.right, callback);
    }
}

/**
 * 搜索二叉树中最小的节点
 * @param {*} node 要搜索的节点
 */
function minNode(node) {
    if (node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node.key;
    }
    return null;
}

/**
 * 搜索二叉树中最大的节点
 * @param {*} node 要搜索的节点
 */
function maxNode(node) {
    if (node) {
        while (node && node.right !== null) {
            node = node.right;
        }
        return node.key;
    }
    return null;
}

/**
 * 搜索二叉树是否有对应的节点
 * @param {*} node 要搜索的节点
 * @param {*} key 要搜索的值
 */
function searchNode(node, key) {
    if (node === null) {
        return false;
    }
    if (key < node.key) {
        return searchNode(node.left, key);
    } else if (key > node.key) {
        return searchNode(node.right, key);
    } else {
        return true;
    }
}

/**
 * 从二叉树删除掉某个节点
 * @param {*} node 节点 
 * @param {*} key 键值
 */
function removeNode(node, key) {
    if (node === null) {
        return null;
    }
    if (key < node.key) {
        node.left = removeNode(node.left, key);
        return node;
    } else if (key > node.key) {
        node.right = removeNode(node.right, key);
        return node;
    } else {
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if (node.right === null) {
            node = node.left;
            return node;
        }

        let aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node;
    }
}

/**
 * 找到节点上最小的节点
 * @param {*} node 要搜索的节点
 */
function findMinNode(node) {
    while (node && node.left !== null) {
        node = node.left;
    }
    return node;
}

let _root = Symbol();
/**
 * 二叉搜索树
 */
class BinarySearchTree {

    constructor() {
        this[_root] = null;
    }

    /**
     * 插入新的节点
     * @param {*} key 节点值
     */
    insert(key) {
        let node = new Node(key);
        if (this[_root] === null) {
            this[_root] = node;
        } else {
            insertNode(this[_root], node);
        }
    }

    /**
     * 搜索是否有对应的节点
     * @param {*} key 要搜索的值
     */
    search(key) {
        return searchNode(this[_root], key);
    }

    /**
     * 中序遍历二叉树
     * @param {*} callback 对每个节点值要做的操作 
     */
    inOrderTraverse(callback) {
        inOrderTraverse(this[_root], callback);
    }

    /**
     * 前序遍历二叉树
     * @param {*} callback 对每个节点值要做的操作
     */
    preOrderTraverse(callback) {
        preOrderTraverse(this[_root], callback);
    }

    /**
     * 后序遍历二叉树
     * @param {*} callback 对每个节点值要做的操作 
     */
    postOrderTraverse(callback) {
        postOrderTraverse(this[_root], callback);
    }

    /**
     * 获取二叉树最小的值
     */
    min() {
        return minNode(this[_root]);
    }

    /**
     * 获取二叉树最大的值
     */
    max() {
        return maxNode(this[_root]);
    }

    /**
     * 从二叉树移除节点
     * @param {*} key 要移除的节点的值
     */
    remove(key) {
        this[_root] = removeNode(this[_root], key);
    }

}

/**
 * 向平衡二叉树插入新节点
 * @param {*} node 
 * @param {*} newNode 
 */
function insertAVLNode(node, newNode) {
    if (node === null) {
        return newNode;
    }
    if (newNode.key < node.key) {
        node.left = insertAVLNode(node.left, newNode);
        if (node.left !== null) {
            if (heightNode(node.left) - heightNode(node.right) > 1) {
                if (newNode.key < node.left.key) {
                    node = rotationLL(node);
                } else {
                    node = rotationLR(node);
                }
            }
        }
    } else if (newNode.key > node.key) {
        node.right = insertAVLNode(node.right, newNode);
        if (node.right !== null) {
            if (heightNode(node.right) - heightNode(node.left) > 1) {
                if (newNode.key > node.right.key) {
                    node = rotationRR(node);
                } else {
                    node = rotationRL(node);
                }
            }
        }
    }
    return node;
}

/**
 * 计算节点的高度
 * @param {*} node 要计算的节点
 */
function heightNode(node) {
    if (node === null) {
        return -1;
    } else {
        return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
    }
}

/**
 * 向左的单旋转
 * @param {*} node 
 */
function rotationRR(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
}

/**
 * 向右的单旋转
 * @param {*} node 
 */
function rotationLL(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
}

/**
 * 向左的双旋转
 * @param {*} node 
 */
function rotationRL(node) {
    node.left = rotationRR(node.left);
    return rotationLL(node);
}

/**
 * 向右的双旋转
 * @param {*} node 
 */
function rotationLR(node) {
    node.right = rotationLL(node.right);
    return rotationRR(node);
}

/**
 * 移除二叉平衡树节点
 * @param {*} node 
 */
function removeAVLNode(node, key) {
    if (node === null) {
        return null;
    }

    if (key < node.key) {
        node.left = removeAVLNode(node.left, key);
        if (node.left !== null) {
            if (heightNode(node.right) - heightNode(node.left) > 1) {
                if (heightNode(node.right.left) > heightNode(node.right.right)) {
                    node = rotationRL(node);
                } else {
                    node = rotationRR(node);
                }
            }
        }

    } else if (key > node.key) {
        node.right = removeAVLNode(node.right, key);
        if (node.right !== null) {
            if (heightNode(node.left) - heightNode(node.right) > 1) {
                if (heightNode(node.left.right) > heightNode(node.left.left)) {
                    node = rotationLR(node);
                } else {
                    node = rotationLL(node);
                }
            }
        }
    } else {
        if (node.left !== null && node.right !== null) {
            if (heightNode(node.left) > heightNode(node.right)) {
                let aux = findMaxNode(node.left);
                node.key = aux.key;
                node.left = removeAVLNode(node.left, aux.key);
            } else {
                let aux = findMinNode(node.right);
                node.key = aux.key;
                node.right = removeAVLNode(node.right, aux.key);
            }
        } else {
            node = node.left ? node.left : node.right;
        }
    }
    return node;
}
/**
 * 找到节点中最大的节点
 * @param {*} node 
 */
function findMaxNode(node) {
    while (node && node.right !== null) {
        node = node.right;
    }
    return node;
}


/**
 * 平衡二叉树（避免左右子树高度差过大）
 */
class AVLTree extends BinarySearchTree {

    constructor() {
            super();
        }
        /**
         * 向平衡二叉树插入新的节点
         * @param {*} key 
         */
    insert(key) {
            let node = new Node(key);
            this[_root] = insertAVLNode(this[_root], node);

        }
        /**
         * 从平衡二叉树移除节点
         * @param {*} key 
         */
    remove(key) {
        this[_root] = removeAVLNode(this[_root], key);
    }
}


export { BinarySearchTree, AVLTree }