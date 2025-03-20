class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  sortwithstack() {
    let tempstack = [];
    let input = this.stack;

    while (input.length > 0) {
      let tmp = input.pop();
      while (tempstack.length > 0 && tempstack[tempstack.length - 1] < tmp) {
        input.push(tempstack.pop());
      }
      tempstack.push(tmp);
    }
    this.stack = tempstack;
  }

  printStack() {
    console.log(this.stack.join(" -> "));
  }
}

const stack = new Stack();
stack.push(5);
stack.push(1);
stack.push(4);
stack.push(2);
stack.push(3);

console.log("Before sorting:");
stack.printStack();

stack.sortwithstack();

console.log("After sorting:");
stack.printStack();
