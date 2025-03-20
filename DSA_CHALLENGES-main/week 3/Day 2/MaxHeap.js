class MaxHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(i){
        return Math.floor((i - 1) / 2)
    }
    getLeftChildIndex(i){
        return i * 2 + 1
    }
    getRightChildIndex(i){
        return i * 2 + 2
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    heapifyUp(index){
        let parentIndex = this.getParentIndex(index)
        while(index > 0 && this.heap[parentIndex] < this.heap[index]){  // Change '<' to '>'
            this.swap(parentIndex, index)
            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }
    extractMax(){
        if(this.heap.length === 0){
            return 0
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return max
    }
    heapifyDown(index){
        let largest = index
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)

        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]){  // Changed '<' to '>'
            largest = leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){  // Changed '<' to '>'
            largest = rightChildIndex
        }
        if(largest !== index){
            this.swap(index, largest)
            this.heapifyDown(largest)
        }
    }
    heapSort(arr){
        const maxHeap = new MaxHeap()  
        let sorted = []
        for(let val of arr){
            maxHeap.insert(val)
        }
        while(maxHeap.heap.length > 0){
            sorted.push(maxHeap.extractMax())
        }
        return sorted
    }
}

const heap = new MaxHeap()
const arr = [6, 5, 34, 12, 7, 3, 98]
console.log(heap.heapSort(arr))  