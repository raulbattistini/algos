("");
function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (seen[curr]) {
        return false;
    }
    seen[curr] = true;
    //  recurse
    // pre
    path.push(curr);
    if (curr === needle) {
        return true;
    }
    // recurse
    const list = graph[curr];
    for (let i = 0; i < list.length; i++) {
        //  no array methods, its needed to break or continue in the loop
        const edge = list[i];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }
    // post
    path.pop(); // not found in the branch of the graph
    //  as long the push and pop are mantained, the array order should be kept the same
    return false; // easiest basecase to manage
}

("");
("");
export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);

    const path: number[] = []; // new Array(graph.length).fill(-1);

    walk(graph, source, needle, seen, path);
    if (path.length === 0) {
        return null;
    }
    return path;
}
//  running time is: O(V+E) becuase for worst case scenario it's needed to check every single vertex and every single node