import bynarySearch from "./search_algorithms/bynary_search";
import recursiveSearch from "./search_algorithms/typescript/recursive_search";
import selectionSort from "./sort_algorithms/typescript/selection_sort";
import bubbleSort from "./sort_algorithms/bubble_sort";
import StackSample from "./stack_algorithms/simple_stack";

// Bynary Search
console.log("Bynary Search");
console.log(bynarySearch([1, 2, 3, 4, 5], 2));
console.log("--------------------");

// Recursive Search
console.log("Recursive Search");
console.log(recursiveSearch([5, 3, 6, 15, 2, 10], 2));
console.log("--------------------");

// Selection Sort
console.log("Selection Sort");
console.log(selectionSort([5, 3, 6, 15, 2, 10], true));
console.log("--------------------");

// Bubble Sort
console.log("Bubble Sort");
console.log(bubbleSort([5, 3, 6, 15, 2, 10], true));
console.log("--------------------");

// Stack
let stack = new StackSample<number>();
console.log("Push items to stack...")
stack.push(46);
stack.push(5);
stack.push(3);
stack.push(87);

console.log("Pop items to stack...")
console.log(stack.pop()); // 87
console.log(stack.pop()); // 3
console.log(stack.pop()); // 5
console.log(stack.pop()); // 46
console.log(stack.pop()); // ops, stack is empty

