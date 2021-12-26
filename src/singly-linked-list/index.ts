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

    setValue(value: T) {
        this.value = value;
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

    /**
     * Adds a new node with a value at the start of the list
     * 
     * @param { any } value - A value to add at the start of the list
     */
     unshift<T>(value: T) {
        const oldHead = this.head;
        this.head = new Node<T>(value);
        this.head.setNext(oldHead);
    }

    private getNodeAt(index: number): Node | null {
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let currentNode = this.head;

        while(counter < this.length) {
            if (counter == index) break;
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    /**
     * Returns the value of a node at a given position in a list. Returns null
     * if no node is found at the specified position.
     * 
     * @param { number } index - A number starting at zero
     */
    get(index: number): Node | null {
        const node = this.getNodeAt(index);
        return node && node.value;
    }

    set<T>(index: number, value: T) {
        const node = this.getNodeAt(index);
        if (!node) throw Error(`No Node At Position: ${index}`);
        node.setValue(value);
    }
}


const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push('Hello');
singlyLinkedList.push('Super');
singlyLinkedList.push('Sweet');
singlyLinkedList.push('Planet');
singlyLinkedList.push('Earth');

console.log(singlyLinkedList.get(2));
singlyLinkedList.set(2, 'Precious')
console.log(singlyLinkedList.get(2));
console.log(singlyLinkedList);

