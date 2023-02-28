function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return; // all good, the beginning and last elements meet
    }
    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1); // sorting before the pivot
    qs(arr, pivotIdx + 1, hi); // sorting beyond the pivot
    // both operations *do not* include the pivot itself, only what comes before and after
}

function partition(arr: number[], lo: number, hi: number): number {
    var pivot: number = arr[hi];

    let idx: number = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    /* last step needed for a case where an array [8, 7, 6, 4, 5] needs to be sorted: 
    5 is the pivot and it compares itself to 8, 7, 6 and sees these numbers are greater than it, when reaches 4, then it swaps positions with 8, so the array becomes [4, 7, 6, 8, 5] 
    */
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
/*
For most quick sorts, there'll be a function partition that returns the pivot and swaps numbers from one side to another and a quick sort function that does the quick sort itself.
*/
