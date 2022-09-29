"use strict";

const Node = require("../Node");

class QueueUsingLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue = (elm) => {
    let node = new Node(elm),
      current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  };

  dequeue = () => {
    let current = this.head;
    if (current) {
      let item = current.item;
      current = current.next;
      this.head = current;
      this.length--;
      return item;
    }

    return null;
  };

  peek = () => {
    if (this.head) {
      return this.head.item;
    }

    return null;
  };

  isEmpty = () => {
    return this.length === 0;
  };

  size = () => {
    return this.length;
  };

  clear = () => {
    this.head = null;
    this.length = 0;
  };
}

module.exports = QueueUsingLinkedList;
