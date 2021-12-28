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
                    }

                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.setRightNode(newNode);
                        break;
                    }

                    currentNode = currentNode.right;
                }
            }
        }

        return this;
    }

    /**
     * Searches for a node with a value. Returns the first node with the value.
     * Returns null if no node with the specified value is found.
     * 
     * @param { any } value - The value of a node
     */
    search(value: any) {
        let currentNode = this.root;
        if (!currentNode || currentNode.value === value) return currentNode;

        while(currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left || currentNode.left.value === value) {
                    currentNode = currentNode.left;
                    break;
                }
                
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right || currentNode.right.value === value) {
                    currentNode = currentNode.right;
                    break;
                }
                
                currentNode = currentNode.right;
            }
        }

        return currentNode;
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

console.log('======================');
console.log(bst.search(40));

