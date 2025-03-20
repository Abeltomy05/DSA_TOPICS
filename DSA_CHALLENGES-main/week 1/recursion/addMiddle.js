function addMiddle(original,newStr){
    if(original.length <=1){
        return original+newStr
    }

    const mid = Math.floor(original.length/2);
    const firstHalf = original.substring(0,mid)
    const secondHalf = original.substring(mid)

    return firstHalf+newStr+secondHalf
}

console.log(addMiddle("hello", "world"));

//Time Complexity:O(n)
//Space Complexity:O(n)