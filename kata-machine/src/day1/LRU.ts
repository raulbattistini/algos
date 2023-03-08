type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

function createNode<V>(value: V): Node<V> {
    return { value };
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>; // the same doubly linked list taking the generic parameter as the V value from the LRU
    private tail?: Node<V>;

    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        // does the value exist?
        let node = this.lookup.get(key);
        if (!node) {
            node = createNode(value);
            this.length++;
            this.prepend(node);
            this.trimCache();

            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
            return;
        } else {
            //  moving it to the front of the list
            this.detach(node);
            this.prepend(node);
            node.value = value // updating the value, what else?
            
        }

        /*
        get()
        if it does not, then it must be inserted... but taking into consideration capacity and evict if over it
        if it does, it needs to be updated to the front of the list and update it then
        */
    }
    get(key: K): V | undefined {
        // check the cache for existence
        const node = this.lookup.get(key);
        if (!node) {
            return undefined;
        }
        // update the value found and move it to the front
        this.detach(node);
        this.prepend(node);
        /*return out the value found or undefined if did not exist*/
        return node.value;
    }
    private detach(node: Node<V>): void {
        if (node.prev) {
            node.prev = node.next;
        }
        if (node.next) {
            node.next.prev = node.next;
        }
        if (this.length === 1) {
            this.tail = this.head = undefined;
        }
        if (this.head === node) {
            this.head = this.head.next;
        }
        if (this.tail === node) {
            this.tail = this.tail.prev;
        }
        node.next = undefined;
        node.prev = undefined;
    }
    private prepend(node: Node<V>): void {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;

        this.head = node;
    }
    private trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }
        const tail = this.tail as Node<V>;
        this.detach(this.tail as Node<V>);

        const key = this.reverseLookup.get(tail) as K;
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);
        this.length--
    }
}
