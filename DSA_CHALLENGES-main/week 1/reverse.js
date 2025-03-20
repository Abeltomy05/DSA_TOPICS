function reverse(array){
    for(let i=0;i<array.length/2;i++){
        [array[i],array[array.length -1-i]]=[array[array.length-1-i],array[i]];
    }
    return array
}

console.log(reverse([1, 2, 3]));
//Time Complexity O(n)
//Space Complexity O(n)


//method 2
function reverse(arr){
    let a = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        a.push(arr[i]);
    }
    return a;
}
//Time Complexity O(n)
//Space Complexity O(1)
