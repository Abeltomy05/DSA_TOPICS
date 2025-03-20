function bubble(arr){
    const n = arr.length
    for(let i=0;i<n-1;i++){
        for(j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}


const array = [29, 10, 14, 37, 13];
console.log("Original Array:", array);
const sortedArray = bubble(array);
console.log("Sorted Array:", sortedArray);