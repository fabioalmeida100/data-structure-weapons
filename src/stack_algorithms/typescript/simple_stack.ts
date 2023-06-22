export default class StackSample<T> {
    private stack: T[] = [];

    public push(value: T): void {
        this.stack.push(value);
    }

    public pop(): T | any {
        return this.stack.pop();
    }

    public isEmpty(): boolean {
        return this.stack.length === 0;
    }

    public size(): number {
        return this.stack.length;
    }

    public clear(): void {
        this.stack = [];
    }
}
