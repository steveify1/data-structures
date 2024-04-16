import { LinkedList } from "./list";
import { Node } from "./node";

const linkedList = new LinkedList<number>();

linkedList.insert(new Node<number>(6));
linkedList.insert(new Node<number>(30));
linkedList.insert(new Node<number>(4));
linkedList.insert(new Node<number>(71));

console.log(linkedList.search(71));
