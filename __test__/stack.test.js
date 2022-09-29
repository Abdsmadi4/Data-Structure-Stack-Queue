"use strict";

const Stack = require("../StackAndQueue/Stack");

describe("Stack class", () => {
  it("test create an instance of Stack", () => {
    expect(new Stack()).toBeInstanceOf(Stack);
  });
  it("test value of top to be null and length to be zero", () => {
    const newStack = new Stack();
    expect(newStack.top).toBeNull();
    expect(newStack.size()).toEqual(0);
  });
  it("test push, peek and size methods", () => {
    const newStack = new Stack();
    expect(newStack.peek()).toBeNull();
    expect(newStack.size()).toEqual(0);

    newStack.push(10);
    expect(newStack.peek()).toEqual(10);
    expect(newStack.size()).toEqual(1);

    newStack.push(20);
    expect(newStack.peek()).toEqual(20);
    expect(newStack.size()).toEqual(2);

    newStack.push(30);
    expect(newStack.peek()).toEqual(30);
    expect(newStack.size()).toEqual(3);
  });
  it("test isEmpty method", () => {
    const newStack = new Stack();
    expect(newStack.isEmpty()).toBeTruthy();
    newStack.push(10);
    expect(newStack.isEmpty()).toBeFalsy();
  });
  it("test pop method", () => {
    const newStack = new Stack();
    expect(newStack.pop()).toBeNull();

    newStack.push(10);
    expect(newStack.pop()).toEqual(10);

    newStack.push(10);
    newStack.push(20);

    expect(newStack.pop()).toEqual(20);
    expect(newStack.peek()).toEqual(10);
    expect(newStack.length).toEqual(1);
  });
  it("test clear method", () => {
    const newStack = new Stack();
    newStack.push(10);
    newStack.push(20);
    expect(newStack.size()).toEqual(2);
    newStack.clear();
    expect(newStack.peek()).toBeNull();
    expect(newStack.size()).toEqual(0);
    expect(newStack.isEmpty()).toBeTruthy();
  });
});
