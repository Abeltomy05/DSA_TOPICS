class QueueToStack {
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }

    push(value){
        this.queue1.push(value)
    }

    pop(){
        if(!this.queue1.length){
            console.log("Is Empty")
        }
        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift())
        }
        const poppedElement = this.queue1.shift()
        while(this.queue2.length){
            this.queue1.push(this.queue2.shift())
        }
        return poppedElement
    }

    display(){
        if(!this.queue1.length){
            console.log("Stack is Empty")
            return
        }
        console.log(this.queue1.join('->'))
    }
}

const stack = new QueueToStack();
stack.push(2);
stack.push(7);
stack.push(9);
stack.display();
console.log("Popped:", stack.pop());
stack.display(); 