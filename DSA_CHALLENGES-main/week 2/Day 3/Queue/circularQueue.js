//A circular queue is a type of linear data structure that follows the First In, First Out (FIFO) principle. However, unlike a standard queue, the last position in a circular queue is connected back to the first position, forming a circular structure. This design optimizes the use of memory by reusing the space of dequeued elements, which is not possible in a regular linear queue.


class circularQueue{
    constructor(size){
        this.queue = new Array(size)
        this.size = size
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.front === -1;
    }

    isFull(){
        return (this.rear+1)%this.size ===this.front;
    }

    enqueue(element){
        if(this.isFull()){
            console.log("Queue is Full");
            return;
        }
        if(this.isEmpty()){
            this.front = 0;
        }

        this.rear = (this.rear+1)%this.size;
        this.queue[this.rear] = element
    }

    dequeue(){
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return null;
        }
        const dequeueElement = this.queue[this.front]
        if(this.front===this.rear){
            this.front =-1
            this.rear = -1
        }else{
            this.front = (this.front+1)%this.size;
        }
        return dequeueElement
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return null;
        }
        return this.queue[this.front];
    }

    printQueue(){
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }
        let i = this.front;
        let result = '';
        while(true){
            result +=this.queue[i]+ ' '
            if(i===this.rear){
                break
            }
            i=(i+1)%this.size
        }
        console.log(result.trim())
    }
}

const cq = new circularQueue(5); 

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.printQueue(); 

cq.dequeue();
cq.printQueue(); 

cq.enqueue(50);
cq.enqueue(60);
cq.printQueue(); 

cq.enqueue(70);  
cq.dequeue();
cq.enqueue(70);
cq.printQueue(); 