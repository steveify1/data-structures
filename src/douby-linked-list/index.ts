class Node<T=any> {
    public value: T;
    public next: Node = null;
    public previous: Node = null;

    constructor(value: T) {
        this.value = value;
    }

    setPrevious(node: Node) {
        this.previous = node;
    }

    setNext(node: Node) {
        this.next = node;
    }

    setValue(value: T) {
        this.value = value;
    }
} 

export default class DoublyLinkedList {
    public head: Node | null = null;
    public tail: Node | null = null;
    public length = 0;

    private incrementLength() {
        this.length++;
    }

    private decrementLength() {
        this.length--;
    }

    forEach(cb: (n: Node) => any) {
        let i = 1;
        let currentNode = this.head;

        while(i <= this.length) {
            cb(currentNode);
            currentNode = currentNode.next;
            i++;
        }
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
            node.setPrevious(this.tail);
            this.tail.setNext(node);
            this.tail = node;
        }

        this.incrementLength();
    }

    /**
     * Removes the last node from the end of the list
     */
    pop() {
        const valueInPoppedNode = this.tail && this.tail.value;

        if (this.length <= 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.previous;
            this.tail.setNext(null);
        }

        this.decrementLength();
        return valueInPoppedNode;
    }

    /**
     * Removes a node from the beginning of the list
     */
    shift() {
        if (!this.length) return null;

        let valueOfOldHead = this.head.value;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.setPrevious(null);
        }

        this.decrementLength();
        return valueOfOldHead;
    }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push('Hello');
doublyLinkedList.push('Super');

doublyLinkedList.forEach((node) => console.log(node.value));

console.log('=================================');
doublyLinkedList.shift();
doublyLinkedList.forEach((node) => console.log(node?.value));

