class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    const removedValue = this.front.value;
    this.front = this.front.next;
    this.size--;

    if (this.isEmpty()) {
      this.rear = null;
    }

    console.log("Removed data:", removedValue);
    return removedValue;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let curr = this.front;
    const queueElements = [];
    while (curr) {
      queueElements.push(curr.value);
      curr = curr.next;
    }
    console.log(queueElements.join(" -> "));
  }
}

const newQueue = new QueueLinkedList();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.display();

newQueue.dequeue();
newQueue.display();
