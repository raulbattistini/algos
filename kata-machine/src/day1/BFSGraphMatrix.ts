//
//

("");
export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    ("");
    var seen = new Array(graph.length).fill(false);
    var prev = new Array(graph.length).fill(-1);
    seen[source] = true;
    const q: number[] = [source];
    do {
        const curr = q.shift() as number; // do not returning undefined
        if (curr === needle) {
            break;
        }
        const adjancencies = graph[curr];
        for (let i = 0; i < adjancencies.length; i++) {
            if (adjancencies[i] === 0) {
                // no edges here
                continue;
            }
            if (seen[i]) {
                // value already seen, do nothing
                continue;
            }

            //  only uncovered case now is that the value wasn't seen, so it is therefore needed to push into queue, mark it as seen and add from where it came from
            seen[i] = true;
            prev[i] = curr; // the popped off element from the graph had this as its parent, so here we are, marking it as read and marking as the previous value
            q.push(i);
        }
    } while (q.length);

    //  building backwards till finding a -1 in the previouses
    let curr = needle;
    const out: number[] = []; // the path through the graph, starting at the needle back to the source parameter
    while (prev[curr] !== -1) {
        out.push(curr); // the element currently being walked over is pushed to the path through the graph
        curr = prev[curr]; // the element being currently walked over is set to the previous one indexed by it, that is, its 'parent' that is pointing to it
    }
    if (out.length) {
        // there was a path from beginning to end
        return [source].concat(out.reverse()); // reversing the path to reorder it
    }
    return null;
}
/*
as for trees, there are the pre and post traversal stages, being pop and push implemented as if the representation took in a queue
to help implement such things, some helpers structures are created altogether: an array prev as
let prev = [-1, -1, -1]
that starts with negative 1, because no node has a connection to such number, and as the traversal goes on, the previous value to the searched value are pushed into the array
and an array seen as:
let seen = [false, false, false]
filled in with 'falses' because at first start no value has been seen so far. as the values are seen during the traversal, the values are 'turned on' as seen = [..., true]
*/
