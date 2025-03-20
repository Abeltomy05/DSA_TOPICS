class Stack {
  constructor() {
    this.stack = [];
  }

  push(element){
    this.stack.push(element)
  }

  pop(element){
    if(this.isEmpty()){
        return "Stack is Empty, cannot do pop"
    }
    return this.stack.pop()
  }

  peek(){
    if(this.isEmpty()){
        return "Stack is Empty, cannot do Peek "
    }
    return this.stack[this.size()-1];
  }

  isEmpty(){
    return this.size() ===0
  }

  size(){
    return this.stack.length
  }

  display() {
    if (this.isEmpty()) {
      return "Stack is Empty, nothing to display";
    }
    return this.stack; 
  }
}


const stack  = new Stack();

stack.push(10)
stack.push(30)
stack.push(29)

console.log(stack.display());
console.log(stack.size())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.display());