import bynary_search from "./src/search_algorithms/typescript/bynary_search";
import recursiveSearch from "./src/search_algorithms/typescript/recursive_search";
import selectionSort from "./src/sort_algorithms/typescript/selection_sort";
import bubbleSort from "./src/sort_algorithms/typescript/bubble_sort";
import StackSample from "./src/stack_algorithms/typescript/stack";

// Bynary Search
console.log("Bynary Search");
console.log(bynary_search([1, 2, 3, 4, 5], 2));
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

