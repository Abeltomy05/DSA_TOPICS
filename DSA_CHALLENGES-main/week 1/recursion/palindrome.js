function palindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return palindrome(str.substring(1, str.length - 1));
}

console.log(palindrome("malayalam"));
console.log(palindrome("hello"));  

//Time Complexity: 𝑂(𝑛)
//Space Complexity: 𝑂(n)