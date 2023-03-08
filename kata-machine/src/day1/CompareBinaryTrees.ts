/*
Depth first preserves the structure of the tree as opposed to breadth first search
To compare 2 binary trees and say whether or not they are equal:
1. Are they *actually* binary trees? Measure if they have a root, and at least 2 children for the root node and atmost 2 children for each node all the way down till the leaf(ves). If so, continue
2. Are they equal in height? If so, continue
3. Does each node contain one single value? If so, continue
4. Else, compare node's values to see if they match
*/

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    //  basecases
    // structural check
    if (a === null && b === null){
        return true;
    }
    // structural check
    if (a === null || b === null){
        return false;
    }
    // value check
    if (a.value !== b.value){
        return false;
    }
    // recursion
    return compare(a.left, b.left) && compare(a.right, b.right);   
}

/*
it could be rewritten as:
    // value check
    if (a?.value !== b?.value){
        return false;
    }
as optional chaining operator already checks out whether or not the value exists
for the sake of strict structural checking, the used approach remains
 */