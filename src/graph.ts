export function add_node_list(
    list: WeightedAdjacencyList,
    from: number,
    to: number,
    weight: number,
): void {
    let l = list[from];
    if (!l) {
        l = list[from] = [];
    }

    l.push({ to, weight });
}
// an example of graphs is regex'es, they traverse the number n times and this deteriorates performance a lot