function fibanacci(n){
    if(n<2){
        return n
    }
    return fibanacci(n-1) + fibanacci(n-2)
}

console.log(fibanacci(0))
console.log(fibanacci(1))
console.log(fibanacci(6))
console.log(fibanacci(9))
//Time Complexity:O(2^n)
//Space Complexity: 𝑂(n)