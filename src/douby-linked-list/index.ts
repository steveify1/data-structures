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

    /**
     * Adds a new node with a value at the end of the list
     * 
     * @param { any } value - A value to add at the end of the list
     */
    unshift<T>(value: T) {
        const node = new Node<T>(value);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.head.setPrevious(node);
            node.setNext(this.head);
            this.head = node;
        }

        this.incrementLength();
    }

    getNodeAt(index: number): Node | null {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;

        const midPoint = (this.length - 1) / 2;
        const isIndexLowerThanMidPoint = index <= midPoint;
        let currentNode = isIndexLowerThanMidPoint ? this.head : this.tail;
        let counter;

        if (isIndexLowerThanMidPoint) {
            counter = 0;

            while (counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }

        } else {
            counter = this.length - 1;

            while (counter !== index) {
                currentNode = currentNode.previous;
                counter--;
            }
        }

        return currentNode;
    }
    
    /**
     * Returns the value of a node at a specified index (position)
     * 
     * @param { number } index - A specific position
     */
    get(index: number) {
        const node = this.getNodeAt(index);
        return node && node.value;
    }

    /**
     * Updates the value of a node at a given position
     * 
     * @param { number } index - A specific position
     * @param { any } value - A new value for the node
     */
    set(index: number, value: any) {
        const node = this.getNodeAt(index);
        if (!node) return false;
        node.setValue(value);
        return true;
    }

    /**
     * Inserts a new node at a specific position
     * 
     * @param { number } index - A specific position
     * @param { any } value - A new value for the node
     */
    insert(index: number, value: any) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);


        const newNode = new Node(value);
        const nodeBeforeIndex = this.getNodeAt(index - 1);
        const nodeAtIndex = nodeBeforeIndex.next;

        nodeBeforeIndex.setNext(newNode);
        nodeAtIndex.setPrevious(newNode);
        newNode.setPrevious(nodeBeforeIndex);
        newNode.setNext(nodeAtIndex);

        this.incrementLength();
        return true;
    }

    /**
     * Removes a node from a specific position
     * 
     * @param { number } index - A specific position
     */
    remove(index: number) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const nodeAtIndex = this.getNodeAt(index);
        nodeAtIndex.previous.setNext(nodeAtIndex.next);
        nodeAtIndex.next.setPrevious(nodeAtIndex.previous);
        nodeAtIndex.setPrevious(null);
        nodeAtIndex.setNext(null);
        this.decrementLength();
        return true;
    }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push('Steve');
doublyLinkedList.push('Time');
doublyLinkedList.push(new Date());
doublyLinkedList.push('Money');
doublyLinkedList.push(12);
doublyLinkedList.push([2, 55, 9]);
doublyLinkedList.push('Okon Precious');
// doublyLinkedList.forEach((node) => console.log(node?.value));

// console.log('=================================');
// doublyLinkedList.insert(6, 'Odogwu');
// doublyLinkedList.forEach((node) => console.log(node?.value));
// console.log('=================================');
// doublyLinkedList.remove(4);
// doublyLinkedList.forEach((node) => console.log(node?.value));
// console.log('=================================');
// doublyLinkedList.remove(0);
// doublyLinkedList.forEach((node) => console.log(node?.value));