import { Queue } from './queue';

export class TreeNode {
    public left: TreeNode | null = null;
    public right: TreeNode | null = null

    constructor(public value: any) {}
}

/**
 * An implementation of a binary search tree
 */
export class BinarySearchTree {
    public root: TreeNode | null = null;
    public length = 0;

    /**
     * Adds a new node to the tree
     */
    insert(value: any) {
        const node = new TreeNode(value);

        if (!this.root) {
            this.root = node;
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                } else {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                }
            }
        }

        this.length++;
    }

    /**
     * Implements breadth-first tree traversal
     */
    bfsTraverse() {
        const queue = new Queue<TreeNode>();
        const values = [];
        
        if (!this.length) return values;

        queue.push(this.root);

        while(queue.length) {
            console.log(queue.length);
            const { value: treeNode } =  queue.shift();
            console.log({ treeNode })

            if (treeNode.left) {
                queue.push(treeNode.left);
            }

            if (treeNode.right) {
                queue.push(treeNode.right);
            }

            values.push(treeNode.value);
        }

        return values;
    }
}

const BST = new BinarySearchTree();
BST.insert(4);
BST.insert(3);
BST.insert(7);
BST.insert(2);
BST.insert(4);
BST.insert(5);
BST.insert(6);
BST.insert(9);
BST.insert(4);
console.log(BST);

console.log(BST.bfsTraverse())
