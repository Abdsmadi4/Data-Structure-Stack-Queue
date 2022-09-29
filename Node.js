'use strict'

class Node{
    constructor(item = null) {
        this.item = item;
        this.next = null;
    }
}

module.exports = Node;