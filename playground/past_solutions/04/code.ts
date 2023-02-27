function averageTwoSortedArrays(nums1: number[], nums2: number[]): number {
    let allNums = [];
    function median(values: number[]) {
      if (values.length === 0) throw new Error("No inputs");
  
      values.sort(function (a, b) {
        return a - b;
      });
  
      var half = Math.floor(values.length / 2);
  
      if (values.length % 2) return values[half];
  
      return (values[half - 1] + values[half]) / 2.0;
    }
    if (nums1 !== null || nums2 !== null) {
      for (let i of nums1) {
        allNums.push(nums1[i]);
      }
      for (let j of nums2) {
        allNums.push(nums2[j]);
      }
    }
    return median(allNums);
  }
  
  let arr1 = [1, 3];
  let arr2 = [2, 7];
  console.log(averageTwoSortedArrays(arr1, arr2));
  // console.log("arar");
  