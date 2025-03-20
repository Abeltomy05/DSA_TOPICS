function factorial(n){
    if(n ===0 ){
        return 1
    }
    return n * factorial(n-1)

}

console.log(factorial(0))

//Time Complexity: 𝑂(𝑛)
//Space Complexity: 𝑂(n)