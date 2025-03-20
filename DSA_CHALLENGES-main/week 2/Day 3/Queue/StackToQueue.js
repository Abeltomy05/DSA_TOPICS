class StackToQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    if (!this.stack2.length) {
      console.log("Queue is empty");
      return null;
    }
    return this.stack2.pop();
  }

  display() {
    let queue = [];
    for (let i = this.stack2.length - 1; i >= 0; i--) {
      queue.push(this.stack2[i]);
    }
    for (let i = 0; i < this.stack1.length; i++) {
      queue.push(this.stack1[i]);
    }
    console.log(queue.join(" -> "));
  }
}

let queue = new StackToQueue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
queue.display();

queue.dequeue();
queue.display();

queue.dequeue();
queue.display();
queue.dequeue();
queue.display();
