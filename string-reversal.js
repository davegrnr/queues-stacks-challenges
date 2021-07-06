class Node {
    constructor(val) {
    this.val = val;
    this.next = null;
    }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
    constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    }

    /** push(val): add new value to end of the stack. Returns undefined. */

    push(val) {
    let node = new Node(val);

    if (!this.first) {
        this.first = node;
        this.last = node;
    } else {
        let tmp = this.first;
        this.first = node;
        this.first.next = tmp;
    }

    this.size++;

    }

    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */

    pop() {
    if (this.isEmpty()) throw new Error("Stack is empty.") 

    let firstNode

    if(this.size === 1) {
        firstNode = this.first
        this.first = null;
        this.size --;
        return firstNode.val;
    }

    firstNode = this.first;
    this.first.next = this.first
    this.size --;
    return firstNode.val;
    }

    /** peek(): return the value of the first node in the stack. */

    peek() {
    if (this.isEmpty()) throw new Error("Stack is empty.")

    return this.first.val;
    }

    /** isEmpty(): return true if the stack is empty, otherwise false */

    isEmpty() {
    if (this.size === 0) {
        return true
    }
    return false;
    }

    reverse(){
    let str = this.pop();
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
    }
}

let pancakes = new Stack
pancakes.push('Blueberry')

// module.exports = Stack;