function quick(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

const array = [29, 10, 14, 37, 13];
console.log("Original Array:", array);
const sortedArray = quick(array);
console.log("Sorted Array:", sortedArray);


//Method 2:-
//Quick Sort in-place:
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot index
        let pivotIndex = partition(arr, low, high);

        // Recursively sort elements before and after the pivot
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    // Choose the last element as the pivot
    let pivot = arr[high];
    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
        // If the current element is smaller than or equal to the pivot
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }
    // Swap the pivot with the element at i+1
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Return the pivot index
}

// Example usage
const array2 = [29, 10, 14, 37, 13];
console.log("Original Array:", array2);
const sortedArray2 = quickSort(array2);
console.log("Sorted Array:", sortedArray2);
