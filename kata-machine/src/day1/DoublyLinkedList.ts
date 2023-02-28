type ListNode<T> = {
    value: T;
    prev?: ListNode<T> | undefined;
    next?: ListNode<T> | undefined;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as ListNode<T>;

        this.length++; // bookkeeping, its not done automatically for linked lists
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Cant insert a node outside boundaries");
        }
        if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        } else {
            this.length++;
            let curr = this.getAt(idx) as ListNode<T>;

            const node = { value: item } as ListNode<T>;
            node.next = curr;
            node.prev = curr.prev;
            curr.prev = node;
            if (node.prev) {
                node.prev.next = curr;
            }
        }
    }
    append(item: T): void {
        this.length++;
        const node = { value: item } as ListNode<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                // the item to be deleted is found here
                break;
            }
            curr = curr.next; // getting its value after it has been found. if not found, keep scrolling till the end of the list
        }
        if (!curr) {
            // there is no item to be removed at all
            return undefined;
        }
        return this.removeNode(curr);
    }
    private removeNode(node: ListNode<T>): T | undefined {
        // now, having the item to be deleted, whats left to do?
        this.length--; // bookkeeping
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        } // empty list, if its the case
        // A <-> B <-> C, if youre about to remove B, you have got to cut the A<-B and B->C bonds, so no nodes are lost in handling the list. A is hopped over up until C and the <- bond from C is hopped over to A
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev; // <-- important note: you are communicating with the next or previous node itself, but not the bond that attaches these two elements (same goes for the above implementation node.prev.next and node.next.prev)
        } // this way, `node` is removed from the list
        if (node === this.head) {
            // if the deleted node is the head
            this.head = node.next;
        }
        if (node === this.tail) {
            // if the deleted node is the tail
            this.tail = node.prev;
        }
        node.prev = node.next = undefined; // this is done automatically in js
        return node.value; // returning the value that has been removed
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined; // js-ish way of doing things
        }
        return this.removeNode(node);
    }
    private getAt(idx: number): ListNode<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr;
    }
}
/*
List operations such as remove and append in the middle of the list are such costly operations that it might impossible to go unperceived.
*/
/*
By the rule of 3, if the same has been done thrice already, there should be a better implementation of it to keep the code D.R.Y
*/
