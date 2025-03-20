class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    let startIndex = index;

    while (this.table[index] !== undefined && this.table[index][0] !== key) {
      index = (index + 1) % this.size;
      if (index === startIndex) {
        throw new Error("Hash Table is full!");
      }
    }
    this.table[index] = [key, value];
  }

  get(key) {
    let index = this.hash(key);
    let startIndex = index;

    while (this.table[index] !== undefined) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + 1) % this.size;
      if (index === startIndex) {
        break;
      }
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    let startIndex = index;

    while (this.table[index] !== undefined) {
      if (this.table[index][0] === key) {
        this.table[index] = undefined;
        return;
      }
      index = (index + 1) % this.size;
      if (index === startIndex) {
        break;
      }
    }
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] !== undefined) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(10);

table.set("name", "shan");
table.set("age", 22);
table.set("mane", "shanu");

table.display();

console.log("Get 'name':", table.get("name"));
console.log("Get 'age':", table.get("age"));

table.remove("name");
console.log("After removing 'name':");
table.display();
