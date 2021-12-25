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
}


const singlyLinkedList = new SinglyLinkedList();

console.log(singlyLinkedList.length);
singlyLinkedList.push('Hello');
console.log(singlyLinkedList.length);
singlyLinkedList.push('World');
console.log(singlyLinkedList.length);

console.log(singlyLinkedList.head);
console.log(singlyLinkedList.tail);

