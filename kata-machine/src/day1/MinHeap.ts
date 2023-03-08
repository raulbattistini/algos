export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }
    //  both insert and delete operations are done in O(log n) runtime for worst case scenario, where it needs to go all the way up or down as the tree is complete in all cases, it always fills from left to right in all cases
    insert(value: number): void {
        // insert at the last position of the array, then heapify all the way up until this last position
        this.data[this.length] = value; // the end of the array is of course its length
        this.heapifyUp(this.length); // heapify, simply
        this.length++; // traditional bookeeping
    }

    delete(): number {
        //  remove the head value out and take the last element in the array, put it into the head's positon and bubble the other values down (heapify down)
        if (this.length === 0) {
            //   obvious basecase, could also return undefined for a js-ish solution
            return -1;
        }
        const out = this.data[0];
        //  reduce length then heapify down
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length]; // its needed to be at last position in the array to perform the operation (heapifying down)
        this.heapifyDown(0);
        return out;
    } // also called pop or poll

    private heapifyDown(idx: number): void {
        const leftIndex = this.leftChild(idx);
        const rightIndex = this.rightChild(idx);

        //  when doing a deletion, first remove the head, take the last element in the array(list), put into the first position and only then heapify down

        if (idx >= this.length || leftIndex >= this.length) {
            return;
        }

        const leftValue = this.data[leftIndex];
        const rightValue = this.data[rightIndex];
        const currentValue = this.data[idx];

        if (leftValue > rightValue && currentValue > rightValue) {
            // the right value is the smallest and the current value is greater than this smallest value. then, it's needed to swap the greater(current) and smaller(right one) values and heapify down
            // swapping
            this.data[idx] = rightValue;
            this.data[rightIndex] = currentValue;
            //  heapifying
            this.heapifyDown(rightIndex);
        } else if (rightValue > leftValue && currentValue > leftValue) {
            //  swap out left value
            this.data[idx] = leftValue;
            this.data[leftIndex] = currentValue;
            //  heapifying
            this.heapifyDown(leftIndex);
        }
    }
    private heapifyUp(idx: number): void {
        //  can be done either recursively or iterative, the latter being more performant

        if (idx === 0) {
            return;
        }
        const p = this.parent(idx);
        const parentValue = this.data[p];
        const v = this.data[idx];

        // if (parentValue < v) do nothing
        if (parentValue > v) {
            //  first take ourselves and swap with our parent node before doing what comes next
            // swap with parent, heapify up (till its no longer needed)
            this.data[idx] = parentValue;
            this.data[p] = v;
            //  heapify up based on parent's position
            this.heapifyUp(p);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        //  use length to check if the requested child exists
        return 2 * idx + 1;
    }
    private rightChild(idx: number): number {
        //  use length to check if the requested child exists
        return 2 * idx + 2;
    }
}
//  something to be kept in mind is garbage. the previous unused values remain unless cleaned
//  this case it is not needed because takes in numbers, but if instead the heap is using an array of generic over T (BinaryNode<T> | null, T extends ...whatever type your domain may use) then it is good practice to put in null or undefined for these values
