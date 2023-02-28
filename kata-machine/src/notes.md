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

Traversing back to where you want to insert another node is what takes time and is not so perfomant. Popping and insertion is always constant for queues.

The opposite of a queue (as implemented in `Queue.ts`) is a stack. A stack is implemented backwards as A <- B <- C <- D. \
A common example is a function stack trace when the code errors: it logs all the functions that were called/ invoked so far up until the error.

## Recursion

```typescript
function foo(n: number): number {
    if (n === 0) throw new Error("Can't have 0");
    else if (n === 1) return 1;
    else {
        return n + foo(n - 1);
    }
}
```

For each case there is a return argument, return value and argument. Taking for instance `foo(5)`, it'd be:\

-   For 5:

R.A: somewhere in memory\
R.V: 5 + something\
A: 5

-   For 4:

R.A: the one above (foo of 5)\
R.V: 4 + something\
A: 4

-   For 3:

R.A: the one above (foo of 4)\
R.V: 3 + something\
A: 3

-   For 2:

R.A: the one above (foo of 3)\
R.V: 2 + something\
A: 2

-   For 1:

R.A: the one above (foo of 1)\
R.V: 1 (the base case)\
A: 1

And this way it is allowed to go up and some up that `"something"` that appeared for each case that is not the basecase (`foo(1)`). Thus, the some of everything is 15 after going up and completing the statement for each case from 2 till 5.

// todo: insert all bookmarks from `MazeSolver.ts` here

## Quick Sort

> As for all sorts, a one element array or empty array is always sorted.

For quick sort, a way of understanding is to think of a 'Divide and Conquer' approach. For a given set of elements from `N` till `O`, a `P` (short for pivot) is taken closest to `O` boundary (the last element) and the array is ran over and over until `P` is located on the middle of the array, everything from the `N` boundary until `P` is smaller or equal to `P` and everything from `P` until `O` boundary is greater or equal to `P`.

Taking for instance an **unsorted** array ranging `[0, 31]`, a `P` 16 (exclusive, not included) is taken. Everything from `0-15` is put to the left-most side (in this case, `N-P` range) and everything from `17-31` put to right-most side (`P-O` range). Another pivot for the previous left-most side is taken (exclusive 8) and it creates another range `0-7` to left and a `9-15` to the right. Again another pivot for these two both: exclusive 4 for `0-7`, creating a `0-3` range and a `5-7` range and a exclusive 12 for `9-15`, creating a `9-11` range and a `13-15` range. Lastly for this first left side, an exclusive 2 is taken for `0-3`, creating `0,1` and `3,3`; an exclusive 6 for `5-7` range, creating `5,5` and `7,7`; an exclusive 10 for `9-11`, creating `9,9` and `11,11` and exclusive 14 for `13-15`, creating `13,13` and `15,15`.

`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀[0-31]`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/⠀⠀16⠀⠀\`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀0-15⠀⠀⠀⠀⠀17-31`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/8\⠀⠀⠀⠀⠀⠀⠀⠀24`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀0-7⠀⠀⠀9-15⠀⠀⠀⠀[...] // same goes for this side`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/4\⠀⠀⠀⠀/⠀12 \`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀0-3 5-7⠀9-11⠀13-15`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/2\⠀/6\ /10\ /14\`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀0,1⠀3 5 7 9⠀11 13 15`

Above is a representation of how such sort is done.

> # Important Take
>
> QuickSort does all that in place without having to store multiple copies of temporary structures in memory for each branched array just to hold some value.\
> For a GC (garbage collected) language, this has a special meaning, because Node.js garbage collection can take up to 7s for a small GC in a real-time sockets operation, decreasing performance by a bunch.\
> So it has a `O(n)` for memory, where `n` is the input size.\
> For best scenario runtime, as seen in the tree above, it is described by:

`⠀n⠀=⠀1`\
`---`\
`⠀2`<sup>k</sup>\
Rewriting as a logarithm, it would be `O(n.log n)` runtime.

But the worst possible scenario (the actual asked big O, mathematically speaking, the theta (`θ`)), for a reversed sorted array (i.e `[10, 9, 8, 7...]`) the runtime would be `O(n`<sup>2</sup>`)`.

But... Why?

Because the first sort takes the last element, that is 1 in the example, so 1 is put in the beggining of the array, then sort again your 10 - 1 elements (9 elements, of course). Again, 9 - 1 you have 8 and so on. That is a factorial (!) `n(n-1)` runtime. Solving that you have `n`<sup>2</sup>`-n`.\
For big O (theta, whatever you may call it), only the biggest polynomial matters, so it is `O(n`<sup>2</sup>`)` indeed.

