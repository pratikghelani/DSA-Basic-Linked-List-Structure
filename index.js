class Node {
  constructor(data) {
    this.data = data;
    this.next = null; 
  }
}

class LinkedList {
  constructor() {
    this.head = null; 
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Delete a node by value
  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log("Linked List:");
list.printList(); 

console.log("Find 20:", list.find(20)); 

list.delete(20);
console.log("After deleting 20:");
list.printList(); 
