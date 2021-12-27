class Node {
    public value: any;
    public next: Node | null = null;

    constructor(value: any) {
        this.value = value;
    }

    setNext(node: Node) {
        this.next = node;
    }
}

export default class Stack {
    private first: Node | null;
    private last: Node | null;
    public length = 0;

    push(value: any) {
        const node = new Node(value);

        if (!this.first) {
            this.first = this.last = node;
        } else {
            node.setNext(this.first);
            this.first = node;
        }

        this.length++;
        return this.length;
    }

    pop() {
        if (!this.length) return null;
        const poppedNode = this.first;

        if (this.length === 1) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.length--;
        return poppedNode.value;
    }
}

const stack = new Stack();
stack.push('Steve');
stack.push('Ify');
console.log(stack);

console.log('======================')
stack.push('Odogwu');
console.log(stack);
console.log('======================')
console.log(stack.pop());
console.log(stack);
console.log('======================')
console.log(stack.pop());
console.log(stack);
console.log('======================')
console.log(stack.pop());
console.log(stack);