A less frequently asked question is whether it may fall closer to best or worst scenario. Most likely, it is normally distributed, having a higher chance of having a average performance falling between O of n times log n and O of n squared. \
The likelihood for each sort can be found online, and the worst scenario is almost never reached as per some researches.

## Trees

Examples include the DOM, the filesystem, compilers... A Typescript interface implementation for it would be:

```typescript
type Node<T> = {
    value: T;
    children?: Node<T>[];
};
```

The words commonly associated with them are:

-   **_Root_**: the most parent node, the first
-   **_Height_**: the longest path from the root to the most child node
-   **_Binary tree_**: a tree in which has at most 2 children and at least 0 children. It'd be implemented as:

```typescript
type Node<T> = {
    value: T;
    left?: Node<T>;
    right?: Node<T>;
};
```

-   **_General tree_**: a tree with 0 or more children
-   **_Binary search tree_**: a tree in which has a specific ordering to the nodes and at most 2 children leaves - a node without a children (very strong ordering, instead of weak ordering given by some quick sort algorithm implemented upon it)
-   **_Leaves_**: a node without a children
-   **_Balanced_**: a tree is perfectly balanced if and only if when any node's left and right children have the same height (the more unbalanced a tree is, the harder it is to implement some algorithm upon it)
-   **_Branching factor_**: the amount of children a tree has (for a binary one, it'd be 2; for a general one, it'd be infinity)

### Traversals

There are different ways of accessing the nodes of a tree:

-   Pre Order: visiting a node and recursing over it to print out the values, **starting from left**, for instance. You visit all the nodes and print it out in a **specific ordering**. First, visiting the node; then recursion.
-   In Order
-   Post Order

> #### Specifically for non garbage collected languages, the recursion order would matter more, because the visiting would come right after and there would be a need to clean up memory left behind.

#### For this given tree:

`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀7`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/⠀⠀⠀\`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀23⠀⠀⠀⠀3`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/⠀\⠀⠀⠀/⠀\`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀5⠀⠀⠀4⠀18⠀⠀21⠀`

1. Pre Order

```
visitNode();
recurse();
```

Would result in `arr = [7, 23, 5, 4, 3, 18, 21]`

2. In Order

```
recurseLeft();
visitNode();
recurseRight();
```

Would result in `arr = [5, 23, 4, 7, 18, 3, 21]`

3. Post Order

```
recurseLeft();
recurseRight();
visitNode();
```

Would result in `arr = [5, 4, 23, 18, 21, 3, 7]`

The final order for each example would be different for each scenario, and the last one being the aforementioned (ideal) one for non-gc languages.

Runtime for tree operations: as `O` notation is always refering to grow with respect to the input, and the number of operations done over a `T` tree **doubles up** when **doubling the tree's size**, it's clear that its runtime if `O(n)`, or linear.

Visiting or not the node, its order if done is relative to each scenario. For a simple one as the mentioned (just printing them) it's almost like whatever the order that's chosen.

For a malware searching operation for a antivirus system, visiting the node (the folder in the filesystem in this example) is plain stupidity, this would mean getting affected by whatever the malware is present there.

What is done in `BTPreOrder.ts`, `BTInOrder.ts`, `BTPostOrder.ts` is known as depth first search, but it is not the only traversal available. This one implements a stack implicitly (last in, first out).

There is also breadth first search, its opposite. This one actually implements a queue implicitly (first in, first out). It follows strictly each level of the tree, taking the root level first, then the first childs (2<sup>nd</sup> level down the tree), then the childs from these (3<sup>rd</sup> level) and so on, doing a tree-level traversal/ iteration. BFS/ queue implementation will be done with JS 'arrays' (`[]`)

Theoretical runtime is O(n), whereas for JS/TS it is O(n<sup>2</sup>), because JS arrays (`let arr = []`) are arraylists under the hood and its operations have the following runtime

```
get: O(1)
push: O(1)
pop: O(1)
unshift: O(n)
shift: O(n)
```

After doing a search for a given level of the tree, it is approximately half of the tree below it. \
If it is 4 levels deep, then traversing the first 3 'layers' (a word that helps understand the underlying queues/ stacks) are ~1/2 of the tree's node number (7 until the 3<sup>rd</sup> level, 8 on the 4<sup>th</sup> level).

