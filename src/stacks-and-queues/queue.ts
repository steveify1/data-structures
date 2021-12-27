import Node from './node';

export default class Queue {
    private first: Node | null = null;
    private last: Node | null = null;
    public length = 0;

    push(value: any) {
        const node = new Node(value);

        if (!this.first) {
            this.first = this.last = node;
        } else {
            this.last.setNext(node);
            this.last = node;
        }

        this.length++;
        return this.length;
    }

    pop() {
        if (!this.length) return null;
        let poppedNode = this.first;;

        if (this.length === 1) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.length--;
        return poppedNode.value;
    }
}

const queue = new Queue();
queue.push('Steve');
queue.push('Ify');
queue.push('Odogwu');
queue.push('Bayce');
console.log(queue);


console.log('======================')
console.log(queue.pop());
console.log(queue);
console.log('======================')
console.log(queue.pop());
console.log(queue);
console.log('======================')
console.log(queue.pop());
console.log(queue);

