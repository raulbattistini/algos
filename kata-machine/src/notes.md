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

### Binary Search Tree

> Everything to the left is lesser or equal to the root node and everything to the right is greater or equal to.

_Complete_ tree example:

`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀5`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/⠀⠀⠀\`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀3⠀⠀⠀⠀10`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/⠀\⠀⠀⠀/⠀\`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀2⠀⠀⠀4⠀9⠀⠀11`

To balance such tree (if it wasn't already sorted), it must be sorted, taking `5` in the example (the root node) as the pivot for the operation.

Doing a search, it would be like (pseudocode)

```
fn find(value: number, node: BinaryNode<number>): boolean {
    if (!value || !node) return false;
    if (value === node.value) return true;
    if (value > node.value){
        return find(value, node.left);
    }
    if (value < node.value){
        return find(value, node.right)
    }
}
```

#### Runtime

> Worst case runtime is indeed O(n), for a case where it is a linked list combining so many repeating numbers.

But it's measured as O(h), where h = height of the tree. \
There is actually a range from runtime, from O(log<sub>2</sub> n) to O(n). It varies depending on how balanced the tree already is.\
2 common ways of balancing the tree are AVL and Red-Black trees.

#### Insertions

> Insertions look a lot like searches, because to insert a new node it is needed to **find** where it can be inserted, preserving the rules (`left >= root && right <= root`).

**They inherently unbalance the tree.**\
It's the same type of traversal as a `find()`, but going until a `null` point is reached (a leaf, to keep the terminology).

A pseudocode for insertion would be:

```
fn insert(node: BinaryNode<number>, value: number): boolean {
    if (node.value < value){
        if (!node.right){
        return insert(node.right, value)
        }
    }
    else if (node.value >= value){
        return insert(node.left, value);
    }
    // if it's null, what should be done?
}
```

There is a decision on how to mutate the tree, if the value is `null`, actually. Should the `null` be inserted at the righthand side of the tree?

#### Deletions

> There are a few cases to consider:

1. The node has no child: `delete()`
2. The node has one child only: point the previous node to the child and `delete()` the node

But... For a case like

`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀15`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/⠀⠀⠀\`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀7⠀⠀⠀⠀⠀51`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/⠀\⠀⠀⠀⠀/⠀\`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀4⠀⠀⠀*⠀⠀25⠀⠀100`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀/ \⠀⠀ /⠀\`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀*⠀37⠀* ⠀⠀*`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀/ \`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀*⠀⠀⠀*`⠀⠀

And you need to delete the node `51`, how do you do it?\
Two approaches:

1. Go down to the smallest element on the large side (in this case, 37) until it has no child or only one (and it's approached the same way it was already described) and make the upper node point to it, then this new node will point to its previous parent (in this case, 25) and everything is fine.
2. Go down to the largest element on the small side (a children of 100 to the left if it existed in this scenario) and do the same there.\
   Which one to choose? (Knowing that each choice will lead to two separate trees, different in shape).

Knowing the height of the tree (a operation done in O(n) time), you are able to tell if the tree will shrink if put to one side and prevent it from 'spidering out' (spreading randomly).\
For a 'spreaded' (ugh! grammar) tree, the find will be much slower, the tree won't be balanced at all... So there is a reason to prefer one over another in this case. The more you shrink the tree is (usually?) the best.

#### Balancing the tree

> Here 'algorithms' (properly specializations of the BST) such as red-black and AVL come into play.

If the tree is imbalanced after the insertion, here techniques (rotation algorithms) order it again.

> ####

-   AVL:\
    It defines 4 things, goes over each of the possible cases and how it can be rotated. If something is inserted, the tree is walked back. The tree is almost always perfectly balanced. But it comes with a downside: the more rotations the slower the tree.

When to choose between AVL and Red-Black Trees:\

> There is no straight answer to that.

Some guidelines are: if you don't find often but insert a lot: Red Black. Although, if you find a lot and insert rarely, then AVL is _perhaps_ a better choice.

#### Priority Queue/ Binary Heap

-   Every child and grandchild is smaller (Max Heap) or larger (Min Heap) than the current node.

Whenever a node is **added or deleted**, the tree must be adjusted.\
There is no traversing. There is no gaps or holes. There is always 0 or 2 childs for each node.

Operations are made after setting the tree as an arraylist.

#### Trie trees

-   Pronounced as re _trie_ val, but for the sake of pronounciation, calling it a _"tree tree"_ does not sound the best. People call it also prefix or digital trees

It is like an autocomplete tree, where the root node does not contain any values, but the 'bond' has some sort of value (either a number or letter or something) that gets added in the upcoming node.

For an English-language Trie, the value in the 'bond' is one of 26 possibilities (the alphabet letters).

An example of implementation is a spell checker. For the word cat, the upcoming node (beginning from the root) would contain the letter 'c', the next would contain the letter 'a', the last one (for the example) would be 't' and this last node would either contain a last children with a "\*" to mark it as being a word or a flag lastly saying 'isWord'. Both can be used, the latter one maybe being more fitting for some purposes (check if it has a 27th value and mark it as a word automatically).

`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀(⠀⠀)`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀/C ⠀⠀\M`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀(C)⠀⠀⠀⠀⠀⠀(M)`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀A/⠀\O⠀⠀⠀⠀E/⠀\A`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀(A)⠀⠀(O)⠀(E)⠀⠀(A)`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀T/⠀⠀ D/⠀⠀E/⠀⠀⠀⠀⠀⠀\T`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀*(T)*⠀(D)⠀(E)⠀⠀⠀⠀⠀⠀⠀(T)`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀E/⠀⠀⠀⠀\T⠀⠀⠀⠀⠀⠀⠀⠀⠀\H`\
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀*(E)*⠀⠀*(T)*⠀⠀⠀⠀⠀⠀⠀*(H)*`

It is possible to give some autocomplete for the end user by first checking whether or not the branch for the typed character exists (for the first character this will most likely be true), i.e. 'c' is typed, 'c' branch exists, checks possible next values using BFS or DFS (alphabetical, for instance, with pre-order traversal) in the tree.\
However, the set of words is usually quite large, so how to filter them out? By adding a score or frequency, it's possible to get the most relevant and display nicely to the user. Because those are stored at runtime, there's little overhead if any.

> The hard parts are **insertion** and **deletion**

-   For insertion: Simple iterative loop to go to the current node

```
type Node = {
    isWord: boolean,
    child: UintArray[26],
}

fn insertion(str: string, character: string): void {
    var curr = head;
    var node;
    for (characer in str){
        if(curr[character]){
            curr = curr[character];
        }
        node = createNode();
        curr[character] = node;
        curr = node;
    }
    curr.isWord = true;
}
```

They're commonly associated with autocomplete mechanisms or caching ones. They have a O(1) constant runtime because no matter the input size, the time will be varying depending only on the predetermined array size (26 for the language example).

## Graphs

Everything so far is a graph indeed (graphs are nodes with some n number of connections among them, from 0 to infinity).\
All trees are graphs, not all graphs are trees.

Terminology associated with them:

-   **_Cycle_**: if, for a `n` number of nodes, such that `n >= 3`, it is possible to begin in a node (vertex) and come back to it, it is called a cycle. For instance, have the vertexes named `A, B, C, D` and it is possible to walk `A -> B -> C -> D -> A`, it is a cycle.
-   **_Acyclic_**: a graph that contains no cycles (derp)
-   **_Connected_**: each node can reach any other node in the graph
-   **_Directed_**: the connections are like arrows, they have _directions_. They can have one-way connections, asymmetric ones. For social media, they have different followage directions between users
-   **_Undirected_**: no directions between nodes (`!directed`)
-   **_Weighted_**: the connection has some value associated with it. For a highway, the neighbourhood <--> center may have different weights (speed, in this case). They more commonly associated with traversals

Implementation terminology:

-   **_Vertex_**: a node, or point (rarely called this way), the element in the graph.
-   **_Edge_**: the connection between two nodes

For the big O (O(...)) it will be commonly stated in terms of `V` and `E`, where `V` stands for `vertices` and `E` stands for `edges`.\
So `O(V * E)` means that the given algorithm checks every `vertex` and on every `vertex` checks every `edge`.

Representations:

1. **Adjancency List**:\
   Almost always. It must be described the directions and weight associated with it for each connections it may have.

`⠀⠀⠀⠀⠀⠀⠀⠀⠀10`\
`⠀⠀⠀⠀(0)⠀⠀-->(1)`\
`⠀⠀⠀⠀/⠀\⠀⠀⠀⠀/`\
`⠀⠀⠀/⠀⠀⠀\5⠀/`\
⠀⠀`(2)<--(3)`

```typescript
type Vertex<T> = {
    to?: T;
    weight?: number;
};
[
    // the array determines the graph itself
    [
        // the first array inside the graph representation is the first element, the 0 in this case
        {
            // the first object is the first connection (numerically ordered in this case)
            to: 1,
            weight: 10,
        },
        {
            // the second object the second connection
            to: 3,
            weight: 5,
        },
    ],
    [{}], // the second array inside the array-graph is the second element, 1 in this case that does not share any connections
    [
        {
            to: 0, // only one connection, unweighted
        },
    ],
    [
        {
            to: 1,
        },
        {
            to: 2,
        },
    ],
];
```

2. **Adjacency Matrix**:\
   Rare. They take a lot of memory and setup to be able to do it like that: `O(V`<sup>2</sup>`)`.

```typescript
[
    [0, 10, 0, 5], // for the 0 vertex, each number in array being the weight for the connection for a given node, from 0-3 (i.e the connection between 0 and 3 has a weight of 5, between 0 and 1 a weight of 10)
    [0, 0, 0, 0], // for the 1 vertex, it does not have connections
    [0, 0, 0, 0], // for the 2 vertex, same as above
    [0, 0, 0, 0], // for the 3 vertex, also the same
];
```

#### Operations

If all trees are graphs, then the same operations done in a tree can be performed on a graph, like a breadth-first search or a depth-first search.

#### Dijkstra's Best Path

> Gets the lowest or nearest unseen/ unvisited node.

The addition is a `distances` array, typed out as `let distances = [0, Infinity, Infinity...]` (`let distances = new Array(graph.length).fill(Infinity)` is better implementation) with the `0` being the source, where you start traversing the graph.

In other words, having for instance a weighted directional graph from 0-4, it can have a path of weight 9, 7 or 5 in which the path of weight 5 takes 3 vertices and the weight of 9 takes 2 vertices, the Dijkstra's algorithm reassigns the shortest path a `low` variable if any better path is found. If the 9-weight path goes 0-1-2 and the 5-weight path goes 0-2-4 the algorithm would start in numerical order and once the 0-2-4 path is looked, the variable is reassigned with the new best path.

#### Runtime

Incredibly, its not O(V\*E) as expected. A pseudocode would be

```
while hasUnvisited(){
    lo = getLowestU();
    seen[lo] = true;

    for (edge in lo){
        if seen[edge] continue;
        dist = dists[lo] + edge.weight;
        if (dist < dists[edge]){
            prev[edge] = lo;
            dists[edge] = dist;
        }
    }
}

```

Because for each node, in worst case scenario, it would be checked wevery other node and edge. But in reality, if using a adjancency list, the only checked edges and nodes are the ones connected to the current vertex (i.e an unrelated node would not change input). So runtime is actually O(n.E), with n being how many edges a vertex has.\
For adjancency matrix, the runtime would be the terrible O(V<sup>2</sup>+E).

-   Key takeaway: not considering any negative values!

## Maps

What are maps? HashMaps are constantly asked in interviews (when in doubt, just guess it's a hashmap). They're not `new Map(shit)` or `{}` (the latter one being an object, with very different properties).

Terminology associated with them:

-   **_Load Factor_**: the amount of data points versus the amount of storage they have(?). Can be represented as `data.len/ storage.capacity`
-   **_Key_**: a value that is hashable and is used to look up data. The hash has got to be consistent (that is, if a uniquely defined key '0' is accessed sometime, later on that same key '0' has to return the same value that was previously associated with it). The key is used to create something in which it is possible to access the value.
-   **_Value_**: a value associated with the key
-   **_Collision_**: when 2 keys map to the same cell

A hash must have a hash function, defined as: `hash(k)`, where `k` is the key and it outputs a unique number.

Taking for example a set of numbers that needs to be mapped and stored in a structure with slots (each slot will store both the key, value pair). If each slot is denoted by an array, it'd be something like\
Slot 0: `[{K`<sub>`0`</sub>`, V`<sub>`0`</sub>`}]`\
Slot 1: `[{K`<sub>`1`</sub>`, V`<sub>`1`</sub>`}]`\
Slot 2: `[{K`<sub>`2`</sub>`, V`<sub>`2`</sub>`}]`\
And so on.

```
var set = [7, 3, 15]
hash(k: number): number => { 
    return k % 10
}
```

For such a small set, the hashing function would work just fine, but if there were `10` and `20` they both would collide already. Common techniques to handle collision are probing (look for empty slots down the storage) and chaining (attach the last value to the already mapped key-value pair), each of these with their own tradeoffs regarding space and memory.\
For the probing solution, if the `load factor` increases much, it means that the whole hash table would need to have a larger amount of storage with more empty slots and all the data already there would need to be transferred (_very_ computationally expensive, not to mention the drop in efficiency as the load factor increases).
> * Everything is subject to change if the set size is unknown before implementation. Defining the size of the hash table beforehand can be tricky. 

#### **Insertion and Deletion**
Just go to one slot, hit the key and see if it is equal to the one that is wanted. Same goes for deletion. Runtime is constant, O(1) for both

## LRUs
> Least Recently Used: a caching mechanism that evicts the least recently used item.

