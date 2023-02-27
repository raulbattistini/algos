function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    // recurse
    // pre
    // recurse till the bottom-most leaf
    walk(curr.left, path); // for convention sake, trees start at left
    path.push(curr.value);
    walk(curr.right, path);
    // post
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
