"use strict";

const Node = require("../Node");

class StackUsingLinkedList {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(item) {
    const newNode =new Node(item);

    newNode.next = this.top;

    this.top = newNode;

    this.length++;
  }

  pop() {
    if (!this.isEmpty()) {
      const poppedItem = this.top.item;
      this.top =this.top.next;
      this.length--;
      return poppedItem;
    } else {
      return null;
    }
  }

  peek() {
    if(!this.isEmpty()){
      return this.top.item;
    }
    return null;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }

  clear() {
    this.top = null;
    this.length =0;
  }
}

module.exports = StackUsingLinkedList;
