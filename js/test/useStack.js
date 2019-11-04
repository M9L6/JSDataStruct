import Stack from "../dataStruct/Stack.js";

/**
 * 十进制转换成二进制
 * @param {*} decNumber 十进制参数
 */
function divideBy2(decNumber) {
    let remStack = new Stack(),
        rem, binaryString = '';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

/**
 * 十进制转换为任意进制(2-16)
 * @param {*} decNumber 十进制参数
 * @param {*} base 进制数(2-16)
 */
function baseConvert(decNumber, base) {
    let remStack = new Stack(),
        rem, baseString = '',
        digits = '0123456789ABCDEF';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

/**
 * 测试栈
 */
function testStack() {
    let stack = new Stack();
    console.log(stack.isEmpty());
    stack.push(5);
    stack.push(8);
    console.log(stack.peek());
    stack.push(11)
    console.log(stack.size());
    console.log(stack.isEmpty());
    stack.push(15);
    stack.pop();
    stack.pop();
    console.log(stack.size());
    stack.print();
    let objectSymbols = Object.getOwnPropertySymbols(stack);
    console.log(objectSymbols.length);
    console.log(objectSymbols);
    console.log(objectSymbols[0]);
    stack[objectSymbols[0]].push(1);
    stack.print();
}



export { divideBy2, baseConvert, testStack }