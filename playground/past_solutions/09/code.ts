function isPalindrome(x: number): boolean {
    if (x.toString() === x.toString().split("").reverse().join("")) return true
    else return false
  };