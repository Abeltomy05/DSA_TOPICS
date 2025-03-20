const twoSum = (arr,target)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [i,j]
            }
        }
    }
}

console.log(twoSum([1,4,5,2],5))

//Time Complexity : O(n^2)
//Space Complexity : O(1)