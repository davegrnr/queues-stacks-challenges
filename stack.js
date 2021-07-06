/** Node: node for a stack. */

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
    let newNode = new Node(val);

    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    }

    if (this.last !== null) {
      let prev = this.last;
      this.last.next = prev;
      this.first.next = this.first;
    }

    this.first = newNode;
    this.size += 1;
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
}

let pancakes = new Stack
pancakes.push('Blueberry')
pancakes.push('Chocolate chip')
pancakes.push('Walnut')

module.exports = Stack;