// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require("../lib/Stack");

function removeDuplicates(stack) {
  // your code here
  let tempStack = new Stack();
  let subStack = new Stack();

  while (!stack.isEmpty()) {
    let removeEl = tempStack.pop();
    let isSame = false;

    while (!tempStack.isEmpty()) {
      let tempVal = tempStack.pop();

      if (tempVal === removeEl) {
        isSame = true;
      }

      subStack.push(tempStack);
    }

    while (!tempStack.isEmpty()) {
      stack.push(tempStack.pop());
    }

    if (!isSame) {
      tempStack.push(removeEl);
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack);
console.log(stack.printStack()); // [2, 5, 1, 3]
