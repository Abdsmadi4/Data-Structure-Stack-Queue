const Stack = require("./Stack/Stack");

const s = new Stack();
console.log(s.size());
console.log(s.isEmpty());
s.push(10)
console.log(s.peek());
s.push(20)
console.log(s.peek());
s.push(30)
console.log(s.peek());
console.log(s.size());
console.log(s.isEmpty());
console.log(s.pop());
console.log(s.peek());
console.log(s.size());
s.clear();
console.log(s.peek());

