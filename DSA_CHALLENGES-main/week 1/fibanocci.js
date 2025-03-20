//Give a number 'n',find the first 'n' Elements of the Fibanacci sequence

function fibanacci(n){
    const fib = [0,1]
    for(let i=2;i<n;i++){
        fib[i]= fib[i-1]+fib[i-2];
    }
    return fib
}

console.log(fibanacci(6))

//Big-O = O(n)
//space complexity O(1)