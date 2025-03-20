class Queue{
    constructor() {
        this.queue = [];
    }

    isEmpty(){
        return this.size() ===0
    }
    enqueue(element){
        this.queue.push(element)
    }

    dequeue(element){
        if(this.isEmpty()){
            return "Under Flow";
        }
        return this.queue.shift()
    }

    front(){
        if(this.isEmpty()){
            return "No Elements";
        }
        return this.queue[0];
    }
    
    size(){
        return this.queue.length;
    }

    printQueue(){
        let queueString = ''
        for(let i=0;i<this.size();i++){
            queueString+= this.queue[i]+ ' '
        }
        console.log(queueString)
    }
}

const queuelist = new Queue()

queuelist.enqueue(23)
queuelist.enqueue(12)
queuelist.enqueue(56)
queuelist.printQueue()
queuelist.dequeue()
queuelist.printQueue()