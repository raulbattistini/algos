function maxArea(height: number[]): number {
    let max = 0;

    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
        if (height[i] < height[j]) {
            let k = i + 1;
            while (height[k] <= height[i]) {
                k += 1;
            }

            i = k;
        } else {
            let k = j - 1;
            while (height[k] <= height[j]) {
                k -= 1;
            }

            j = k;
        }
    }

    return max;
}
