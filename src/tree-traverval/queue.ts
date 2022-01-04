class Node<T = any> {
    public next: Node<T> | null = null;
    
    constructor(public value: T) {}

    setNext(node: Node<T>) {
        this.next = node;
    }
}

export class Queue<T> {
    public first: Node<T> | null;
    public last: Node<T> | null;
    public length = 0;

    push(value: any) {
        const node = new Node(value);

        if (!this.first) {
            this.first = this.last = node;
        } else {
            const currentLast = this.last;
            currentLast.setNext(node);
            this.last = node;
        }

        this.length++;
    }

    shift() {
        if (!this.length) return null;
        const removedNode = this.first;

        if (this.length === 1) {
            this.first = this.last = null
        } else {
            this.first = this.first.next;
        }
        
        this.length--;
        return removedNode;
    }
}
