"use strict";

const Queue = require("../StackAndQueue/Queue");
describe("Queue class", () => {
     it("test create an instance of Queue", () => {
       expect(new Queue()).toBeInstanceOf(Queue);
     });
     it("test value of head to be null and length to be zero", () => {
       const newQ = new Queue();
       expect(newQ.head).toBeNull();
       expect(newQ.size()).toEqual(0);
     });
      it("test enqueue, peek and size methods", () => {
        const newQ = new Queue();
        expect(newQ.peek()).toBeNull();
        expect(newQ.size()).toEqual(0);

        newQ.enqueue(10);
        newQ.enqueue(20);
        expect(newQ.peek()).toEqual(10);
        expect(newQ.size()).toEqual(2);
      });
        it("test isEmpty method", () => {
          const newQ = new Queue();
          expect(newQ.isEmpty()).toBeTruthy();
          newQ.enqueue(10);
          expect(newQ.isEmpty()).toBeFalsy();
        });
        it("test dequeue method", () => {
          const newQ = new Queue();
          expect(newQ.dequeue()).toBeNull();

          newQ.enqueue(10);
          expect(newQ.dequeue()).toEqual(10);

          newQ.enqueue(10);
          newQ.enqueue(20);

          expect(newQ.dequeue()).toEqual(10);
          expect(newQ.peek()).toEqual(20);
          expect(newQ.size()).toEqual(1);
        });

        it("test clear method", () => {
          const newQ = new Queue();
          newQ.enqueue(10);
          newQ.enqueue(20);
          expect(newQ.size()).toEqual(2);
          newQ.clear();
          expect(newQ.peek()).toBeNull();
          expect(newQ.size()).toEqual(0);
          expect(newQ.isEmpty()).toBeTruthy();
        });
});