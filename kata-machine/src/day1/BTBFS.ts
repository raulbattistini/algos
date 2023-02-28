export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: BinaryNode<number>[] = [head];

    while (q.length) {
        // given its not negative or 0
        const curr = q.shift() as BinaryNode<number> | null | undefined;
        if (!curr) {
            continue;
        }
        if (curr.value === needle) {
            return true;
        }
        if (curr.left) {
            q.push(curr.left);
        }
        if (curr.right) {
            q.push(curr.right);
        }
    }

    return false;
}
