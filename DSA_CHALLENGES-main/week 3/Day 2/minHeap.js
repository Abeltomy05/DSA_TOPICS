class MinHeap{
    constructor() {
        this.heap = []
    }
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    getLeftChildIndex(i){
        return i*2+1
    }
    getRightChildIndex(i){
        return i*2+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] =  [this.heap[index2],this.heap[index1]]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let parentIndex = this.getParentIndex(index)
        while(index>0&&this.heap[parentIndex]>this.heap[index]){
            this.swap(parentIndex,index)
            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }
    extractMin(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }
    heapifyDown(index){
        let smallest = index
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)
        if(leftChildIndex<this.heap.length&&this.heap[leftChildIndex]<this.heap[smallest]){
            smallest = leftChildIndex
        }
        if(rightChildIndex<this.heap.length&& this.heap[rightChildIndex]<this.heap[smallest]){
            smallest = rightChildIndex
        }
        if(smallest!==index){
            this.swap(index,smallest)
            this.heapifyDown(smallest)
        }
    }
    heapSort(arr){
        const Minheap = new MinHeap()
        let sorted = []
        for(let val of arr){
            Minheap.insert(val)
        }
        while(Minheap.heap.length>0){
            sorted.push(Minheap.extractMin())
        }
        return sorted
    }
}


const heap = new MinHeap()
const arr = [6,5,34,12,7,3,98]
console.log(heap.heapSort(arr))