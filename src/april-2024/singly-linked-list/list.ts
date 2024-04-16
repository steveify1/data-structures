import { Node } from "./node";

export class LinkedList<T> {
  head: Node<T>;
  tail: Node<T>;

  insert(node: Node<T>) {
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.setNext(node);
      this.tail = node;
    }
  }

  getAll() {
    return this.head;
  }

  search(value: T): boolean {
    let currentNode = this.head;

    do {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    } while (currentNode);

    return false;
  }
}
