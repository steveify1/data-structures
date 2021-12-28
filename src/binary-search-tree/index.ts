class Node {
    public value: any = null;
    public left: Node | null = null;
    public right: Node | null = null;

    constructor(value: any) {
        this.value = value;
    }

    setLeftNode(node: Node) {
        this.left = node;
    }

    setRightNode(node: Node) {
        this.right = node;
    }
}

export default class BST {
    public root: Node | null = null;


    insert(value: any) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.setLeftNode(newNode);
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (!currentNode.right) {
                        currentNode.setRightNode(newNode);
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }

        return this;
    }
}

const bst = new BST();

console.log(bst);

console.log('======================');
bst.insert(3);
console.log(bst);
console.log('======================');
bst.insert(6);
console.log(bst);
console.log('======================');
bst.insert(5);
console.log(bst);
console.log('======================');
bst.insert(7);
console.log(bst);
console.log('======================');
bst.insert(2);
console.log(bst.root);
