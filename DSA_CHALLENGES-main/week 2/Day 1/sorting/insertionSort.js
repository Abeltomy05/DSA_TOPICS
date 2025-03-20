function insertion(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i]; // The current element to be inserted into the sorted part
    let j = i - 1; // Start comparing from the last element of the sorted part
    while (j >= 0 && arr[j] > key) {
      // While there are elements greater than key
      arr[j + 1] = arr[j]; // Shift elements one position to the right
      j--; // Move to the next element to the left
    }
    arr[j + 1] = key; // Place the key in its correct position
  }
  return arr;
}

const array = [29, 10, 14, 37, 13];
console.log("Original Array:", array);
const sortedArray = insertion(array);
console.log("Sorted Array:", sortedArray);
