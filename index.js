const Stack = require("./StackAndQueue/Stack");

const s = new Stack();
console.log(s.size());
console.log(s.isEmpty());
s.push(10)

s.push(20)
console.log(s.peek());
s.push(30)
console.log(s.peek());
console.log(s.size());
console.log(s.isEmpty());
console.log(s.pop());
console.log(s.peek());
console.log(s.size());
console.log(s);
s.clear();
console.log(s.peek());

const Queue = require("./StackAndQueue/Queue");

const q = new Queue();
console.log(q.isEmpty());
q.enqueue(10);
console.log(q.size());
q.enqueue(20);
q.enqueue(30);
console.log(q.size());
console.log(q.dequeue());
console.log(q.size());
console.log(q.peek());
