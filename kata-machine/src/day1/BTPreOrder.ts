// this exercise objective is, given a tree's head, are the visited nodes in that order ==> pre order array of the tree
// the recursion in a tree is stopped when there are no more nodes to be ran over, so if the last node has no 'left' property, then it's the basecase for the tree
// for recursion, creating a helper funtion might be more feasible at first or even afterwards

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    // recurse
    // pre
    path.push(curr.value);
    // recurse till the bottom-most leaf
    walk(curr.left, path); // for convention sake, trees start at left
    walk(curr.right, path);
    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

// the upmost element is named head or root, as already said in notes.md file
