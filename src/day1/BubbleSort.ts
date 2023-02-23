export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

//  a 1 number array is always sorted
// after every iteration when bubble sorting, the last number is always the largest one
// the last array is always of length N - (N + 1)
// performance is O(n²)
// immutability makes computate very fast but at the cost of replicating memory and copying for every sorting. sorting and immutability do not go well altogether