class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  addToLast(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  addToStart(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  toLinkedList(arr) {
    for (const value of arr) {
      this.addToLast(value);
    }
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
    } else if (index === this.size - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
    }
    this.size--;
  }

  deleteValue(data) {
    let curr = this.head;
    while (curr) {
      if (curr.value === data) {
        if (curr === this.head) {
          this.head = curr.next;
          if (this.head) this.head.prev = null;
          else this.tail = null;
        } else if (curr === this.tail) {
          this.tail = curr.prev;
          this.tail.next = null;
        } else {
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
        }
        this.size--;
        return;
      }
      curr = curr.next;
    }
  }

  middleValue() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow.value;
  }

  removeMiddle() {
    if (this.size <= 1) return;

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast && fast.next) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }

    prev.next = slow.next;
    if (slow.next) slow.next.prev = prev;
    if (slow === this.tail) this.tail = prev;
    this.size--;
  }

  removeDuplicate() {
    const seen = new Set();
    let curr = this.head;

    while (curr) {
      if (seen.has(curr.value)) {
        if (curr === this.tail) {
          this.tail = curr.prev;
          this.tail.next = null;
        } else {
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
        }
        this.size--;
      } else {
        seen.add(curr.value);
      }
      curr = curr.next;
    }
  }

  Reverse() {
    let curr = this.head;
    let temp = null;

    while (curr) {
      temp = curr.prev;
      curr.prev = curr.next;
      curr.next = temp;
      curr = curr.prev;
    }

    if (temp) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }

  isPalindrome() {
    if (this.size <= 1) return true;

    let left = this.head;
    let right = this.tail;

    while (left !== right && left.prev !== right) {
      if (left.value !== right.value) return false;
      left = left.next;
      right = right.prev;
    }
    return true;
  }

  insertAfter(target, value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === target) {
        const node = new Node(value);
        node.next = curr.next;
        node.prev = curr;
        if (curr === this.tail) this.tail = node;
        else curr.next.prev = node;
        curr.next = node;
        this.size++;
        return;
      }
      curr = curr.next;
    }
  }

  insertBefore(target, value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === target) {
        const node = new Node(value);
        node.next = curr;
        node.prev = curr.prev;
        if (curr === this.head) this.head = node;
        else curr.prev.next = node;
        curr.prev = node;
        this.size++;
        return;
      }
      curr = curr.next;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("Is Empty");
      return;
    }
    let curr = this.head;
    let listValue = "";
    while (curr) {
      listValue += curr.next ? `${curr.value} <-> ` : curr.value;
      curr = curr.next;
    }
    console.log(listValue);
  }
}

const list = new DoublyLinkedList();

console.log("Initial list:");
list.print();

console.log("\nAfter adding elements to last:");
list.addToLast(10);
list.addToLast(20);
list.addToLast(30);
list.print();

console.log("\nAfter adding element to start:");
list.addToStart(5);
list.print();

console.log("\nConverting array to linked list:");
list.toLinkedList([40, 50, 60]);
list.print();

console.log("\nAfter deleting index 2:");
list.deleteAt(2);
list.print();

console.log("\nAfter deleting value 40:");
list.deleteValue(40);
list.print();

console.log("\nMiddle value:", list.middleValue());

console.log("\nAfter inserting 25 after 10:");
list.insertAfter(10, 25);
list.print();

console.log("\nAfter inserting 15 before 25:");
list.insertBefore(25, 15);
list.print();

console.log("\nAfter reversing:");
list.Reverse();
list.print();

console.log("\nTest palindrome:");
const palindromeList = new DoublyLinkedList();
palindromeList.toLinkedList([1, 2, 3, 2, 1]);
palindromeList.print();
console.log("Is palindrome:", palindromeList.isPalindrome());

console.log("\nAfter removing duplicates:");
const dupList = new DoublyLinkedList();
dupList.toLinkedList([1, 2, 2, 3, 3, 4]);
console.log("Before:");
dupList.print();
dupList.removeDuplicate();
console.log("After:");
dupList.print();
