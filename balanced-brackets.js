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
    this.data = [];
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


    balancedBrackets(expr){
    
    if(expr.includes('(','[','{',')',']','}') === false){
        return "Balanced"
    }

    // Traverse
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];


        if (x == '(' || x == '[' || x == '{') {

            
            stack.data.push(x);
            continue;
        }

        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.data.length == 0)
            return "Not Balanced";
            
        let check;
        switch (x){
        case ')':
            check = stack.data.pop();
            if (check == '{' || check == '[')
                return "Not Balanced"
            break;

        case '}':
            check = stack.data.pop();
            if (check == '(' || check == '[')
                return "Not Balanced"
            break;

        case ']':
            check = stack.data.pop();
            if (check == '(' || check == '{')
                return "Not Balanced"
            break;
        }

    }

    // Check Empty Stack
    if (stack.data.length == 0) {
        return "Balanced"
    } else {
        return "Not Balanced"
    }
}


}

let stack = new Stack

// module.exports = Stack;