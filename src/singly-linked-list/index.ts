class Node<T=any> {
    public value: T;
    public next: Node;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }

    setNext(node: Node) {
        this.next = node;
    }
} 

export default class SinglyLinkedList {
    public head: Node | null = null;
    public tail: Node | null = null;
    public length = 0;

    private incrementLength() {
        this.length++;
    }

    private decrementLength() {
        this.length--;
    }

    /**
     * Adds a new node with a value at the end of the list
     * 
     * @param { any } value - A value to add at the end of the list
     */
    push<T>(value: T) {
        const node = new Node<T>(value);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.setNext(node);
            this.tail = node;
        }

        this.incrementLength();
    }

    /**
     * Removes the last node in a linked list and returns the value of the node.
     */
    pop() {
        if (!this.length) return null;

        let currentNode: Node | null = this.head;
        let previousNode: Node = currentNode;

        while(currentNode.next) { 
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            previousNode.setNext(null);
            this.tail = previousNode;
        }

        this.decrementLength();
        return currentNode.value;
    }

    /**
     * Removes the first node in a linked list and returns the value of the node.
     */
     shift() {
        if (!this.length) return null;
        const valueOfRemovedNode = this.head.value;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.decrementLength();
        return valueOfRemovedNode;
    }
}


const singlyLinkedList = new SinglyLinkedList();


singlyLinkedList.push('Hello');
singlyLinkedList.push('Super');
singlyLinkedList.push('Sweet');
singlyLinkedList.push('Planet');
singlyLinkedList.push('Earth');

console.log(singlyLinkedList);

singlyLinkedList.shift();
console.log(singlyLinkedList);


singlyLinkedList.shift();
console.log(singlyLinkedList);

singlyLinkedList.shift();
console.log(singlyLinkedList);

singlyLinkedList.shift();
console.log(singlyLinkedList);

singlyLinkedList.shift();
console.log(singlyLinkedList);

singlyLinkedList.push('Super');
singlyLinkedList.push('Planet');
console.log(singlyLinkedList);
singlyLinkedList.shift();
console.log(singlyLinkedList);