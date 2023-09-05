import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }
  prepend(value) {
    const node = new Node();
    node.value = value;
    node.nextNode = this.listHead;
    this.listHead = node;
  }
  append(value) {
    const node = new Node();
    node.value = value;
    node.nextNode = null;
    let tmp = this.listHead;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = node;
  }

  size() {
    if (this.listHead == null) return 0;
    let size = 0;
    let tmp = this.listHead;
    while (tmp.nextNode != null) {
      size++;
      tmp = tmp.nextNode;
    }
    size++;
    return size;
  }
  head() {
    return this.listHead;
  }
  tail() {
    if (this.listHead == null) throw new Error("List is empty");
    let tmp = this.listHead;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }
  at(index) {
    if (this.listHead == null) throw new Error("List is empty");
    let tmp = this.listHead;
    for (let i = 0; i < index; i++) {
      if (tmp.nextNode == null) return `No index ${index}`;
      tmp = tmp.nextNode;
    }
    return tmp;
  }
  pop() {
    if (this.listHead == null) throw new Error("List is empty");
    if (this.listHead.nextNode == null) return (this.listHead = null);
    let tmp = this.listHead;
    while (tmp.nextNode.nextNode != null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = null;
  }
  contains(value) {
    let length = this.size();
    let tmp = this.listHead;
    for (let i = 0; i < length; i++) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  }
  find(value) {
    let length = this.size();
    let tmp = this.listHead;
    for (let i = 0; i < length; i++) {
      if (tmp.value === value) return i;
      tmp = tmp.nextNode;
    }
    return false;
  }
  toString() {
    if (this.listHead == null) return null;
    let tmp = this.listHead;
    let string = "";
    while (tmp.nextNode != null) {
      string += `${tmp.value} -> `;
      tmp = tmp.nextNode;
    }
    string += `${tmp.value} -> null`;
    return string;
  }
  insertAt(value, index) {
    if(index > this.size()) throw new Error("Index is longer than list");
      const tmpBefore = this.at(index - 1);
      const tmpAfter = this.at(index);
      const node = new Node();
      node.value = value;
      tmpBefore.nextNode = node;
      node.nextNode = tmpAfter;

  }
  removeAt(index){
    if(index > this.size()) throw new Error("Index is longer than list");
    const tmp = this.at(index-1);
    tmp.nextNode = this.at(index+1);
}
}
