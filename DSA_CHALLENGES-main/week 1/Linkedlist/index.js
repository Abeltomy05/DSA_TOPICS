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

  addToLast(value) {
    const node = new Node(value);
    if (!this.head) {
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

  addToStart(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  toLinkedList(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.addToLast(arr[i]);
    }
  }

  getSize() {
    return this.size;
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("size less 0 or index not found");
      return;
    }
    if (index === 0) {
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
      fast = fast.next.next;
      slow = slow.next;
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
    let fast = this.head.next;
    while (fast && fast.next) {
      if (fast === slow) {
        return true;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return false;
  }

  LinkedListToCircular() {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = this.head;
  }

  Reverse() {
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
        console.log("not a palindrome");
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
      this.addToStart(value);
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

  toArray() {
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }

  searchValue(value) {
    		if (this.isEmpty()) return -1;
    		let prev = this.head;
    		let i = 0;
    		while (prev) {
    			if (prev.value === value) {
    				return i;
    			}
    			prev = prev.next;
    			i++;
    		}
    		return -1
    	}
    

  print() {
    if (this.isEmpty()) {
      console.log("Is Empty");
    } else {
      let curr = this.head;
      let listValue = "";
      while (curr) {
        listValue += curr.next ? `${curr.value} -> ` : `${curr.value}`;
        curr = curr.next;
      }
      console.log(listValue);
    }
  }
}

const list = new LinkedList();
list.print();

list.addToLast(10);
list.addToLast(20);
list.addToLast(30);
list.print();
list.addToStart(40);
list.print();
list.isPalindrome();
list.toLinkedList([23, 45, 66, 87, 10, 20]);
list.insertAfter(20, 25);
list.print();
console.log("Size of likendList", list.getSize());
list.deleteAt(5);
list.toLinkedList([10, 20, 30]);
list.insertBefore(25, 15);
list.print();
list.deleteValue(87);
list.print();
console.log(list.middleValue());
console.log("After reverse :");
list.Reverse();
list.print();
console.log("after remove middle element")
list.removeMiddle();
list.print();
list.removeDuplicate();
console.log("After removing duplicates:");
list.print();
list.isPalindrome();
list.LinkedListToCircular();

if (list.isCircular()) {
  console.log("The list is circular");
} else {
  console.log("The list is not circular");
}
