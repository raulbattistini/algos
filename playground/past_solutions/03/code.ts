function lengthOfLongestSubstring(s: string): number {
    // Creating a set to store the last positions
    // of occurrence
    let seen = new Map();
    let maximumLength = 0;
  
    // Starting the initial point of window to index 0
    let start = 0;
  
    for (let end = 0; end < s.length; end++) {
      // Checking if we have already seen the element or
      // not
      if (seen.has(s[end])) {
        // If we have seen the number, move the start
        // pointer to position after the last occurrence
        start = Math.max(start, seen.get(s[end]) + 1);
      }
  
      // Updating the last seen value of the character
      seen.set(s[end], end);
      maximumLength = Math.max(maximumLength, end - start + 1);
    }
    return maximumLength;
  }
  console.log(lengthOfLongestSubstring("abcabcbb"))