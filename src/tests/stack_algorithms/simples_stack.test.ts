import StackSample from "../../stack_algorithms/simple_stack";

describe("Push two number and pop them", () => {
    let stack = new StackSample<number>();
    stack.push(1);
    stack.push(2);
    const firstPop = stack.pop();
    const secondPop = stack.pop();

    it("should be empty", () => {
        expect(stack.isEmpty()).toBe(true);
    });

    it("first pop should be 2", () => {
        expect(firstPop).toBe(2);
    });

    it("second pop should be 1", () => {
        expect(secondPop).toBe(1);
    });
});
