import Queue from "./Queue.js";

const colors = new Queue();

colors.enqueue("blue");
colors.enqueue("red");
colors.enqueue("green");
colors.enqueue("yellow");

// get a list of all the elements in the array
console.log(colors); 
// output: items: [ 'blue', 'red', 'green', 'yellow' ]


// remove head
console.log("Remove Head", colors.dequeue()); 
console.log(colors); 
// output: items: ['red', 'green', 'yellow' ]

// PEEK at the first item in the array
console.log("Array Head: ", colors.peek()); 
// output: red

// Get the size of the array
console.log("Array Size: ", colors.getSize()); 
// output: red

// Check if Array is empty or not
console.log("is Array Empty: ", colors.isEmpty()); 
// output: red