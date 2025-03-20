//Give an integer 'n', find the factorial of that integer.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result
}

console.log(factorial(6))

//Time complexity :O(n)
//space complexity :O(1)