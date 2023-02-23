type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head; // instead of optional chain-ing head?.value in the return statement, it can be 'as Node<T>' here as well;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as Node<T>;
        this.head = head.prev; // as for the if statement, optional chaining can be used here to avoid TS erroring
        // non gc lnguages would require to free up memory here
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
