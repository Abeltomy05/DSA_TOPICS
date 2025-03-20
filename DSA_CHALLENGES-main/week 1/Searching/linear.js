function Linear(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

console.log(Linear([2,3,4,56,5],56))