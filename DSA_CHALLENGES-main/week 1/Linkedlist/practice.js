class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  addToFirst(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  addToLast(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  toLinkedList(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.addToLast(arr[i]);
    }
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      this.head = this.head.next;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }

  deleteValue(data) {
    if (this.isEmpty()) {
      return;
    }
    if (this.head.value === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let curr = this.head;
    while (curr.next && curr.next.value !== data) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
      this.size--;
    }
  }

  middleValue() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }

  removeMiddle() {
    if (this.isEmpty() || !this.head.next) {
      return;
    }
    if (!this.head.next.next) {
      this.head.next = null;
      this.size--;
      return;
    }
    let slow = this.head;
    let fast = this.head;
    let prev = null;
    while (fast && fast.next) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
    prev.next = slow.next;
    this.size--;
  }

  removeDuplicate() {
    if (this.isEmpty()) {
      console.log("Empty");
      return;
    }
    const seen = new Set();
    let curr = this.head;
    seen.add(curr.value);
    while (curr && curr.next) {
      if (seen.has(curr.next.value)) {
        curr.next = curr.next.next;
      } else {
        seen.add(curr.next.value);
        curr = curr.next;
      }
    }
  }

  isCircular() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      if (fast === slow && slow !== this.head) {
        return true;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return false;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    this.head = prev;
  }

  isPalindrome() {
    if (!this.head || !this.head.next) {
      console.log("it is a palindrome");
      return true;
    }
    let slow = this.head;
    let fast = this.head;
    let prev = null;
    while (fast && fast.next) {
      fast = fast.next.next;
      let nextNode = slow.next;
      slow.next = prev;
      prev = slow;
      slow = nextNode;
    }
    let secondHalf = slow;
    if (fast) {
      secondHalf = slow.next;
    }
    let firstHalf = prev;
    while (firstHalf && secondHalf) {
      if (firstHalf.value !== secondHalf.value) {
        console.log("Not a palindrome");
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
    console.log("it is a palindrome");
    return true;
  }

  insertAfter(target, value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === target) {
        const node = new Node(value);
        node.next = curr.next;
        curr.next = node;
        this.size++;
        return;
      }
      curr = curr.next;
    }
    console.log("Target not found");
  }

  insertBefore(target, value) {
    if (this.isEmpty()) return;
    if (this.head.value === target) {
      this.addToFirst(value);
      return;
    }
    let curr = this.head;
    while (curr.next && curr.next.value !== target) {
      curr = curr.next;
    }
    if (curr.next) {
      const node = new Node(value);
      node.next = curr.next;
      curr.next = node;
      this.size++;
    } else {
      console.log("Target not found");
    }
  }

  removeFirst() {
    if (this.isEmpty()) return;
    this.head = this.head.next;
    this.size--;
  }

  removeLast() {
    if (this.isEmpty()) return;
    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }
    let curr = this.head;
    while (curr.next && curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
    this.size--;
  }

  print() {
    if (this.isEmpty()) {
      console.log("It is Empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += curr.next ? `${curr.value}->` : `${curr.value}`;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
list.print();
console.log(`\nafter added elements in first of linkedlist:\n`);
list.addToFirst(2);
list.addToFirst(2);
list.addToFirst(3);
list.addToFirst(4);
list.print();

console.log(`\nafter added elements in end of linkedlist:\n`);
list.addToLast(8);
list.addToLast(7);
list.addToLast(6);
list.print();

console.log(`\nafter added array in linkedlist:\n`);
list.toLinkedList([2, 4, 5, 7]);
list.print();

console.log(`\nDelete using index :\n`);
list.deleteAt(2);
list.print();
console.log(`\nDelete specific value :\n`);
list.deleteValue(8);
list.print();
console.log(`\nMiddle value :`, list.middleValue());
console.log(`\nAfter remove middle :\n`);
list.removeMiddle();
list.print();
console.log(`\nAfter remove Duplicates :\n`);
list.removeDuplicate();
list.print();
console.log(`\nLinked list is Circular  :`, list.isCircular());
console.log(`\nReverse of linkedlist  :\n`);
list.reverse();
list.print();
console.log(`\nAfter added a element :\n`);
list.insertAfter(2, 5);
list.print();
list.insertBefore(5, 1);
list.print();
console.log(`\nAfter Remove last element :\n`);
list.removeLast();
list.print();
console.log("\n");
list.isPalindrome();
