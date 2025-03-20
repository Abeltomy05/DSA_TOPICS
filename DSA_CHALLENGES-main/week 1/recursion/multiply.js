function multiply(arr){
    if(arr.length ===0){
        return 1;
    }
   return arr[0]*multiply(arr.slice(1))
}

console.log(multiply([1,3,90,8]))

//Time Complexity:O(2^n)
//Space Complexity: 𝑂(2^n)