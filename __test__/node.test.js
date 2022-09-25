"use strict";

const Node = require("../Stack/Node");

describe("Node class", () => {
  it("test create an instance of Node", () => {
    expect(new Node()).toBeInstanceOf(Node);
  });
  it("test value of item and next to be null", () => {
    const newNode = new Node();
    expect(newNode.item).toBeNull();
    expect(newNode.next).toBeNull();
  });
  it("test value of item", () => {
    const newNode = new Node(10);
    expect(newNode.item).toEqual(10);
    expect(newNode.next).toBeNull();
  });
});
