export default class Node {
    public value: any;
    public next: Node | null = null;

    constructor(value: any) {
        this.value = value;
    }

    setNext(node: Node) {
        this.next = node;
    }
}