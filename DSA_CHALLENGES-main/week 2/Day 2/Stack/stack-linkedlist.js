class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    let temp = this.head;
    this.head = temp.next;
    temp = null;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.head.value;
  }

  printStack() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return;
    }
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

const stack = new Stack();
stack.push(34);
stack.push(23);
stack.push(12);
stack.push(78);
stack.pop();
console.log(stack.peek());
stack.printStack()
