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
        if (!this.length) {
            this.push(value);
        } else {
            const oldHead = this.head;
            this.head = new Node<T>(value);
            this.head.setNext(oldHead);
            this.incrementLength();
        }
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

    /**
     * Updates the value of a node at a given position in a list.
     * 
     * @param { number } index - A number starting at zero
     * @param { any } value - The value to set the node to.
     */
    set<T>(index: number, value: T) {
        const node = this.getNodeAt(index);
        if (!node) throw Error(`No Node At Position: ${index}`);
        node.setValue(value);
    }

    /**
     * Inserts a new node at a specified position in the list
     * 
     * @param { number } index - A number starting at zero
     * @param { any } value - The value to set the node to.
     */
    insert<T>(index: number, value: T) {
        if (index < 0) return false;

        if (index === 0) {
            this.unshift(value);
        } else if (index >= this.length) {
            while(this.length - 1 < index) {
                this.push(this.length == index ? value : null);
            }
        } else {
            const newNode = new Node<T>(value);
            let previousNode = this.getNodeAt(index - 1);
            let currentNodeAtIndex = previousNode.next;
            previousNode.setNext(newNode);
            newNode.setNext(currentNodeAtIndex); 
            this.incrementLength();
        }

        return true;
    }

    /**
     * Inserts a new node at a specified position in the list
     * 
     * @param { number } index - A number starting at zero
     * @param { any } value - The value to set the node to.
     */
     remove<T>(index: number) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === (this.length - 1)) return this.pop();

        let previousNode = this.getNodeAt(index - 1);
        let nodeAtIndex = previousNode.next;
        let nextNode = nodeAtIndex.next;
        previousNode.setNext(nextNode);
        this.decrementLength();

        return nodeAtIndex.value;
    }

    /**
     * Reverses a singly linked list
     */
    reverse() {
        let currentNode = this.head;
        let previousNode = null;
        let nextNode: Node | null;

        for(let i = 1; i <= this.length; i++) {
            nextNode = currentNode.next;
            currentNode.setNext(previousNode);
            previousNode = currentNode;
            currentNode = nextNode;
        }

        this.head = previousNode;
        this.tail = currentNode;
    }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push('Hello');
singlyLinkedList.push('Super');
singlyLinkedList.push('Sweet');
singlyLinkedList.push('Planet');
singlyLinkedList.push('Earth');

// singlyLinkedList.forEach((node) => console.log(node.value));
// console.log('=================================');
// singlyLinkedList.insert(0, 'Precious');
// singlyLinkedList.forEach((node) => console.log(node.value));
// console.log('Length:', singlyLinkedList)
// console.log('=================================');
// singlyLinkedList.insert(9, [0, 1, 3]);
// singlyLinkedList.forEach((node) => console.log(node.value));
// console.log('=================================');
// singlyLinkedList.set(6, new Date());
// singlyLinkedList.set(7, new Date());
// singlyLinkedList.set(8, new Date());
// singlyLinkedList.forEach((node) => console.log(node.value));
// console.log('=================================');
// singlyLinkedList.remove(0);
// singlyLinkedList.remove(6);
// console.log(singlyLinkedList.remove(3))
// singlyLinkedList.forEach((node) => console.log(node.value));


singlyLinkedList.forEach((node) => console.log(node?.value));
console.log('=================================');
singlyLinkedList.reverse()
singlyLinkedList.forEach((node) => console.log(node?.value));
