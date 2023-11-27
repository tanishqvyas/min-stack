# Min Stack

This is a simple implementation of `Min Stack`. A data structure that supports all the operations of a stack along with an additional method `getMin` that supports fetching the minimum item's value in the stack in constant time.

## Push Operation:

Adds an element to the top of the stack.
If the stack is empty, the element becomes both the top element and the minimum element.
If the stack is not empty, the minimum element is updated based on the newly added element.

## Pop Operation:

Removes the top element from the stack.
The minimum element may need to be updated based on the elements remaining in the stack after the pop operation.

## Peek Operation:

Returns the value of the top element without removing it from the stack.

## Get Minimum Operation:

Returns the minimum element currently stored in the stack.
This operation is performed in constant time, making it an efficient way to retrieve the minimum value.

## Data Structure:

The min stack typically consists of a regular stack for storing elements and an additional data structure (e.g., an auxiliary stack or a linked list) to keep track of the minimum element at each step.

## Time Complexity:

The push, pop, and peek operations have a time complexity of O(1).
The get minimum operation also has a time complexity of O(1) since the minimum element is tracked and updated as elements are pushed and popped.

## Space Complexity:

The space complexity is O(n), where n is the number of elements in the stack. This includes the space required for both the main stack and the auxiliary data structure used to track the minimum element.
The min stack is particularly useful in scenarios where there is a frequent need to find the minimum element in a stack, and efficiency is crucial. It's commonly used in algorithmic and coding interview problems that involve finding the minimum element in a stack in constant time.

## Standard Example

```javascript
const myStack = new MinStack();

myStack.push(1);
myStack.push(4);
myStack.push(5);
myStack.push(0);

myStack.peek(); // 0

myStack.pop(); // removes 0

myStack.getMin(); // 1

myStack.isEmpty(); // false

myStack.limit; // 1000, default limit
```

## Configuration Options

This stack implementation comes with two config options:

- `limit`: The number of elements the stack can accomodate. Default value: `1000`

- `cmp`: A comparison function that returns the mimimum of two items. Default value: `Math.min`

```javascript
const myStack = new MinStack({
  limit: 100,
  cmp: (a, b) => {
    if (a * a < b * b) {
      return a;
    } else {
      b;
    }
  },
});

// or you can pass these fields partially

const myStackLimited = new MinStack({
  limit: 10,
});
```

Please feel free to reach out with further improvements on the same by raising a PR at [@tanishqvyas/min-stack](https://github.com/tanishqvyas/min-stack)
