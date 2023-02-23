Arrays are almost the primitive of algorithms, they are the most basic structure that exists. For JS/TS, things work quite differently, though. As for Linked Lists, for instance, this is not quite the case: you cannot perform some get `arr[i]` of it, because they are arranged in such a manner that each element is a Node (or List Node) where the next element in the List is either of the generic `ListNode<T>` or `null`.\

> For Single Linked Lists:

```typescript
// A -> B -> C -> D, where A is the head of the list
class ListNode<T> {
    val: T,
    next?: ListNode<T> | null
}
```

> For Doubled Linked Lists:

```typescript
// A -> B -> C -> D, where A is the head of the list
class ListNode<T> {
    val: T,
    next?: ListNode<T> | null,
    prev?: ListNode<T> | null
}
```

\
They have no indexes and order of instructions matter. Insertion and deletion for LL is always O(1), the input size does not matter.\
Code implementation for Typescript would be:
```typescript
interface LinkedList<T> {
    getLength(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}
```
Traversing back to where you want to insert another node is what takes time and is not so perfomant.
Popping and insertion is always constant for queues.

The opposite of a queue (as implemented in `Queue.ts`) is a stack.
A stack is implemented backwards as A <- B <- C <- D. \
A common example is a function stack trace when the code errors: it logs all the functions that were called/ invoked so far up until the error.