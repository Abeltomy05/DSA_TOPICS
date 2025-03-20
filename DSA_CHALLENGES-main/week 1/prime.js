//Give a natural number 'n', determine if the number is prime or not

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(9))
console.log(isPrime(11))

//Time Complexity: 𝑂(/𝑛)
//Space Complexity: 𝑂(1)
