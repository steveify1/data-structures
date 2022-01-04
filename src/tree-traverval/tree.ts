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
            const { value: treeNode } =  queue.shift();

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

    /**
     * Implements depth-first pre-order tree traversal algorithm
     */
     dfsPreOrderTraverse() {
        const values = [];
        
        if (!this.length) return values;

        let currentNode = this.root;

        function traverse(node: TreeNode) {
            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }

            values.push(node.value);
        }

        traverse(currentNode);       
        return values;
    }

    /**
     * Implements depth-first post-order tree traversal algorithm
     */
     dfsPostOrderTraverse() {
        const values = [];
        
        if (!this.length) return values;

        let currentNode = this.root;

        function traverse(node: TreeNode) {
            values.push(node.value);

            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(currentNode);       
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


console.log(BST.bfsTraverse());
console.log(BST.dfsPreOrderTraverse());
console.log(BST.dfsPostOrderTraverse());
console.log('Done');
