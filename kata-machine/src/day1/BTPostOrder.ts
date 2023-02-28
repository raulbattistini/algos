function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    // recurse
    // pre
    // recurse till the bottom-most leaf
    walk(curr.left, path); // for convention sake, trees start at left
    walk(curr.right, path);
    path.push(curr.value);
    // post
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}